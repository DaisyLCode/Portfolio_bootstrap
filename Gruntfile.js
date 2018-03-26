module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 100,
            suffix: '_logo'
          }, {
            width: 320,
            suffix: '_small'
          }, {
            width: 640,
            suffix: '_medium'
          }, {
            width: 1200,
            suffix: '_large',
            quality: 80
          }, {
            width: 1600,
            suffix: '_extralarge',
            quality: 80
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
