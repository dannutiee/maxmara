module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: true,
          optimization: 2
        },
        files: {
          'css/main.css': 'less/*.less' 
        }
      }
    },
    wiredep: {

  task: {

    // Point to the files that should be updated when
    // you run `grunt wiredep`
    src: [
      'index.php',   // .html support...

    ],
    
    options: {
      // See wiredep's configuration documentation for the options
      // you may pass:

      // https://github.com/taptapship/wiredep#configuration
    }
  }
},
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });



  grunt.registerTask('default', ['less', 'watch']);
  grunt.loadNpmTasks('grunt-wiredep');
};
