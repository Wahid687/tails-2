//-------------------------------------------------------------------
// Initialize Compare
//-------------------------------------------------------------------
function initCompare(compare_mode, visualizer, misc) {
    return compare = {
        status: false,
        oldSel: "",
        currentProdID: "",
        lastProdID: "",

        // Turn compare mode ON
        //-------------------------------------------------------------------
        on: function() {
            // misc.showLoading();
            visualizer.unzoom();

            document.getElementById("comparer").classList.remove("hide");
            document.querySelector("#compare-floors").classList.add("on");
            document.querySelector("#compare-floors").innerHTML = "Close Compare";
            document.querySelectorAll('.compare-side').forEach(el => {
                el.style.display = "block";
            });

            document.querySelector('.viz-controls').style.display = 'none';

            this.init();
            if (this.currentProdID != '') this.setCurrentImage(this.currentProdID);
            dev.log("Turn compare Mode ON");
        },

        // Turn compare mode OFF
        //-------------------------------------------------------------------
        off: function() {
            document.getElementById("comparer").classList.add("hide");
            document.querySelector("#compare-floors").classList.remove("on");
            document.querySelector("#compare-floors").innerHTML = "Compare";
            document.querySelectorAll('.compare-side').forEach(el => {
                el.style.display = "none";
            });

            document.querySelector('.viz-controls').style.display = 'block';

            document.getElementById("current-prod").style.display = "none";
            document.getElementById("previous-prod").style.display = "none";

            dev.log("Turn compare Mode OFF");
        },

        // Toggle compare mode ON/OFF
        //-------------------------------------------------------------------
        toggle: function() {
            if (this.status) {
                this.status = false;
                this.off();
            } else {
                this.status = true;
                this.on();
            }
        },

        // Initialize compare viz
        //-------------------------------------------------------------------
        init: function() {
            var vizData = document.getElementById(visualizer.vizId).getSaveData();
            if (!productMenu.designerCollectionLoading)
                document.getElementById(visualizer.subVizId).load(vizData.spec, vizData.sel);
            else productMenu.designerCollectionLoading = false;
            dev.data("Compare mode initialized", [vizData.spec, vizData.sel]);
        },

        // Sets current image for compare view
        //-------------------------------------------------------------------
        setCurrentImage: function(selID) {
            var image = document.querySelector('li[data-sel="' + selID + '"] img').getAttribute("src");
            var title = document.querySelector('li[data-sel="' + selID + '"] .title').innerText;

            document.querySelector("#current-prod .prod-img").setAttribute("src", image);
            document.querySelector("#current-prod span").innerText = title;

            document.getElementById("current-prod").style.display = "block";

            dev.log("Set current image - " + selID);
        },

        // Set previous image for compare view
        //-------------------------------------------------------------------
        setPreviousImage: function(selID) {
            if (selID !== "") {
                var image = document.querySelector('li[data-sel="' + selID + '"] img').getAttribute("src");
                var title = document.querySelector('li[data-sel="' + selID + '"] .title').innerText;

                document.querySelector("#previous-prod .prod-img").setAttribute("src", image);
                document.querySelector("#previous-prod span").innerText = title;

                document.getElementById("previous-prod").style.display = "block";

                dev.log("Set previous image - " + selID);
            }
        },

        compareSide: function(side) {
            document.querySelectorAll('.compare-side').forEach(el => {
                el.classList.remove('selected');
            });
            if (side == 'left') document.querySelector('#left-side').classList.add('selected');
            else if (side == 'right') document.querySelector('#right-side').classList.add('selected');
        },


        // Initialize Events
        //-------------------------------------------------------------------
        initEvents() {

            // Main viz ready event
            //-------------------------------------------------------------------
            document.getElementById(visualizer.vizId).addEventListener('ready', function(result) {
                compare.init();
                window.dispatchEvent(new Event('resize'));
            });

            // Sub viz ready event
            //-------------------------------------------------------------------
            document.getElementById(visualizer.subVizId).addEventListener('ready', function(result) {
                window.dispatchEvent(new Event('resize'));
                // misc.hideLoading();

                dev.data("Sub viz loaded", document.getElementById(visualizer.subVizId).getSaveData());
            });

            document.getElementById(visualizer.subVizId).addEventListener('surface_apply_done', function(result) {
                misc.hideLoading();
                $('.tab.active').click();
            });

            // Product selected event
            //-------------------------------------------------------------------
            document.querySelectorAll("cham-series-template").forEach(function(el) {
                el.addEventListener('select', function(event) {
                    compare.lastProdID = compare.currentProdID;
                    compare.currentProdID = event.value.id;

                    dev.log("Product IDs saved : " + event.value.id);
                });
            });

            // Surface applied to main visualizer
            //-------------------------------------------------------------------
            document.getElementById(visualizer.vizId).addEventListener('surface_apply_done', function(e) {

                var vizData = e.target.getSaveData();

                if (compare.status) {
                    compare.setCurrentImage(compare.currentProdID);

                    if (compare.oldSel !== "") {
                        // compare.setPreviousImage(compare.lastProdID);
                        // document.getElementById(visualizer.subVizId).load(vizData.spec, compare.oldSel);
                    }
                }
                compare.oldSel = vizData.sel;
            });

            //Custom Feature : Opens up product image light box when compare thumbnail clicked
            //-------------------------------------------------------------------
            document.querySelectorAll(".compare-prod").forEach(function(el) {
                el.addEventListener("click", function() {
                    dev.log("Expanding Compare thumbnail");

                    // Get image and title from compare thumb
                    var img = el.querySelector(".prod-img").getAttribute("src").replace("250", "400");
                    var title = el.querySelector("span").innerText;

                    //Set prod title and image on view
                    document.querySelector("#product-view .prod-title").innerText = title;
                    document.querySelector("#product-view .prod-image").setAttribute("src", img);

                    //Show light box with prod details
                    misc.showLightBox("product-view");
                });
            });
        }
    }
}