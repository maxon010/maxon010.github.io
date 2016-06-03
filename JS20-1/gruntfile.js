module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
        dist:{
            src: ['js/src/*.js'],
            dest: 'js/dist/script.main.js'
        }
      },
   	 uglify: {
         dist:{
            src: 'js/dist/script.main.js',
            dest: 'js/dist/script.min.js'
         }
    },
 	sass: {
        dist: {
            files: [{
            expand: true,
            cwd: 'styles',
            src: ['*.scss'],
            dest: 'styles',
            ext: '.css'
        }]
      }
    },
      watch: {
          sass:{
              files: ['styles/*.scss'],
              tasks: ['sass']
          }
      }
		
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass'); grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat','uglify','sass']);

};