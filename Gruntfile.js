module.exports = function(grunt) {

  // Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			options: {
				config: 'config.rb'
			},
			server: {
				cssDir: 'css'
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'css',
				src: ['*.css', '!*.min.css'],
				dest: 'dest/css/',
				ext: '.min.css'
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'js/base.js']
		},
		concat: {
			options: {
				separator: '\n',
			},
			dist: {
				src: ['js/header.js', 'js/index.js'],
				dest: 'js/base.js',
			},
		},
		uglify: {
			target: {
				files: {
                    'dest/js/base.min.js': ['js/base.js']
                }
			}
		},
		clean: {
			dest: {
				src: ['dest/*.html', 'dest/css/*', 'dest/js/*', 'dest/img/*', 'dest/plugin/*']
			}
		},
		copy: {
			plugin: {
				src: ['plugin/*'],
				dest: 'dest/',
				filter: 'isFile'
			},
			img: {
				src: ['img/*.jpg', 'img/*.png'],
				dest: 'dest/',
				filter: 'isFile'
			},
			html: {
				files: [{
					src: ['./*.html'],
					dest: 'dest/',
					filter: 'isFile'
				}]
			}
		},
		usemin: { 
            html: ['dest/*.html']
        }
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');	
	grunt.loadNpmTasks('grunt-usemin');

	grunt.registerTask('default', ['compass', 'concat']);
	grunt.registerTask('produce', ['clean', 'compass', 'cssmin', 'concat', 'jshint', 'uglify', 'copy', 'usemin']);

};