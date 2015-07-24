module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['css/table.css', 'css/style.css'],
        dest: 'css/main.css'
      }
    },
    sass: {
      dist: {
        files: { 'css/main.css': 'css/main.scss' }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['main.css', '!*.min.css'],
          dest: 'release/css',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: '**/*.js',
          dest: 'dist/',
          ext: '.min.js'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default', ['concat', 'sass', 'cssmin', 'uglify']);
};
