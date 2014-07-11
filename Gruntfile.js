module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          keepalive: true,
          port: 3333,
          open: {
            target: "http://localhost:3333/trainer.html"
          }
        }
      }
    }
  });
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.registerTask("default", ["connect"]);
};