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
			files: ['Gruntfile.js', 'js/*.js']
		},
		uglify: {
			target: {
				files: [{
	                expand: true,
	                cwd: 'js',
	                src: '**/*.js',
	                dest: 'dest/js',
	                ext: '.min.js'
	            }]
			}
		},
		clean: {
			dest: {
				src: ['dest/*.html', 'dest/css/*', 'dest/js/*', 'dest/img/*', 'dest/plugin/*']
			}
		},
		copy: {
			plugin: {
				src: ['plugin/*.js'],
				dest: 'dest/plugin',
				filter: 'isFile'
			}
			img: {
				src: ['img/*.jpg', 'img/*.png'],
				dest: 'dest/img',
				filter: 'isFile'
			},
			html: {
				files: [{
					src: ['./*.html'],
					dest: 'dest/',
					filter: 'isFile'
				}]
			}
		}  
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');	

	grunt.registerTask('default', ['compass']);
	grunt.registerTask('produce', ['clean', 'compass', 'cssmin', 'jshint', 'uglify', 'copy']);

};