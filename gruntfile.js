module.exports = function(grunt) {
    // Configuración de Grunt.js
    // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   uglify: {
     options: {
       },
     build: {
       src: './angular/core.js',
       dest: './angular/core.min.js'
     }
   }
 });
 grunt.initConfig({
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
