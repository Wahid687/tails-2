//--------------------------------------------------------------------
// Developer related functions, focused for debugging
// DEBUG : true, to view dev logs
//--------------------------------------------------------------------
function initDev() {

    //------------------------------------------------------------------
    // Init DEV Log
    //------------------------------------------------------------------
    //##################################################################
    // console.clear();

    console.log('%cInitializing Project', `font-size:15px; color: #555;`);

    console.log('%cRUN > dev.DEBUG = true, to turn on developer log.', `font-size:11px;color: #999;`);

    console.log('%c.....................',
        `font-size:10px;
  background:url(` + location.protocol + `//` + location.host + `/visualizer/img/cham-logo.png)
  no-repeat;
  padding:0 5px 30px 0;
  color:rgba(0,0,0,0);
  background-size: contain`);
    //##################################################################
    //------------------------------------------------------------------

    // Start of the return object
    //------------------------------------------------------------------
    return {
        DEBUG: true,

        // Customized Console Log
        //----------------------------------------------------------------
        log: function(inp, caller) {
            if (this.DEBUG) {
                console.groupCollapsed("%c" + inp, "color: #94a67c; font-family:sans-serif; font-size: 12px");
                console.trace();
                console.groupEnd();
            }
        },

        // Customized Warning Log
        //----------------------------------------------------------------
        warn: function(inp) {
            if (this.DEBUG) {
                console.groupCollapsed("%c" + inp, "color: #e3a664; font-family:sans-serif; font-size: 12px");
                console.trace();
                console.groupEnd();
            }
        },

        // Customized Data Dump
        //----------------------------------------------------------------
        data: function(msg, data) {
            if (this.DEBUG) {
                console.groupCollapsed("%c" + msg, "color: #799fbd; font-family:sans-serif; font-size: 12px");
                console.log(data);
                console.trace();
                console.groupEnd();
            }
        }
    };
};