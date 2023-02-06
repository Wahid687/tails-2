//-------------------------------------------------------------------
// Initialize Projects
//-------------------------------------------------------------------
function initProjects(router, visualizer, compare) {
    return {
        // Show/Hide Projects
        //-------------------------------------------------------------------
        show: function() {
            document.querySelector('cham-projects').setAttribute("active", "1");
            document.querySelector('cham-projects').showProjects();
            dev.log("Show Projects");
        },
        hide: function() {
            document.querySelector('cham-projects').setAttribute("active", "0");
            dev.log("Hide Projects");
        },

        // Save Projects
        //-------------------------------------------------------------------
        save: function() {
            var saveData = document.getElementById(visualizer.vizId).getSaveData();
            document.querySelector('cham-projects').saveProject(saveData.spec, saveData.sel);
            dev.data("Save Project", [saveData.spec, saveData.sel]);
        },

        // Initialize Project Events
        //-------------------------------------------------------------------
        initEvents: function() {

            // Loads project on clicking a saved thumbnail
            //-------------------------------------------------------------------
            document.querySelector('cham-projects').addEventListener('gotoviz', function(e) {
                compare.off();

                router.navigate('visualizer/spec/' + encodeURI(e.value.specifier) + '/sel/' + encodeURI(e.value.sel));
                document.querySelector('cham-projects').setAttribute("active", "0");

                dev.data("Load saved project", e.value);
            });

            document.getElementById(visualizer.vizId).addEventListener('ready', function(result) { // Make first and last name registration required
                document.querySelector('cham-projects .createyourownaccount input[name="firstName"]').setAttribute('required', 'true');
                document.querySelector('cham-projects .createyourownaccount input[name="lastName"]').setAttribute('required', 'true');
            });



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
            document.querySelector('cham-projects').addEventListener('savesuccess', function(e) {
                var data = e.value; //project id
                var saveData = document.getElementById(visualizer.vizId).getSaveData();
                let p = window.parent;
                let payload = JSON.stringify(saveData);
                p.postMessage(payload, '*');
            });

            document.querySelector('cham-projects').addEventListener('registersuccess', function(e) {
                this.showProjects(); //manually show projects dialog
            });
        }
    }
}