module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          "public/style.css" : "sass/style.scss"
        }
      }
    },
    watch: {
      all: {
        files: {

          'sass/style.scss': "sass/style.scss"
        },
        options: {
          liveload: true
        }
      }
    }
  })
    grunt.loadNpmTasks("grunt-contrib-watch")
    grunt.loadNpmTasks("grunt-sass")
    grunt.registerTask("watch", ["watch"])
    grunt.registerTask('default', ['sass'])
    grunt.event.on('watch', function(action, filepath, target){
      grunt.log.writeln("hmm")
    })
}
