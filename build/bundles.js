module.exports = {
  "bundles": {  
        "dist/app-build": {
          "includes": [
            "[**/*.js]",
            "**/*.html!text"
          ],
          "excludes": [
            "[pages/login/index.js]",
            "[pages/login/index.html!text]",
            "[components/routers/login.js]",
            "[components/routers/login.html!text]",
            "[main.js]"
          ],
          "options": {
            "inject": true,
            "minify": true,
            "depCache": true,
            "rev": true
          }
        },

        "dist/app-build-public": {
            "includes": [ 
               "[pages/login/index.js]",
               "[pages/login/index.html!text]",         
               "[components/routers/login.js]",
               "[components/routers/login.html!text]",
               "[main.js]"
            ],           
            "options": {
                "inject": true,
                "minify": true,
                "depCache": true,
                "rev": true
            }
        },

        "dist/aurelia": {
            "includes": [
              "aurelia-framework",
              "aurelia-bootstrapper",
              "aurelia-fetch-client",
              "aurelia-router",            
              "aurelia-templating-binding",
              "aurelia-polyfills",
              "aurelia-templating-resources",
              "aurelia-templating-router",
              "aurelia-loader-default",
              "aurelia-history-browser",
              "aurelia-logging-console",
              "aurelia-dialog",
              "[aurelia-dialog/resources/*.js]",              
              "aurelia-validation",
              "aurelia-google-maps",
              "aurelia-pal-browser",                       
              "aurelia-logging",
              "aurelia-pal",
              "aurelia-typed-observable-plugin",
              "tslib"
            ],
            "excludes": [
                "jquery"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": true,
                "rev": true
            }
        },
              
        "dist/materialize-bridge": {
            "includes": [
            "materialize-css",
            "aurelia-materialize-bridge",
            "aurelia-materialize-bridge/**/*.js",
            "aurelia-materialize-bridge/**/*.css!text",
            "aurelia-materialize-bridge/**/*.html!text",
            "moment",
            "numeral",
            "fetch"
            ],
            "excludes": [
               "aurelia-templating",
               "aurelia-binding",
               "aurelia-dependency-injection"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": true,
                "rev": true
            }
        },

        "dist/chart": {
            "includes": [
              "aurelia-chart",
              "aurelia-chart/**/*.js",
              "aurelia-chart/**/*.css!text",
              "aurelia-chart/**/*.html!text"
            ],
            "excludes": [
               "moment",
               "aurelia-framework"
            ],
            "options": {
                "inject": true,
                "minify": true,
                "depCache": true,
                "rev": true
            }
        }

    }
};
