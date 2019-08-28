import {Router, RouterConfiguration} from 'aurelia-router'

export class loginRouter {
    router: Router;
    
    configureRouter(config: RouterConfiguration, router: Router) {
        this.router = router;
        config.title = 'My - Login';

        config.map([
            { route: ['', 'index'], name: 'index', moduleId: 'pages/login/index', nav: true }
        ]);        

    }
}
