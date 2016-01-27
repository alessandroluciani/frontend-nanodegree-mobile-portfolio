module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        

        connect: {
            server: {
              options: {
                keepalive: true,
                port: 9001,
                base: 'source'
              }
            }
          },
        //Watch Configuration + JsHtin task

        watch: {
            gruntfile: {
              files: 'Gruntfile.js',
              tasks: ['jshint'],
            },
            src: {
              files: ['source/**/*.js', 'css/**/*.scss'],
              tasks: ['jshint'],
            },
            options: {
                'spawn': true,
                'interrupt': false,
                'debounceDelay': 500,
                'interval': 100,
                'event': 'all',
                'reload': false,
                'forever': true,
                'dateFormat': null,
                'atBegin': false,
                'livereload': true,
                'cwd': process.cwd(),
                'livereloadOnError': true
            }
        } ,       

        //JsHint Configuration
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'source/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
            // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },



         //Clean 'build' Directory
        clean: {
            build: {
                src: [ 'build' ]
            }
        },

        copy: {
            build: {
                cwd: 'source',
                src: [ '**' ],
                dest: 'build',
                expand: true
            }
        },

        imagemin: {
            build: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'source/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/'
                }]
            },
            dev: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'source/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'source/'
                }]
            }
        }




    });




    grunt.loadNpmTasks('grunt-contrib-connect');
    // Load the plugin that provides the "Watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Load the plugin that provides the "JsHint" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    
    
    // Load the plugin that provides the "Clean" task.
    grunt.loadNpmTasks('grunt-contrib-clean');
    // Load the plugin that provides the "Copy" task.
    grunt.loadNpmTasks('grunt-contrib-copy');
    // Load the plugin that provides the "imagemin" task.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    // Load the plugin that provides the "CssMin" task.
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Load the plugin that provides the "Concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    // Load the plugin that provides the "Uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Load the plugin that provides the "Pagespeed" task.
    grunt.loadNpmTasks('grunt-pagespeed');

    // Default task(s).
    //grunt.registerTask('clean', ['clean']);
    //grunt.registerTask('default', ['clean','copy']);
    //grunt.registerTask('default', ['clean', 'concat', 'uglify']);

    /*
    grunt.registerTask(
        'Watch', 
        //'Watch Js files plus JsHint', 
        [ 'watch' ]
    );
/*
    grunt.registerTask(
        'httpServer', 
        'Server http',
        [ 'http-server' ]
    );

    grunt.registerTask(
        'Compress_images', 
        'Compression images via grunt-contrib-imagemin.', 
        [ 'imagemin' ]
    );

    grunt.registerTask(
        'pageSpeed', 
        'PageSpeed via google', 
        [ 'pagespeed' ]
    );

    

    grunt.registerTask(
        'build', 
        'Total Compiling', 
        [ 'clean:build', 'copy:build', 'compress_images' ]
    );

    */
    grunt.registerTask(
        'default',  
        ['watch']
    );

    grunt.registerTask(
        'CompressImageDev',  
        ['imagemin:dev']
    );

    grunt.registerTask(
        'Build',  
        ['clean:build','copy:build','imagemin:build']
    );





};



