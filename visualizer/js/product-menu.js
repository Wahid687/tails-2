//-------------------------------------------------------------------
// Initialize Product Menu
//-------------------------------------------------------------------
function initProdMenu(visualizer) {

    return productMenu = {

        selectedSurface: "",
        selectedSortorder: "",
        productData: "",

        favProducts: [],
        recentProducts: [],

        designerCollections: [
            [
                '176473(2372567,2499167,147607,-1)',
                '2372730(2499167,-1)',
                '2469083(2499167,-1)',
                '1297615',
                '1021022',
                '1020870',
                '2372730(2499167,-1)',
                '2372736(2499167,-1)'
            ],
            [
                '2468776(2499167,-1)',
                '2468778(2499167,-1)',
                '2468778(2499167,-1)',
                '238952',
                '1463251',
                '1023186',
                '2468778(2499167,-1)',
                '2707924(2499167,-1)',
            ],
            [
                '2372669(2499167,-1)',
                '2469075(2499167,-1)',
                '2372727(2499167,-1)',
                '264719',
                '1022239',
                '1021026',
                '2469075(2499167,-1)',
                '2372677(2499167,-1)'
            ],
            [
                '176473(2372772,2499167,147607,-1)',
                '2469021(2499167,-1)',
                '2468787(2499167,-1)',
                '236126',
                '1022345',
                '1022663',
                '2469021(2499167,-1)',
                '2469020(2499167,-1)',
            ],
            [
                '2708081(2499167,-1)',
                '2468944(2499167,-1)',
                '2708182(2499167,-1)',
                '412302',
                '1020950',
                '1022701',
                '2468944(2499167,-1)',
                '2708083(2499167,-1)'
            ],
            [
                '2707802(2499167,-1)',
                '2707798(2499167,-1)',
                '2468853(2499167,-1)',
                '1507760',
                '1022259',
                '1022257',
                '2707798(2499167,-1)',
                '2707807(2499167,-1)'
            ],

        ],



        patternsByRatio: {
            '1x10': [176471, 148991, 203043, 214642, 176473],
            '3x10': [176471, 148991, 203043, 214642, 176473],
            '1x1': [148991, 203043, 176471, 214642, 176473],
            '1x1_2': [176471, 148991, 203043, 214642, 176473],
            '1x1_5': [176471, 148991, 203043, 214642, 176473],
            '2x3': [176471, 148991, 203043, 214642, 176473],
            '1x2': [176471, 148991, 203043, 214642, 176473, 1281126],
            '1x2_2': [176471, 148991, 203043, 214642, 176473],
            '1x2_5': [176471, 148991, 203043, 214642, 176473],
            '1x3': [176471, 148991, 203043, 214642, 176473, 1657772],
            '1x4': [176471, 148991, 203043, 214642, 176473, 1281127],
            '1x5': [176471, 148991, 203043, 214642, 176473, 1281127],
            '1x6': [176473, 1288309],
            '1x7': [176471, 148991, 203043, 214642, 176473],
            '1x7_5': [176471, 148991, 203043, 214642, 176473],
            '1x9': [176471, 148991, 203043, 214642, 176473],
            '5x11': [176471, 148991, 203043, 214642, 176473],
            '5x8': [176471, 148991, 203043, 214642, 176473],
            '48x95': [176471, 148991, 203043, 214642, 176473],
            '9_75x39_5': [176471, 148991, 203043, 214642, 176473],
            '9_4x26_5': [176471, 148991, 203043, 214642, 176473],
            '6_5x39_5': [176471, 148991, 203043, 214642, 176473],
            '3x16': [176471, 148991, 203043, 214642, 176473],
            '4x13': [176471, 148991, 203043, 214642, 176473],
            '7_75x36': [176471, 148991, 203043, 214642, 176473],
            'MOSAIC': [177112],
            'Mosaic': [177112],
            '7x48': [207207],
            '5x48': [207207],
            '13x24': [176471, 148991, 203043, 214642, 176473]
        },

        patternInfo: {
            '148991': 'Stack Bond Horizontal',
            '203043': 'Stack Bond Vertical',
            '176471': 'Running Bond Horizontal',
            '214642': 'Running Bond Vertical',
            '176473': '1/3 Offset',
            '1281127': 'Herringbone', // 1x4
            '1288309': 'Herringbone', // 1x6
            '1281126': 'Herringbone', // 1x2
            '1657772': 'Herringbone', // 1x3 R45
            '1677135': 'Herringbone', // 1x5
            '1288311': 'Herringbone',
            '149719': 'Basketweave',
            '149720': 'Basketweave',
            '177112': 'Not Applicable',
            '207207': 'Not Applicable'
        },

        viewAll: function(productSeries) {
            $(productSeries + " li").show();
        },

        showRecent: function(productSeries) {

            var rec = localStorage.getItem('REC').split(",");

            $(productSeries + " li").hide();

            rec.forEach(function(sel) {
                $(productSeries + ` li[data-sel = '${sel}']`).show();
            });
        },

        addToRecent: function(sel) {
            var currentRec = (localStorage.getItem("REC") !== null) ? localStorage.getItem("REC") : "";

            if (currentRec.indexOf(sel) == -1) {
                var newRec = currentRec + sel + ",";
                localStorage.setItem('REC', newRec);
            }
        },

        showFav: function(productSeries) {
            var fav = localStorage.getItem('FAV').split(",");

            $(productSeries + " li").hide();

            fav.forEach(function(sel) {
                $(productSeries + ` li[data-sel = '${sel}']`).show();
            });
        },

        inFav: function(sel) {
            if (localStorage.getItem('FAV') && localStorage.getItem('FAV').indexOf(sel + "") !== -1) {
                return 'fas';
            } else {
                return 'far';
            }
        },

        getData: function() {
            $.getJSON("https://lizard.chameleonpower.com/CDN/ProductsBySeries/7447.json", function(json) {
                productMenu.productData = json;
            });
        },

        getProductInfo: function(sel) {
            var data = null;

            productMenu.productData.forEach(function(p) {
                if (p['id'] == sel) {
                    data = p;
                }
            });

            return data;
        },

        appliedProductBySortorder: function(sortorder) {
            var appliedProducts = document.getElementById('cham-viz').appliedProducts();

            var products = "-1";

            appliedProducts.forEach(function(el) {
                if (el.sortOrder = sortorder) {
                    if (el.sel !== '-1') {
                        products = el.products;
                    }
                }
            });

            return products;
        },

        // Reset product menu
        //-------------------------------------------------------------------
        reset: function() {

            // $(".tab-content-title .close-menu").click(function () {
            //     $(".tab.active").click();
            //     $(window).resize();
            // });


        },



        // Generate pattern list
        //-------------------------------------------------------------------
        generatePattern: function(target, ratio, sortorder, patternSel, dimensions) {

            $(target).html("");
            ratio = ratio.replace(/\./g, '_');
            this.patternsByRatio[ratio].forEach(function(id) {
                if ([177112, 214642, 176471].indexOf(id) !== -1 &&
                    (parseInt(dimensions.split('x')[0]) > 15 || parseInt(dimensions.split('x')[1]) > 15))
                    return; // Products over 15" cannot be placed in a running bond pattern

                var pattern = `<div class="item ${(id == patternSel) ? 'selected' : '' }" data-sel="${id}" data-sortorder="${sortorder}">
                    <img src="visualizer/img/patterns/${id}.png" alt=""><br>
                    <span>${productMenu.patternInfo[id]}</span>
                  </div>`;

                $(target).append(pattern);
            });

        },

        // Apply Grout to the given sortorder
        //-----------------------------------------------------
        applyGrout: function(newSel, currentSel, grout) {
            var appliedProducts = document.getElementById('cham-viz').appliedProducts();
            var sel = "";

            appliedProducts.forEach(function(row) {
                if (row.sortOrder == productMenu.selectedSortorder) {
                    sel = row.sel;
                }
            });

            var selArray = sel.replace("(", ",").replace(")", ",").split(",");
            if (selArray.length > 4) { // For products with patterns
                selArray[2] = grout;
                sel = `${selArray[0]}(${selArray[1]},${selArray[2]},${selArray[3]},${selArray[4]})`;
            } else { // For products without patterns
                selArray[1] = grout;
                sel = `${selArray[0]}(${selArray[1]},${selArray[2]})`;
            }

            document.getElementById('cham-viz').applyByFilter(sel, "", function(newSel, currentSelectedSurface) {
                if (this.sortorder == parseInt(productMenu.selectedSortorder)) {
                    misc.showLoading();
                    return newSel;
                }
            });
        },

        // Apply pattern to the given sortorder
        //-------------------------------------------------------
        updateSel: function(newSel, currentSel) {
            // console.log(newSel,currentSel);
            var appliedProducts = document.getElementById('cham-viz').appliedProducts();
            var sel = "";

            appliedProducts.forEach(function(row) {
                if (row.sortOrder == productMenu.selectedSortorder) {
                    sel = row.sel;
                }
            });

            sel = sel.replace(currentSel, newSel);

            sel = sel.replace('254252', '-1');
            sel = sel.replace('254253', '-1');
            sel = sel.replace('254254', '-1');
            sel = sel.replace('254255', '-1');

            if (['1281127', '1288309', '1281126', '1657772', '1677135', '1288311'].indexOf(newSel) !== -1)
                sel = sel.replace('-1', '254253'); // If herringbone, rotate product 45 degrees

            document.getElementById('cham-viz').applyByFilter(sel, "", function(newSel, currentSelectedSurface) {
                if (this.sortorder == productMenu.selectedSortorder) {
                    misc.showLoading();
                    return newSel;
                }
            });
        },

        // Apply next rotation to the given sortorder
        //--------------------------------------------------------
        applyRotation: function(sortOrder) {
            var appliedProducts = document.getElementById('cham-viz').appliedProducts();
            var updatedSel = "";
            var sel = "";

            // var nextRotation = {
            //     '254252':'254253',
            //     '254253':'254254',
            //     '254254':'254255',
            //     '254255':'254252',
            // };

            appliedProducts.forEach(function(row) {
                if (row.sortOrder == sortOrder) {
                    sel = row.sel;
                    updatedSel = sel;
                }
            });

            // sel = sel.replace("(",",").replace(")",",").split(",");
            // updatedSel = updatedSel.replace(sel[4],nextRotation[sel[4]]);
            if (sel.indexOf("254252") !== -1) {
                updatedSel = sel.replace("254252", "254253");
            } else if (sel.indexOf("254253") !== -1) {
                updatedSel = sel.replace("254253", "254254");
            } else if (sel.indexOf("254254") !== -1) {
                updatedSel = sel.replace("254254", "254255");
            } else if (sel.indexOf("254255") !== -1) {
                updatedSel = sel.replace("254255", "254252");
            } else if (sel.indexOf("-1)") !== -1) {
                updatedSel = sel.replace("-1)", "254253)");
            }

            document.getElementById('cham-viz').applyByFilter(updatedSel, "", function(newSel, currentSelectedSurface) {

                if (this.sortorder == sortOrder) {
                    misc.showLoading();
                    return newSel;
                }
            });
        },


        generateFilters: function(attribute, cst, filterParent) {
            var filterVal = [];

            $(cst + " li").each(function() {
                var valArray = $(this).attr(attribute).split(',');
                for (val of valArray) {
                    // console.log(attribute, val);
                    val = val.trim();
                    if (filterVal.indexOf(val) == -1 && val !== "") {
                        filterVal.push(val);
                    }
                }
            });

            $(filterParent).html("");

            filterVal.forEach(function(v) {
                var elm = `<label class="filter-option"><input value="${v}" type="checkbox"/>${v}</label>`;
                $(filterParent).append(elm);
            });
        },

        searchProducts: function(input, cst) {
            $(cst + " li").attr("search-flag", '0');

            if (input == "") {
                $(cst + " li").attr("search-flag", '1');
            } else {
                $(cst + " li[data-search*='" + input.toUpperCase() + "']").attr("search-flag", '1');
            }
        },


        // New applied products script
        //----------------------------------------------------------
        renderAppliedTiles: function() {
            var appliedProducts = document.getElementById(visualizer.vizId).appliedProducts();

            $('.product-applied').remove();

            // Generate applied products
            appliedProducts.forEach(function(row) {

                // console.log(row);

                if (row.sel.toString() !== "-1" && (row.type == "FLOOR" || row.type == "BACKSPLASH" || row.type == "FIREPLACE" || row.type == "WALL")) {

                    var currentSelArray = row.sel.replace("(", ",").replace(")", "").split(",");
                    var productInfo = null;

                    if (currentSelArray.length == 5) {
                        var patternSel = parseInt(row.sel.split("(")[0]);
                        var patternName = productMenu.patternInfo[patternSel + ""];
                        var groutSel = row.sel.split(",")[1];
                        var groutName = $(`#tab-grout li[data-sel='${groutSel}'] .title`).text();

                        // Get the product info
                        var productInfo = null;
                        productInfo = row.products[1];
                    } else if (currentSelArray.length == 3) {
                        var patternSel = 177112;
                        var patternName = productMenu.patternInfo[patternSel + ""];
                        var groutSel = currentSelArray[1];
                        var groutName = $(`#tab-grout li[data-sel='${groutSel}'] .title`).text();

                        // Get the product info
                        productInfo = row.products[0];
                    } else if (currentSelArray.length == 2) {
                        var patternSel = 207207;
                        var patternName = productMenu.patternInfo[patternSel + ""];
                        var groutSel = currentSelArray[1];
                        var groutName = $(`#tab-grout li[data-sel='${groutSel}'] .title`).text();

                        // Get the product info
                        productInfo = row.products[0];
                    }




                    var patternOnClick = (patternSel != '177112' && patternSel != '207207') ?
                        `event.stopPropagation(); productMenu.showPattern('${row.sortOrder}','${patternSel}','${productInfo.descriptor}','${productInfo.description}')` :
                        'event.stopPropagation(); ';
                    var groutOnClick = (groutName != '') ?
                        `event.stopPropagation(); productMenu.showGrout('${row.sortOrder}','${groutSel}')` :
                        'event.stopPropagation(); '
                    if (groutName == '') groutName = 'Not Applicable'
                    var rotateOnClick = `event.stopPropagation(); productMenu.applyRotation($(this).attr('data-so'))`;
                    var shape = (productInfo.ecoFriendly) ? `<p>${productInfo.ecoFriendly}</p>` : '';
                    var finish = (productInfo.efficiency) ? ` - ${productInfo.efficiency}` : '';

                    // Generate the applied list
                    var item = `
                    <div class="product-applied active" data-sortorder="${row.sortOrder}">
                        <img src="https://proxy.chameleonpower.com/proxy/getImage.ashx?spec=${productInfo.specifier}&type=prod&extra=(focus=300)&Size=150" alt="product-thumbnail " />
                        <div class="product-details">
                            <a class="close-button" href="javascript:;" onclick="event.stopPropagation(); productMenu.removeSurface('${row.type}')">&#10005;</a>
                            <span>${row.name}</span>
                            <p class="name">${productInfo.name} - ${productInfo.color}</p>
                            <!-- <p class="color">${productInfo.color}</p> -->
                            <p class="shape">${shape}</p>
                            <p class="size">${productInfo.description} ${finish}</p>
                            <p>PATTERN: <a class="pattern" onclick="${patternOnClick}">${patternName}</a></p>
                            <p>GROUT COLOR: <a class="grout" onclick="${groutOnClick}">${groutName}</a></p>
                            <div class="rotate"  data-so="${row.sortOrder}" data-sel="${row.sel}" onclick="${rotateOnClick}">Rotate 45</div>
                        </div>
                    </div>
                    `;

                    var appliedProdList = `.tab[data-sort='${row.sortOrder}']`;

                    $("#product-tabs .tab[data-type=" + row.type + "] div").each(function() { // Append surface information on top of tab
                        if ($(this).closest('.tab').attr('data-surfaces').split(',').indexOf(row.name) !== -1) $(this).append(item);
                    });

                }

            });

        },

        showPattern: function(sortorder, patternSel, ratio, dimensions) {

            productMenu.selectedSortorder = sortorder;

            productMenu.generatePattern(" #tab-pattern .pattern-list", ratio, sortorder, patternSel, dimensions);

            $("#tab-pattern").addClass("show");
            $("#tab-grout").removeClass("show");
        },

        showGrout: function(sortorder, groutSel) {
            productMenu.selectedSortorder = sortorder;

            $(`#tab-grout li`).removeClass('selected');
            $(`#tab-grout li[data-sel='${groutSel}']`).addClass('selected');

            $("#tab-grout").addClass("show");
            $("#tab-pattern").removeClass("show");

            $("#tab-grout cham-series-template li").sort(function(a, b) {
                return String.prototype.localeCompare.call($(a).data('color').toLowerCase(), $(b).data('color').toLowerCase());
            }).appendTo("#tab-grout cham-series-template ul");
        },

        // Generate Surface Selectors
        //-------------------------------------------------------------------
        generateSurfaceSelector: function(surfaceArray, selectorParent, surfaceTypeArr) {
            var options = "<label><input id='all-selector' class='all-selector' type=\"checkbox\" value=\"-1\" checked name=\"All\">ALL<span class=\"control_indicator\"></span></label>";

            surfaceArray.forEach(function(el) {
                if (surfaceTypeArr.indexOf(el.type) !== -1) {
                    options += "<label><input type=\"checkbox\" value=\"" + el.sortorder + "\" checked name=\"" + el.name + "\">" + el.name + "<span class=\"control_indicator\"></span></label>";
                }
            });

            document.getElementById(selectorParent).innerHTML = options;

            if ($("#" + selectorParent).children().length < 3) {
                $("#" + selectorParent + " label").hide();
            }

            $('#' + selectorParent).find('input').on("change", function() {
                var checkbox = this;
                if (checkbox.id == 'all-selector') {
                    if (checkbox.checked == true) $('#' + selectorParent).find('input').prop("checked", true);
                    else $('#' + selectorParent).find('input').prop("checked", false);
                } else {
                    if (!$('#' + selectorParent).find('input:not(#all-selector):not(:checked)').length) //If all surface checkboxes checked
                        $('#' + selectorParent).find('#all-selector').prop("checked", true);
                    else $('#' + selectorParent).find('#all-selector').prop("checked", false);
                }
                if (!$('#' + selectorParent).find('input:not(#all-selector):checked').length) //If all surface checkboxes unchecked       
                    setTimeout(() => {
                        $('#' + selectorParent).find('input').prop("checked", true);
                    }, 200);
            });
        },


        // Filter Products
        //-------------------------------------------------------------------
        filterProducts: function() {

            var styleText = "";

            this.TYPE.forEach(function(el) {

                var selector = "cham-series-template li";

                selector = selector + "[data-type='" + el + "']";

                if (productMenu.COLOR !== "") {
                    selector = selector + "[data-color='" + productMenu.COLOR + "']";
                }

                if (productMenu.BRAND !== "") {
                    selector = selector + "[data-brand='" + productMenu.BRAND + "']";
                }

                styleText += selector + "{display:inline;}";
            });

            document.getElementById("js-styles").innerText = styleText;
        },


        // Apply surface to by selection
        //-------------------------------------------------------------------
        applyBySelection: function(event, selectorID, pattern, grout, surfaces) {

            misc.showLoading(true);
            var sel = event.value.id;
            productMenu.addToRecent(sel);

            var groutWidth = '147607';
            if (event.value.name == 'Ledger Stone') {
                grout = '-1';
                groutWidth = '177116'
            }; // Remove grout from products that do not have any

            if (sel.toString() != '-1') {
                // If pattern and grout options are available update sel string to pattern(product,grout,groutWidth,rotation) Format
                if (pattern == '-1') pattern = '177112';
                if (pattern == '177112') {
                    sel = sel + "(" + grout + ",-1)";
                } else if (pattern == '207207') sel = sel + "(-1)";
                else if (pattern && grout) sel = pattern + "(" + sel + "," + grout + "," + groutWidth + ",254252)";
            }

            var applied = false;

            var selectedVisualizer = (compare.status && document.getElementById('right-side').classList.contains('selected')) ?
                document.getElementById('cham-viz-sub') : document.getElementById('cham-viz');

            // Loop through the surfaces of cham-viz and apply accordingly
            selectedVisualizer.applyByFilter(sel, event.value.name, function(newSel, currentSelectedSurface) {

                // Match surfacetype
                var currentSurface = this.type.toLowerCase();
                var out = null;

                if (surfaces.indexOf(currentSurface) !== -1) {

                    // Check if there is a checkbox selected for that surface
                    var selector = document.querySelector("#" + selectorID + " input[value='" + this.sortorder + "']");
                    var all = document.querySelector("#" + selectorID + " input[value='-1']") || {
                        checked: true
                    }
                    var sel = this.sel;

                    if (this.sel !== newSel) {
                        // Apply accordingly to that surface
                        if (all.checked) {
                            out = newSel;
                            applied = true;
                        } else if (selector) {
                            if (selector.checked) {
                                out = newSel;
                                applied = true;
                            } else applied = true;
                        } else {
                            out = newSel;
                            applied = true;
                        }
                    }
                    return out;
                }
            });

            if (!applied) misc.hideLoading();
        },

        showTileSizePopup(event, selectorID, pattern, grout, surfaces) { //Tests if a Tile Size popup is available and displays it, otherwise returns false
            var identifier = event.value.name +
                '.' + event.value.color.toUpperCase() +
                '.' + event.value.ecoFriendly;
            if (event.value.descriptor == 'Mosaic') identifier += '.mosaic';
            var ratioGroup = productMenu.ratioGroups[identifier];

            //todo: Use ratio returned by event to change pattern variable

            if (ratioGroup.length > 0) { // Set to 1 to return false if there is only one button in the Tile Size popup
                var tileSizeSelect = event.target.closest('.tab-content').querySelector('.tile-size-select');
                tileSizeSelect.style.display = 'block';
                tileSizeSelect.querySelector('ul').innerHTML = '';
                ratioGroup.forEach(ratioObject => {
                    var newEvent = {
                        value: {
                            id: ratioObject.sel,
                            name: ratioObject.name
                        }
                    };
                    var dimensions = (ratioObject.dimensions != '') ? ratioObject.dimensions : 'Mosaic';
                    var finish = ratioObject.finish;
                    var li = $(`
                        <li 
                            data-ratio="${ratioObject.ratio.replace(/\./g,'_')}" 
                            data-dimensions="${dimensions}"
                        >${dimensions} ${finish}</li>
                    `).on('click', function() {
                        var ratio = $(this).attr('data-ratio');
                        var patternAttr = (typeof productMenu.patternsByRatio[ratio] !== 'undefined') ?
                            productMenu.patternsByRatio[ratio][0] : '-1';
                        if ([177112, 214642, 176471].indexOf(patternAttr) !== -1 &&
                            (parseInt($(this).attr('data-dimensions').split('x')[0]) > 15 || parseInt($(this).attr('data-dimensions').split('x')[1]) > 15))
                            patternAttr = 176473; // Products over 15" cannot be placed in a running bond pattern
                        productMenu.applyBySelection(newEvent, selectorID, patternAttr, grout, surfaces);
                        tileSizeSelect.style.display = 'none';
                    }).appendTo(tileSizeSelect.querySelector('ul'));
                });
                return true;
            } else return false;
        },

        groupRatios(tabID) {
            // Creates an array of ratios for each product
            this.ratioGroups = [];
            document.querySelectorAll(tabID + ' cham-series-template li').forEach(li => {
                if (li.getAttribute('data-surfaces') == '1' && !(tabID == '#tab-wall' || tabID == '#tab-backsplash' || tabID == '#tab-fireplace')) return;

                var identifier = li.getAttribute('data-name') + '.' +
                    li.getAttribute('data-color') + '.' +
                    li.getAttribute('data-shape');
                if (li.getAttribute('data-ratio') == 'Mosaic') identifier += '.mosaic';

                var ratioObject = {
                    sel: li.getAttribute('data-sel'),
                    name: li.getAttribute('data-name'),
                    ratio: li.getAttribute('data-ratio'),
                    dimensions: li.getAttribute('data-dimensions'),
                    finish: li.getAttribute('data-finish'),
                    surfaces: li.getAttribute('data-surfaces'),
                };

                if (typeof this.ratioGroups[identifier] === 'undefined') {
                    this.ratioGroups[identifier] = [];
                    this.ratioGroups[identifier].push(ratioObject);
                } else {
                    if (this.ratioGroups[identifier].map(val => val.sel).indexOf(ratioObject.sel) == -1) //Check if duplicate
                        this.ratioGroups[identifier].push(ratioObject);
                    $(li).addClass('hidden group-hidden');
                }
            });
        },

        alphabetizeSurfaces(tabID) {
            $(tabID + " cham-series-template li").sort(function(a, b) {
                var aName = (typeof $(a).data('name') !== 'undefined') ? $(a).data('name').toLowerCase() + $(a).data('color').toLowerCase() : $(a).data('color').toLowerCase();
                var bName = (typeof $(b).data('name') !== 'undefined') ? $(b).data('name').toLowerCase() + $(b).data('color').toLowerCase() : $(b).data('color').toLowerCase();
                return String.prototype.localeCompare.call(aName, bName);
            }).appendTo(tabID + " cham-series-template ul");
        },

        filterSurfaces(tabID) {
            if (document.querySelector(tabID + ' cham-series-template li') == null) return;
            if (document.querySelector(tabID + ' cham-series-template li').hasAttribute('data-surfaces') == false) return;

            var surfaceType = document.querySelector(tabID + ' cham-series-template').getAttribute('surfacetype');
            document.querySelectorAll(tabID + ' cham-series-template li').forEach(li => {
                var wearCode = li.getAttribute('data-surfaces');
                if (wearCode == '1' && !(tabID == '#tab-wall' || tabID == '#tab-backsplash' || tabID == '#tab-fireplace')) $(li).addClass('hidden wearcode-hidden');
            });
        },

        removeSurface(surfaceType) {
            var newEvent = {
                value: {
                    id: -1,
                    name: -1
                }
            };
            surfaceType = surfaceType.toLowerCase();
            var selectorID = surfaceType + '-selector';
            var pattern = 177112;
            var grout = 2499167;
            productMenu.applyBySelection(newEvent, selectorID, pattern, grout, [surfaceType]);
            $('cham-series-template[surfacetype="' + surfaceType.toUpperCase() + '"] li').removeClass('selected');
        },

        loadDesignerCollections() {
            $('#tab-color-harmonizer .presets').empty();
            $('.tabs .tab-content').removeClass('show');
            for (var preset of productMenu.designerCollections) {
                var $presetHtml = $(`
                    <div class="preset" data-sel="${preset.join(';')}">
                        <div class="products"></div>
                        <div class="button">Apply Collection</div>
                    </div>
                `);

                // Draw HTML for each collection
                for (var productSel of preset) {
                    if (productSel == '-1') continue;
                    if (productSel.match(/,/g) != null && productSel.match(/,/g).length > 1) productSel = productSel.match(/\(.*?,/)[0].replace(/\(|,/g, '');
                    var productHtml = `
                        <div class="product" style="background-image:url('https://proxy.chameleonpower.com/proxy/getImage.ashx?spec=!${productSel}&type=prod&extra=(focus=500)&Size=250');"></div>
                    `;
                    $presetHtml.find('.products').append(productHtml);
                }

                // Create Apply link
                $presetHtml.find('.button').on('click', function() {
                    var appliedProducts = document.getElementById(visualizer.vizId).appliedProducts();
                    var presetData = $(this).closest('.preset').attr('data-sel').split(';');
                    var newSel = [];
                    for (var i in appliedProducts) {
                        switch (appliedProducts[i].name) {
                            case 'Floor':
                                newSel[i] = presetData[0];
                                break;
                            case 'Backsplash':
                            case 'Wall':
                            case 'Walls':
                                newSel[i] = presetData[1];
                                break;
                            case 'Shower Accent':
                            case 'Shower Wall':
                            case 'Shower Walls':
                                newSel[i] = presetData[2];
                                break;
                            case 'Countertops':
                            case 'Countertop':
                            case 'Island Countertop':
                            case 'Shower Curb':
                            case 'Shelf':
                                newSel[i] = presetData[3];
                                break;
                            case 'Cabinets':
                            case 'Island Cabinets':
                                newSel[i] = presetData[4];
                                break;
                            case 'Painted Walls':
                                newSel[i] = presetData[5];
                                break;
                            case 'Shower Surround':
                            case 'Fireplace':
                                if (typeof presetData[6] !== 'undefined') newSel[i] = presetData[6];
                                else newSel[i] = presetData[1];
                                break;
                            case 'Shower Niche':
                            case 'Shower Bench':
                            case 'Accent Wall':
                            case 'Accent':
                                if (typeof presetData[6] !== 'undefined') newSel[i] = presetData[6];
                                else newSel[i] = presetData[2];
                                break;
                            case 'Shower Floor':
                                if (typeof presetData[7] !== 'undefined') newSel[i] = presetData[7];
                                else newSel[i] = presetData[2];
                                break;
                            default:
                                newSel[i] = '-1';
                                break;
                        }
                    }

                    misc.showLoading();
                    var sel = newSel.join(',');
                    var spec = document.getElementById(visualizer.vizId).getSaveData().specifier;
                    var url = '/#visualizer/spec/' + spec + '/sel/' + sel;
                    document.getElementById(visualizer.vizId).load(spec, sel);
                    productMenu.designerCollectionLoading = true;
                    // console.log(url);
                });
                $('#tab-color-harmonizer .presets').append($presetHtml);
            }

        },

        // Initialize Events
        //-------------------------------------------------------------------
        initEvents: function() {

            productMenu.getData();

            // Handles tab click
            //-------------------------------------------------------------------
            $(".tabs ").on('click', '.tab', function(e) {

                $('.tile-size-select').hide();

                if ($(this).hasClass('active')) { // Close product drawer
                    if (
                        $(this).attr('data-target') == '#tab-tile-options' && $('#tab-grout, #tab-pattern').hasClass('show') ||
                        $('.rotate').hasClass('rotating')
                    )
                        $('#tab-grout, #tab-pattern').removeClass('show');
                    else {
                        $(".tab-content.show").removeClass('show');
                        $(this).removeClass('active');
                        var id = $(this).attr('data-target');
                        $(id).removeClass('show');
                    }
                } else { // Open product drawer
                    var selector = $(this).attr('data-target');
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                    $(".tab-content.show").removeClass('show');
                    $(selector).addClass('show');
                    productMenu.alphabetizeSurfaces(selector);
                    productMenu.filterSurfaces(selector);
                    productMenu.groupRatios(selector);

                    if (typeof $(this).attr('data-surfaces') !== 'undefined') {
                        $(selector).find('.sub-surface-selector input').prop('checked', false);
                        for (var surface of $(this).attr('data-surfaces').split(',')) {
                            $(selector).find('.sub-surface-selector input[name="' + surface + '"]').prop('checked', true);
                        }
                    }

                    $(selector).find('.tab-content-title h3').html($(this).find('.surface-thumb span').html().trim());
                }
            });

            // Main visualizer is loaded and ready
            //-------------------------------------------------------------------
            document.getElementById(visualizer.vizId).addEventListener('ready', function(result) {

                productMenu.generateFilters('data-filter-type', '#series-floor', '#floor-filter-type .filter-cat');
                productMenu.generateFilters('data-filter-color', '#series-floor', '#floor-filter-color .filter-cat');
                productMenu.generateFilters('data-filter-type', '#series-wall', '#wall-filter-type .filter-cat');
                productMenu.generateFilters('data-filter-color', '#series-wall', '#wall-filter-color .filter-cat');
                productMenu.generateFilters('data-filter-type', '#series-backsplash', '#backsplash-filter-type .filter-cat');
                productMenu.generateFilters('data-filter-color', '#series-backsplash', '#backsplash-filter-color .filter-cat');
                productMenu.generateFilters('data-filter-type', '#series-fireplace', '#fireplace-filter-type .filter-cat');
                productMenu.generateFilters('data-filter-color', '#series-fireplace', '#fireplace-filter-color .filter-cat');
                productMenu.generateFilters('data-family', '#series-paint', '#paint-family .filter-cat');
                productMenu.generateFilters('data-family', '#series-trim', '#trim-family .filter-cat');

                productMenu.generateSurfaceSelector(result.value, "floor-selector", ["FLOOR"]);
                productMenu.generateSurfaceSelector(result.value, "wall-selector", ["WALL"]);
                productMenu.generateSurfaceSelector(result.value, "backsplash-selector", ["BACKSPLASH"]);
                productMenu.generateSurfaceSelector(result.value, "fireplace-selector", ["FIREPLACE"]);
                productMenu.generateSurfaceSelector(result.value, "paint-selector", ["PAINTED WALL"]);
                productMenu.generateSurfaceSelector(result.value, "counter-selector", ["COUNTER"]);
                productMenu.generateSurfaceSelector(result.value, "cabinet-selector", ["CABINETS"]);

                productMenu.renderAppliedTiles();

                productMenu.loadDesignerCollections();

                // Hide/Show surface menu tabs
                $("#product-tabs .tab").hide();
                $(".tab[data-target='#tab-tile-options']").show();

                result.value.forEach(function(surface) {
                    if (surface.type == "FLOOR") {
                        switch (surface.name) {
                            case 'Shower Floor':
                                $(".tab-btn-shower-floor").show();
                                break;
                            case 'Floor':
                                $(".tab-btn-floor").show();
                                break;
                        }
                        $(".tab-btn-floor").show();
                    } else if (surface.type == "PAINTED WALL") {
                        $(".tab-btn-paint").show();
                    } else if (surface.type == "TRIM") {
                        $(".tab-btn-trim").show();
                    } else if (surface.type == "WALL") {
                        switch (surface.name) {
                            case 'Shower Wall':
                            case 'Shower Walls':
                                $(".tab-btn-shower-wall").show();
                                break;
                            case 'Shower Surround':
                                $(".tab-btn-shower-surround").show();
                                break;
                            case 'Shower Accent':
                                $(".tab-btn-shower-accent").show();
                                break;
                            case 'Shower Niche':
                                $(".tab-btn-shower-niche").show();
                                break;
                            case 'Shower Bench':
                                $(".tab-btn-shower-bench").show();
                                break;
                            case 'Accent Wall':
                                $(".tab-btn-accent-wall").show();
                                break;
                            case 'Wall':
                            case 'Walls':
                                $(".tab-btn-wall").show();
                                break;
                        }
                    } else if (surface.type == "BACKSPLASH") {
                        switch (surface.name) {
                            case 'Accent':
                                $(".tab-btn-accent").show();
                                break;
                            case 'Backsplash':
                                $(".tab-btn-backsplash").show();
                                break;
                        }
                    } else if (surface.type == "FIREPLACE") {
                        $(".tab-btn-fireplace").show();
                    } else if (surface.type == "COUNTER") {
                        switch (surface.name) {
                            case 'Shower Curb':
                                $(".tab-btn-shower-curb").show();
                                break;
                            default:
                                $(".tab-btn-counter").show();
                                break;
                        }
                    } else if (surface.type == "CABINETS") {
                        $(".tab-btn-cabinet").show();
                    }
                });

                // Close any opened menus
                $(".close:visible").click();
                $(".tab.active").removeClass('active');

                // Cham Viz adjustment to fix the mouseovers in roomscene
                var fullWidth = $("#cham-viz img").width();

                $("#cham-viz img").css("width", "auto");

                var originalWidth = $("#cham-viz img").width();

                if (fullWidth < originalWidth) {
                    $("#cham-viz img").css("width", "100%");
                }

                var style = `padding: 0px;
                            overflow: hidden;
                            width: ${$("#cham-viz img").width()}px;
                            margin: 0 auto;
                            display: block;`;

                $("#cham-viz").attr('style', style);

                $("li.selected").removeClass('selected');
            });


            document.getElementById(visualizer.vizId).addEventListener('surface_select', function(result) {
                var tabSelector = '';
                switch (result.value.name) {
                    case 'Floor':
                        tabSelector = '.tab-btn-floor';
                        break;
                    case 'Backsplash':
                        tabSelector = '.tab-btn-backsplash';
                        break;
                    case 'Fireplace':
                        tabSelector = '.tab-btn-fireplace';
                        break;
                    case 'Shower Surround':
                        tabSelector = '.tab-btn-shower-surround';
                        break;
                    case 'Wall':
                    case 'Walls':
                        tabSelector = '.tab-btn-wall';
                        break;
                    case 'Shower Accent':
                        tabSelector = '.tab-btn-shower-accent';
                        break;
                    case 'Shower Niche':
                        tabSelector = '.tab-btn-shower-niche';
                        break;
                    case 'Shower Bench':
                        tabSelector = '.tab-btn-shower-bench';
                        break;
                    case 'Shower Floor':
                        tabSelector = '.tab-btn-shower-floor';
                        break;
                    case 'Shower Wall':
                    case 'Shower Walls':
                        tabSelector = '.tab-btn-shower-wall';
                        break;
                    case 'Accent Wall':
                        tabSelector = '.tab-btn-accent-wall';
                        break;
                    case 'Countertops':
                    case 'Countertop':
                    case 'Island Countertop':
                    case 'Shelf':
                        tabSelector = '.tab-btn-counter';
                        break;
                    case 'Shower Curb':
                        tabSelector = '.tab-btn-shower-curb';
                        break;
                    case 'Cabinets':
                    case 'Island Cabinets':
                        tabSelector = '.tab-btn-cabinet';
                        break;
                    case 'Painted Wall':
                    case 'Painted Walls':
                        tabSelector = '.tab-btn-paint';
                        break;
                }
                if (!$(tabSelector).hasClass('active')) $(tabSelector).click();

                setTimeout(() => {
                    var $checkbox = $("input[value='" + result.value.sortorder + "']");
                    $checkbox.closest('.sub-surface-selector').find('input').prop('checked', false);
                    // $checkbox.parent().click();
                    $checkbox.prop('checked', true);
                }, 50);
            });


            // Surface applied completed
            //-------------------------------------------------------------------
            document.getElementById(visualizer.vizId).addEventListener('surface_apply_done', function(e) {
                $('.tab.active').click();
                productMenu.renderAppliedTiles();
            });

            // Product application events
            //-------------------------------------------------------------------
            document.getElementById("series-floor").addEventListener("select", function(event) {
                var defaultGrout = '2499167';
                var defaultPattern = 177112;
                if (productMenu.showTileSizePopup(event, 'floor-selector', defaultPattern, defaultGrout, ["floor"]) === false)
                    productMenu.applyBySelection(event, 'floor-selector', defaultPattern, defaultGrout, ["floor"]);
            });

            document.getElementById("series-wall").addEventListener("select", function(event) {
                var defaultGrout = '2499167';
                var defaultPattern = 177112;
                if (productMenu.showTileSizePopup(event, 'wall-selector', defaultPattern, defaultGrout, ["wall"]) === false)
                    productMenu.applyBySelection(event, 'wall-selector', defaultPattern, defaultGrout, ["wall"]);
            });

            document.getElementById("series-backsplash").addEventListener("select", function(event) {
                var defaultGrout = '2499167';
                var defaultPattern = 177112;
                if (productMenu.showTileSizePopup(event, 'backsplash-selector', defaultPattern, defaultGrout, ["backsplash"]) === false)
                    productMenu.applyBySelection(event, 'backsplash-selector', defaultPattern, defaultGrout, ["backsplash"]);
            });

            document.getElementById("series-fireplace").addEventListener("select", function(event) {
                var defaultGrout = '2499167';
                var defaultPattern = 177112;
                if (productMenu.showTileSizePopup(event, 'fireplace-selector', defaultPattern, defaultGrout, ["fireplace"]) === false)
                    productMenu.applyBySelection(event, 'fireplace-selector', defaultPattern, defaultGrout, ["fireplace"]);
            });

            document.getElementById("series-paint").addEventListener("select", function(event) {
                productMenu.applyBySelection(event, 'wall-selector', false, false, ["painted wall", "painted walls"]);
            });

            document.getElementById("series-trim").addEventListener("select", function(event) {
                productMenu.applyBySelection(event, 'trim-selector', false, false, ["trim"]);
            });

            document.getElementById("series-counter").addEventListener("select", function(event) {
                productMenu.applyBySelection(event, 'counter-selector', false, false, ["counter"]);
            });

            document.getElementById("series-cabinets").addEventListener("select", function(event) {
                productMenu.applyBySelection(event, 'cabinet-selector', false, false, ["cabinets"]);
            });

            // Handle pattern clicks
            //------------------------------------------------------------------
            $(document).on('click', ".pattern-list .item", function() {
                if (!$(this).hasClass('.selected')) {

                    // var currentPattern = $(this).closest('.item');
                    var currentPattern = $(this).closest('.pattern-list').find(".selected");

                    var currentPatternSel = currentPattern.attr('data-sel');

                    // console.log(currentPatternSel);

                    currentPattern.removeClass('selected');
                    $(this).addClass('selected');

                    productMenu.updateSel($(this).attr('data-sel'), currentPatternSel);
                }
            });

            // Handle grout clicks
            //------------------------------------------------------------------
            $(document).on("mousedown", ".grout li", function(event) {

                if (!$(this).hasClass('selected')) {

                    var currentPattern = $(this).parent().find(".selected");
                    var currentPatternSel = currentPattern.attr('data-sel');

                    productMenu.applyGrout($(this).attr('data-sel'), currentPatternSel, $(this).attr('data-sel'));

                    $(this).parent().find('li').removeClass('selected');
                    $(this).addClass('selected');
                }
            });

            // Handle Rotation
            //-----------------------------------------------------------------
            // $(document).on("click",".rotate",function (event) {
            //     event.stopPropagation();
            //     $(this).addClass('rotating');
            //     productMenu.applyRotation($(this).attr('data-so'));
            // });


            // Handle subsurface selector checks
            //------------------------------------------------------------------
            // $(".sub-surface-selector input").on("change", function () {
            //     var checkbox = this;
            //     if(checkbox.id == 'all-selector'){
            //         if(checkbox.checked == true){
            //             document.querySelectorAll('#sub-surface-selector input').forEach(surfaceCheckbox => {
            //                 surfaceCheckbox.checked = false;
            //             });
            //             document.querySelector('#all-selector').checked = true;
            //         }
            //     }
            //     else  document.querySelector('#all-selector').checked = false;

            // });

            // Handle Filter dropdown 
            //-------------------------------------------------------------------
            $(".product-filters .select-title").click(function() {

                if ($(this).parent().hasClass('active')) {
                    $(this).parent().removeClass('active');
                } else {
                    $(this).parent().siblings('.active').removeClass('active');
                    $(this).parent().addClass('active');
                }
            });

            $(".select .close").click(function() {
                $(this).parent().parent().removeClass('active');
            });


            // Search Floor products
            //-------------------------------------------------------------------
            $("#search-floor").keyup(function() {
                productMenu.searchProducts($(this).val(), '#series-floor');
            });

            $("#search-wall").keyup(function() {
                productMenu.searchProducts($(this).val(), '#series-wall');
            });

            $("#search-backsplash").keyup(function() {
                productMenu.searchProducts($(this).val(), '#series-backsplash');
            });

            $("#search-fireplace").keyup(function() {
                productMenu.searchProducts($(this).val(), '#series-fireplace');
            });


            // Handle filter option check/uncheck
            //-------------------------------------------------------------------
            $(document).on('change', '.filter-option input', function() {

                var target = $(this).parent().parent().attr('data-target');
                var attribute = $(this).parent().parent().attr('data-type');
                var flag = $(this).parent().parent().attr('data-flag');

                if ($(this).parent().parent().find('input:checked').length > 0) {

                    $(target + " li").attr("" + flag, '0');

                    $(this).parent().parent().find('input:checked').each(function() {
                        var val = $(this).val();
                        // console.log(val);
                        // $(target + ` li[${attribute}='${val}']`).attr(flag, '1');
                        $(target + ' li').each(function() {
                            if ($(this).attr(attribute).split(',').indexOf(val) !== -1) $(this).attr(flag, '1');
                        });
                    });

                } else {
                    $(target + " li").attr("" + flag, '1');
                }
            });

            $(".options a").click(function() {
                $(this).prev().find('input:checked').click();
            });


            // Handle Favorites
            //-----------------------------------------------------------------
            $('body').on('click', 'li .fav-icon i', function() {
                if ($(this).hasClass('far')) {
                    $(this).removeClass('far');
                    $(this).addClass('fas');

                    var currentFav = (localStorage.getItem("FAV") !== null) ? localStorage.getItem("FAV") : "";
                    var newFAV = currentFav + $(this).closest('li').attr('data-sel') + ",";
                    localStorage.setItem('FAV', newFAV);
                } else {
                    $(this).removeClass('fas');
                    $(this).addClass('far');

                    var currentFav = (localStorage.getItem("FAV") !== null) ? localStorage.getItem("FAV") : "";
                    var currentFav = currentFav.replace($(this).closest('li').attr('data-sel') + ",", "");
                    localStorage.setItem('FAV', currentFav);
                }
            });

            // Filters Recent/Fav
            //----------------------------------------------------------------
            $(".filter-selected").click(function() {
                $(this).parent().next().toggleClass('show');
            });

            $(".close-x").click(function() {
                $(this).closest('ul').removeClass('show');
            });

            $(".viewall li").click(function() {
                $(this).siblings().removeClass('selected');
                $(this).addClass('selected');
                $(this).parent().prev().find('.filter-selected').text($(this).text());
            });

            // Handle the tile size selector's Close button
            //----------------------------------------------------------------
            document.querySelectorAll('.tile-size-select .close-menu').forEach(el => {
                el.addEventListener('click', function() {
                    this.closest('.tile-size-select').style.display = 'none';
                });
            });

            document.querySelectorAll('.tab-content-title .close-menu').forEach(el => {
                el.addEventListener('click', function() {
                    this.closest('.tab-content').classList.remove('show');
                    $('#product-tabs .tab').removeClass('active');
                });
            });

            document.getElementById('color-harmonizer-button').addEventListener('click', function() {
                $('.tab-content').removeClass('show');
                $('#tab-color-harmonizer').addClass('show');
            });
        }
    }
}

// var ratios = [];
// // $("#series-floor li").each(function () {
// //     if(ratios.indexOf($(this).attr('data-ratio')) == -1){
// //         ratios.push($(this).attr('data-ratio'));
// //     }
// // });
// //
// // var test = ""
// //
// // ratios.forEach(function (el) {
// //     test += `'${el}': [148991,201858,176471,214642],`
// // });

$(window).resize(function() {
    // Cham Viz adjustment to fix the mouseovers in roomscene
    var fullWidth = $("#cham-viz img").width();

    $("#cham-viz img").css("width", "auto");

    var originalWidth = $("#cham-viz img").width();

    if (fullWidth < originalWidth) {
        $("#cham-viz img").css("width", "100%");
    }

    var style = `padding: 0px;
                            overflow: hidden;
                            width: ${$("#cham-viz img").width()}px;
                            margin: 0 auto;
                            display: block;`;

    $("#cham-viz").attr('style', style);

    $("li.selected").removeClass('selected');
});