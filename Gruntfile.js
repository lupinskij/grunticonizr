module.exports = function (grunt) {

  grunt.initConfig({
    sass: {
      dev: {
        files: {
          'css/core.css': 'sass/main.scss'
        }
      }
    },
    iconizr: {
      options: {
        dims: true,
        common: "svg-icon",
        keep: false,
        preview: 'preview',
        padding: 1,
        render: {
          css: false,
          scss: 'sass'
        }
      },
      your_target: {
        src: 'svg',
        dest: 'img'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-iconizr');
  grunt.registerTask('build-icons', ['iconizr', 'sass']);
};
