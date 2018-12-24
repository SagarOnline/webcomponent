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
                {expand: true, cwd: 'node_modules/@webcomponents/webcomponentsjs', src: ['webcomponents-bundle.js', 'webcomponents-bundle.js.map', 'custom-elements-es5-adapter.js'], dest: 'app/scripts', flatten: true,},
                {expand: true, cwd: 'node_modules/@webcomponents/html-imports', src: ['html-imports.min.js', 'html-imports.min.js.map'], dest: 'app/scripts', flatten: true,},
                {expand: true, cwd: 'node_modules/@webcomponents/template', src: ['template.js'], dest: 'app/scripts', flatten: true,},
                {expand: true, cwd: 'node_modules/@webcomponents/webcomponents-platform', src: ['webcomponents-platform.js'], dest: 'app/scripts', flatten: true,},
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
