module.exports = {
    'list': [
      'index.html',
      'config.js',
      'favicon.ico',
      'LICENSE',
      'jspm_packages/system.js',
      'jspm_packages/system-polyfills.js',
      'jspm_packages/system-csp-production.js',
          'jspm_packages/system.js.map',//Because Safari shows 404 not found without this .map file
      'jspm_packages/github/systemjs/**',
      'jspm_packages/github/jspm/**',

     'dist/app-build-public-*.js',
     'dist/aurelia-*.js',      
     'dist/materialize-bridge-*.js',
     'dist/chart-*.js'
    ],
    // this section lists any jspm packages that have
    // unbundled resources that need to be exported.
    // these files are in versioned folders and thus
    // must be 'normalized' by jspm to get the proper
    // path.
    'normalize': [
      [
        // include font-awesome.css and its fonts files
        'font-awesome', [
          '/css/font-awesome.min.css',
          '/fonts/*'
        ]
      ],
      // [
      //   // include bootstrap's font files
      //   'bootstrap', [
      //     '/fonts/*'
      //   ]
      // ],    
    ]
};
