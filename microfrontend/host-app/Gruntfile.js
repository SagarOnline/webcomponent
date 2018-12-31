module.exports = function (grunt) {

    grunt.initConfig({
        copy: {
            main: {
              files: [
                                     
                {expand: true, cwd: 'node_modules/@webcomponents/html-imports', src: ['html-imports.min.js'], dest: 'app', flatten: true,},              ]
            }
        },

    });
    //load the copy module
    grunt.loadNpmTasks('grunt-contrib-copy');
    //register the build task
    grunt.registerTask('build', ['copy:main']);

};
