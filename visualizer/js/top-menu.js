//---------------------------------------------------------------------
// Initialize Top Menu
//---------------------------------------------------------------------
function initTopMenu(router, projects, upload, misc) {
    dev.log("Initialize top menu");

    return topMenu = {
        // Show/Hide Top menu
        //---------------------------------------------------------------------
        show: function() {
            document.getElementById("top-menu").style.display = "flex";
            this.shrink();
            dev.log("Show top menu");
        },
        hide: function() {
            document.getElementById("top-menu").style.display = "none";
            dev.log("Hide top menu");
        },

        // Extend/Shrink Top menu
        //---------------------------------------------------------------------
        extend: function() {
            $("#top-menu .extended").attr("style", "");
            dev.log("Extend top menu");
        },
        shrink: function() {
            $("#top-menu .extended").attr("style", "display: none !important");
            dev.log("Shrink top menu");
        },

        getProductSel: function() {
            var applied = document.getElementById("cham-viz").appliedProducts();

            var selArray = [];

            applied.forEach(function(row) {

                if (row.sel !== "-1") {
                    var sel = row.sel.toString().replace(/\(/g, ',').replace(/\)/g, '').split(",");

                    if (sel.length == 5) {
                        // selArray.push(sel[1]);
                        // if(selArray.indexOf(sel[2]) == -1) selArray.push(sel[2]);
                        selArray.push("-1(" + sel[1] + "," + sel[2] + ")");
                    } else if (sel.length == 3) {
                        // selArray.push(sel[0]);
                        // if(selArray.indexOf(sel[1]) == -1) selArray.push(sel[1]);
                        selArray.push("-1(" + sel[0] + "," + sel[1] + ")");
                    } else selArray.push(row.sel.toString());
                } else {
                    selArray.push("-1");
                }
            });

            return selArray.join(",");
        },

        // Initialize Events
        //---------------------------------------------------------------------
        initEvents: function() {

            // Back to roomscenes
            //---------------------------------------------------------------------
            document.getElementById("menu-new-scene").addEventListener("click", function() {
                router.navigate('roomscenes');
                topMenu.shrink();
                topMenu.show();
            });

            // Save Project
            //---------------------------------------------------------------------
            document.getElementById("menu-save").addEventListener("click", function() {
                projects.save();

                /* Integration   
                    Send data to parent frame
                    Parent code:
                    <script>
                      function receiveMessage(event) {
                        console.log('POSTMESSAGE RECIEVED', event, event.origin, event.data);
                      }
                      window.addEventListener("message", receiveMessage, false);
                    </script>

                    var sampleRecieve =  {
                    fblink: "Tile_Town.Images.Patios.Patio_1seln-1,-1"
                    ,render: "https://proxy.chameleonpower.com/proxy/getImage.ashx?type=base&spec=Tile_Town%5CImages%5CPatios%5CPatio_1&sel=-1%2C-1"
                    ,sel: "-1,-1"
                    ,spec: "Tile_Town\Images\Patios\Patio_1"
                    ,specifier: "Tile_Town\Images\Patios\Patio_1"
                    ,url: "https://tiletownstaging.chameleonpower.com/?specifier=Tile_Town%5CImages%5CPatios%5CPatio_1&Sel=-1%2C-1"
                    }

                */

                // var data = e.value; //project id
                var saveData = document.getElementById(visualizer.vizId).getSaveData();
                //http://tiletownstaging.chameleonpower.com/?sku=B018VOLNER1224NDL#visualizer/spec/Tile_Town%5CImages%5CBathrooms%5CBathroom_9/sel/2282154

                var url = [location.protocol, '//', location.host, location.pathname].join('');
                saveData.url = url + "#visualizer/spec/" + encodeURIComponent(saveData.spec) + "/sel/" + encodeURIComponent(saveData.sel);
                let p = window.parent;
                let payload = JSON.stringify(saveData);
                p.postMessage(payload, '*');
            });

            // Show social window
            //---------------------------------------------------------------------
            document.getElementById("menu-share").addEventListener("click", function() {
                misc.showLightBox("social-lightbox");
            });

            // Show Projects
            //---------------------------------------------------------------------
            document.getElementById("menu-projects").addEventListener("click", function() {
                $('.tab.active').click();
                projects.show();
            });

            // Show upload window
            //---------------------------------------------------------------------
            document.getElementById("menu-upload").addEventListener("click", function() {
                upload.show();
            });

            // Generate and direct to print page
            //---------------------------------------------------------------------
            document.getElementById("menu-print").addEventListener("click", function() {
                var printWindow = window.open();
                var saveData = document.getElementById("cham-viz").getSaveData();
                var sel = topMenu.getProductSel();

                printWindow.location.href = "print.aspx?specifier=" + saveData.spec + "&sel=" + sel + "&ImageSel=" + saveData.sel;

                dev.log("Generated print link: " + "print.aspx?specifier=" + saveData.spec + "&sel=" + saveData.sel);
            });


            // Show help window
            //---------------------------------------------------------------------
            document.getElementById("menu-help").addEventListener("click", function() {
                misc.showLightBox("help-lightbox");
            });

            // Show feedback window
            //---------------------------------------------------------------------
            document.getElementById("menu-feedback").addEventListener("click", function() {
                misc.showLightBox("feedback-lightbox");
            });

            // Mobile menu trigger
            //---------------------------------------------------------------------
            document.addEventListener("click", function(e) {
                if (e.target.id == "mobile-menu-trigger" || e.target.parentElement.id == "mobile-menu-trigger") {
                    if (document.getElementById("top-menu").classList.contains('mobile')) {
                        document.getElementById("top-menu").classList.remove('mobile');
                    } else {
                        document.getElementById("top-menu").classList.add('mobile');
                    }
                } else {
                    if (document.getElementById("top-menu").classList.contains('mobile')) {
                        document.getElementById("top-menu").classList.remove('mobile');
                    }
                }
            });
        }
    };
}