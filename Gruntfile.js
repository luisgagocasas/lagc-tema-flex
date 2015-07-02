module.exports = function (grunt) {
    grunt.initConfig({
        //Server PHP
        php: {
            dist: {
                options: {
                    hostname: 'localhost',
                    port: 8000,
                    base: 'www/', // Project root
                    keepalive: false,
                    open: false,
                    directives: {
                        'error_log': require('path').resolve('logs/error.log')
                    }
                }
            }
        },
        //BrowserSync
        browserSync: {
            dist: {
                bsFiles: {
                    src: [
                        'stylus/*.styl',
                        'jade/*.jade',
                        'javascript/*.js',
                    ]
                },
                options: {
                    proxy: '<%= php.dist.options.hostname %>:<%= php.dist.options.port %>',
                    watchTask: true,
                    notify: false,
                    open: true,
                    //startPath: '',
                    //reloadDelay: 2000,
                    //injectChanges: true,
                    reloadOnRestart: true,
                    logLevel: 'silent',
                    ghostMode: {
                        clicks: true,
                        scroll: true,
                        links: true,
                        forms: true
                    }
                }
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
        //Notificaciones
        notify: {
            uglify: {
                options: {
                    enabled: true,
                    max_jshint_notifications: 1,
                    message: "uglify iniciado!"
                }
            },
            jadephp: {
                options: {
                    enabled: true,
                    max_jshint_notifications: 1,
                    message: "jade iniciado!"
                }
            },
            stylus: {
                options: {
                    enabled: true,
                    max_jshint_notifications: 1,
                    message: "stylus iniciado!"
                }
            },
        },
        //Observar cambios
        watch: {
            options: {
                nospawn: false,
                /*livereload: true*/
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
        }
    });

    //Cargamos todos los tasks declarados en package.json
    require('load-grunt-tasks')(grunt);
    // Defino las tareas.
    grunt.registerTask('default', ['stylus', 'uglify', 'jadephp', 'notify', 'browserSync:dist', 'php:dist', 'watch']);
    //grunt.registerTask('default', ['stylus','uglify', 'notify','watch']);
};