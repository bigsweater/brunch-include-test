// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo:  {
        'app.js':/^app/,
        'vendor.js': /(?!app)/
      }
    },
    stylesheets: {joinTo: 'app.css'},
    templates: {joinTo: 'app.js'},
  },

  npm: {
    globals: {
      jQuery: 'jquery'
    },

    static: [
      'node_modules/jquery-validation/dist/jquery.validate.js',
      'node_modules/jquery-validation/dist/additional-methods.js'
    ]    
  }
};
