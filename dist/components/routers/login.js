define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var loginRouter = (function () {
        function loginRouter() {
        }
        loginRouter.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'My - Login';
            config.map([
                { route: ['', 'index'], name: 'index', moduleId: 'pages/login/index', nav: true }
            ]);
        };
        return loginRouter;
    }());
    exports.loginRouter = loginRouter;
});

//# sourceMappingURL=login.js.map
