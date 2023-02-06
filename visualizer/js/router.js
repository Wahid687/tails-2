//-------------------------------------------------
// Initialize Router Scripts
//-------------------------------------------------
function initRouter() {

    var Router = {
        root: '',
        routes: [],

        //Initialize Router and listen for URL changes
        //--------------------------------------------
        init: function(root) {
            Router.root = root;

            window.addEventListener('load', function() {
                if (window.location.hash === "") {
                    Router.navigate("");
                }
            });
            window.addEventListener('popstate', Router.listen());
        },

        // Add an route to array
        //--------------------------------------------
        add: function(path, action) {
            this.routes.push({
                path: path,
                action: action
            })
        },

        // Update URL based on route
        //--------------------------------------------
        navigate: function(route) {
            window.location.href = this.root + '#' + route;
        },

        // Process Routes
        //--------------------------------------------
        listen: function() {
            var hash = decodeURI(window.location.hash).replace("#", '');

            for (var i = 0; i < Router.routes.length; i++) {
                if (hash.split("/")[0] === Router.routes[i].path) {
                    if (Router.routes[i].path === "visualizer") {
                        Router.routes[i].action(hash.split("/")[2], hash.split("/")[4]);
                    } else {
                        Router.routes[i].action();
                    }
                    break;
                }
            }
        },

        // Detects routes on URL changes
        //--------------------------------------------
        detect: function() {
            window.addEventListener('popstate', function() {
                Router.listen();
            });
        }
    };

    return Router;
}