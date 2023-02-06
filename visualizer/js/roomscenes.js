//-------------------------------------------------------
// Initialize Room scenes
//-------------------------------------------------------
function initRoomscenes() {
    return roomscenes = {
        // Show/Hide room scene component
        //-------------------------------------------------------
        show: function() {
            document.getElementById("roomscenes").style.display = "block";
            dev.log("Show room scenes");
        },
        hide: function() {
            document.getElementById("roomscenes").style.display = "none";
            dev.log("Hide room scenes");
        },

        // Run when ever the room scenes get changed.
        // Copy the elements and add to html
        //-------------------------------------------------------
        generateFilter: function() {
            var sceneType = [];
            var filterContent = "<span>ALL</span>";

            document.querySelectorAll("cham-roomscenes li").forEach(function(el) {
                var type = el.getAttribute("data-type");
                type = type.split(" ");
                type.pop();
                type = type.join(" ");
                if (sceneType.indexOf(type) == -1) {
                    sceneType.push(type);
                }
            });

            sceneType.forEach(function(el) {
                filterContent += "<span class='selected'>" + el + "</span>";
            });

            document.getElementById("scene-filter").innerHTML = filterContent;
        },

        // Filter room scenes based on data-type attribute
        //-------------------------------------------------------
        filterRoomScenes: function(type) {
            if (type == "ALL") {
                $("cham-roomscenes li").css("display", "inline");
            } else {
                $("cham-roomscenes li").css("display", "none");
                $("cham-roomscenes li[data-type*='" + type + "']").css("display", "inline");
            }
            dev.log("Filter Scenes, TYPE : " + type);
        },

        // Event Handlers
        //----------------------------------------------------
        initEvents: function(router) {

            // Redirect user to visualizer when room scene is selected
            //-------------------------------------------------------
            document.querySelector('cham-roomscenes').addEventListener('select', function(e) {

                var sel = '-1';
                var sku = IMWC.getURLParameter('sku');
                if (sku != null) {
                    //lookup sku to get sel
                    var data = IMWC.getSeries();
                    for (var i = 0, series; series = data[i++];) {
                        if (sel != '-1') break;
                        for (var z = 0, product; product = series.arr[z++];) {
                            if (product.sku.toLowerCase() == sku.toLowerCase()) {
                                sel = product.id;
                                break;
                            }
                        }
                    }
                }
                router.navigate('visualizer/spec/' + encodeURI(e.value) + '/sel/' + sel);

                $('.tabs .tab').css('visibility', 'hidden');
                $(".tab-content").removeClass("show");
                $('.filter-option').find('input:checked').click();
                $('.product-filters .searchbox').val('').each(function() {
                    productMenu.searchProducts('', '#' + $(this).closest('.tab-content').find('cham-series-template').attr('id'));
                });
                $(window).resize();
            });

            //document.querySelectorAll("cham-roomscenes li div").forEach(function (el) {
            //  el.addEventListener('click', function (e) {
            //    $(this).parent().click();
            //  })
            //});

            // Filter rooms scenes based on the filter tab
            //-------------------------------------------------------
            document.querySelectorAll("#scene-filter span").forEach(function(el) {
                // On click event
                el.addEventListener("click", function(e) {
                    // Show selected tab
                    document.querySelector("#scene-filter .selected").classList.remove("selected");
                    el.classList.add("selected");
                    // Filter scenes
                    roomscenes.filterRoomScenes(e.target.textContent);
                })
            });

            document.querySelectorAll('.room-scene-filter div').forEach(filterButton => {
                filterButton.addEventListener("click", function(e) {
                    document.querySelectorAll('.room-scene-filter div').forEach(el => {
                        el.classList.remove('selected');
                    });
                    filterButton.classList.add('selected');
                    var category = filterButton.getAttribute('data-category');

                    document.querySelectorAll('cham-roomscenes li').forEach(el => {
                        if (category == '') el.classList.remove('hidden');
                        else if (category == 'Living Room') {
                            if (Array('Kitchen', 'Bathroom').indexOf(el.getAttribute('data-category')) === -1) el.classList.remove('hidden');
                            else el.classList.add('hidden');
                        } else {
                            if (el.getAttribute('data-category') == category) el.classList.remove('hidden');
                            else el.classList.add('hidden');
                        }
                    });
                });
            });

        },

        onTypeClick: function(type) {

        },
        productCategory: "",
        getProductCategory: function() {
            if (productCategory == "ALL" || productCategory == "")
                return "";

            return "name == '" + productCategory + "'";
        },
        setProductCategory: function(category) {
            productCategory = category;
            document.querySelector('cham-roomscenes').setAttribute("filter", this.getProductCategory());
            return false;
        }
    };
}