module.exports = function (grunt) {
	grunt.initConfig({
		//Preprocesador css
        stylus: {
            compile: {
                options: {
                    compress: true,
                    linenos: false
                },
                files: [{
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
				nospawn: true,
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
	});

	//Cargamos todos los tasks declarados en package.json
	require('load-grunt-tasks')(grunt);
	// Defino las tareas.
    grunt.registerTask('default', ['stylus','uglify','jadephp', 'notify','watch']);
	//grunt.registerTask('default', ['stylus','uglify', 'notify','watch']);
};