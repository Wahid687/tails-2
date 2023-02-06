//-------------------------------------------------------------------
// Initialize Action History
//-------------------------------------------------------------------
function initActionHistory(visualizer, misc) {
    return actionHistory = {
        selHistory: [],
        actionIndex: -1,

        // Add a sel string to action history
        //-------------------------------------------------------------------
        add: function(sel) {
            if (this.selHistory.length - 1 !== this.actionIndex) {
                this.selHistory.length = this.actionIndex + 1;
            }

            this.selHistory.push(sel);
            this.actionIndex++;
            dev.log("Add action to history : " + sel);
        },

        // Traverse Action history back/forth
        //-------------------------------------------------------------------
        traverese: function(step) {
            if (this.selHistory[this.actionIndex + step]) {
                misc.showLoading();

                this.actionIndex += step;
                var spec = document.getElementById(visualizer.vizId).getSaveData().spec;
                visualizer.loadViz(visualizer.vizId, spec, this.selHistory[this.actionIndex]);

                dev.log("Traverse action history step : " + step);
            } else {
                dev.warn("No more actions in history.");
            }
        },

        // Go one step back in history
        //-------------------------------------------------------------------
        undo: function() {
            this.traverese(-1);
            visualizer.unzoom();
            $('cham-series-template li.selected').removeClass('selected');
        },

        // Go one step forward in history
        //-------------------------------------------------------------------
        redo: function() {
            this.traverese(1);
            visualizer.unzoom();
            $('cham-series-template li.selected').removeClass('selected');
        },

        // Initialize Events
        //-------------------------------------------------------------------
        initEvents() {

            // Add sel string to history
            // Anytime a surface is applied to main viz
            //-------------------------------------------------------------------
            document.getElementById(visualizer.vizId).addEventListener('surface_apply_done', function(e) {
                actionHistory.add(e.target.getSaveData().sel);
            });
        }
    }
}