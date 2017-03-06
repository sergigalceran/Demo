module.exports = function(grunt) {
    // Configuración de Grunt.js
    // Project configuration.
    grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            './angular/core.min.js': ['./angular/core.js']
          }
        }
      },
      obfuscator: {
        files: [
          'core.js',
          './angular/*.js'
        ],
        entry: 'core.js',
        out: 'angular/obfuscated.js',
        strings: true,
        root: __dirname
      }
    });

 // Load the plugin that provides the "uglify" task.
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-obfuscator');

 // Default task(s).
 grunt.registerTask('default', ['uglify']);
 grunt.registerTask('ofuscar', ['obfuscator']);

};
