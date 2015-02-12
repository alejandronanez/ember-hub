module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Ember Templates
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: 'js/templates/',
                    templateNamespace: 'Handlebars'
                },
                files: {
                    'js/templates.js': 'js/templates/**/*.hbs'
                }
            }
        },
        // Watch for changes
        watch: {
            templates: {
                files: ['js/templates/**/*.hbs'],
                tasks: ['emberTemplates'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['css/**/*.css'],
                options: {
                    livereload: true
                }
            },
            scripts: {
                files: ['js/**/*.js'],
                options: {
                    livereload: true
                }
            }
        },
        // Connect
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '0.0.0.0',
                    livereload: true
                }
            }
        }
    });

    // Load Modules
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Load tasks
    grunt.registerTask('templates', ['emberTemplates']);
    grunt.registerTask('default', ['connect', 'watch']);
};
