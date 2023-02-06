//-------------------------------------------------
// Define and initialize components
//-------------------------------------------------
var dev = initDev();
var router = initRouter();
var misc = initMisc();
var landing = initLanding();
var roomscenes = initRoomscenes(router);
var visualizer = initVisualizer("cham-viz", "cham-viz-sub", misc);
var productMenu = initProdMenu(visualizer);
var actionHistory = initActionHistory(visualizer, misc);
var upload = initUpload(misc);
var compare = initCompare(false, visualizer, misc);
var projects = initProjects(router, visualizer, compare);
var topMenu = initTopMenu(router, projects, upload, misc);
var social = initSocial(visualizer);
var mail = initMail();

// Initialize Event Handlers
//-------------------------------------------------
roomscenes.initEvents(router);
visualizer.initEvents();
productMenu.initEvents();
actionHistory.initEvents();
projects.initEvents();
topMenu.initEvents();
compare.initEvents();
upload.initEvents();
mail.initEvents();

// Adding routing rules
//-------------------------------------------------
router.add('', function() {
    dev.log('------------------------\nRouted to Landing');

    roomscenes.hide();
    visualizer.hide();
    topMenu.hide();

    landing.show();
});

router.add('roomscenes', function() {
    dev.log('------------------------\nRouted to Roomscenes ');

    landing.hide();
    visualizer.hide();


    // topMenu.hide();
    topMenu.shrink();

    roomscenes.show();
    // var $ul = $('cham-roomscenes ul'); 
    // if(!$ul.hasClass('resorted')){ // Client: Sort the rooms in the opposite order they are currently in
    //   $ul.children('[role=option]').each(function(i,li){$ul.prepend(li)});
    //   $ul.addClass('resorted');
    // }

    topMenu.show();

    compare.off();
});

router.add('visualizer', function(spec, sel) {
    dev.log('------------------------\n' +
        'Routed to Visualizer\n' + spec + ',' + sel);

    landing.hide();
    roomscenes.hide();

    topMenu.show();
    topMenu.extend();

    productMenu.reset();
    visualizer.loadViz("cham-viz", spec, sel);
    visualizer.show();
});

// Init router with root and listen to URL changes
//------------------------------------------------
router.init("");
router.detect();

// Window onload events
//------------------------------------------------
window.onload = function() {
    initUI();
}