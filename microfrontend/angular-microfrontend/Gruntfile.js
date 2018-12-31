module.exports = function (grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: '\n',
            },
            dist: {
                src: ['build/runtime.js',
                    'build/polyfills.js',
                    'build/styles.js',
                    'build/scripts.js',
                    'build/vendor.js',
                    'build/main.js'
                ],
                dest: 'hello-app/hello-app.js',
            },
        },

        copy: {
            main: {
              files: [
                {expand: true, cwd: 'node_modules/@webcomponents/webcomponentsjs/', src: ['custom-elements-es5-adapter.js'], dest: 'hello-app', flatten: true,},              ]
            }
        },

    });

   

    //load the copy module
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //register the build task
    grunt.registerTask('build', ['concat:dist', 'copy:main']);

};
