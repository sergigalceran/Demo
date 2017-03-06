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
        out: 'dist/core.myapp.min.js',
        strings: true,
        root: __dirname
      },
      watch: {
  scripts: {
    files: ['angular/*.js'],
    tasks: ['jshint'],
    options: {
      spawn: false,
    },
  },
},
concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['angular/core.js', 'angular/utils.js'],
      dest: 'dist/built.js',
    },
  }
    });

 // Load the plugin that provides the "uglify" task.
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-obfuscator');
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-watch');

 // Default task(s).
 grunt.registerTask('default', ['uglify']);
 grunt.registerTask('ofuscar', ['concat','obfuscator']);


};
