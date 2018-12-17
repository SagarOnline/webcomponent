module.exports = function (grunt) {

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                presets: ['babel-preset-es2015']
            },
            dist: {
                files: [{
                    "expand": true,
                    "cwd": "src/",
                    "src": ["**/*.js"],
                    "dest": "build/",
                    "ext": ".js"
                }]
            }
        },
        copy: {
            main: {
              files: [
                {expand: true, cwd: 'build/', src: ['**'], dest: 'app/scripts', flatten: true,},
                {expand: true, cwd: 'node_modules/@webcomponents/webcomponentsjs', src: ['webcomponents-bundle.js', 'custom-elements-es5-adapter.js'], dest: 'app/scripts', flatten: true,},
                {expand: true, cwd: 'node_modules/@webcomponents/html-imports', src: ['html-imports.min.js'], dest: 'app/scripts', flatten: true,}
              ]
            }
        },

    });

   

    //load the copy module
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-babel');
    //register the build task
    grunt.registerTask('build', ['babel', 'copy:main']);

};
