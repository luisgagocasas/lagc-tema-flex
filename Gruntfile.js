module.exports = function (grunt) {
    grunt.initConfig({
        //Observar cambios
        watch: {
            options: {
                nospawn: false,
                livereload: true
            },
            //observar de stylus
            stylesheets: {
                files: ['stylus/*.styl'],
                tasks: ['stylus']
            },
            //observar de js
            scripts: {
                files: ['javascript/*.js'],
                tasks: ['uglify']
            },
            //observar el jade
            jadephp: {
                files: ["jade/*.jade"],
                tasks: ["jadephp"]
            }
        },
        //Preprocesador css
        stylus: {
            compile: {
                options: {
                    compress: true,
                    linenos: false
                },
                files: [{
                    //sitio
                    'www/css/index.css': 'stylus/estilos.styl',
                }]
            }
        },
        // Compresor de .js
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            js: {
                files: {
                    'www/js/index.js': 'javascript/*.js',
                }
            }
        },
        // Compilar Jade
        jadephp: {
            compile: {
                options: {
                    client: false,
                    pretty: true
                },
                files: {
                    'www/index.html': 'jade/index.jade',
                }
            }
        },
        //BrowserSync
        /* Activar el Live Reload en el navegador y funcionara */
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'stylus/*.styl',
                        'jade/*.jade',
                        'javascript/*.js',
                    ]
                },
                options: {
                    watchTask: true,
                    server: './www',
                    notify: false,
                    //startPath: '',
                    //reloadDelay: 2000,
                    //injectChanges: true,
                    reloadOnRestart: true,
                    ghostMode: {
                        clicks: true,
                        scroll: true,
                        links: true,
                        forms: true
                    }
                }
            }
        }
    });

    //Cargamos todos los tasks declarados en package.json
    require('load-grunt-tasks')(grunt);
    // Defino las tareas.
    grunt.registerTask('default', ['stylus', 'uglify', 'jadephp', 'browserSync', 'watch']);
    //grunt.registerTask('default', ['stylus','uglify', 'notify','watch']);
};