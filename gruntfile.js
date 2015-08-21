module.exports = function(grunt) {
	grunt.initConfig({

		//Concat is the task name
		concat : {
			options : {
				seperator : '\n\n//-------------------------------------\n',
				banner : '\n\n//-------------------------------------\n'
			},
			dist : {
				src : ['components/scripts/*.js'],
				dest : 'builds/development/js/script.js'
			}
		}, //concat

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: [{
					src: 'components/sass/style.scss',
					dest: 'builds/development/css/style.css'
				}]
			}
		}, //sass

		watch: {
			options: {
  				spawn: false,
  				livereload: true
			},
  			scripts: {
    			files: ['builds/development/**/*.html',
    				'components/scripts/**/*.js', 
    				'components/sass/**/*.scss'
    			],
    			tasks: ['concat', 'sass'],
  			},
		}, 

		connect: {
			server: {
				options: {
					hostname: 'localhost',
					port: 3000,
					base: 'builds/development/',
					livereload: true
				}
			}
		}


	}); //Init Config

	// Concat javascript files
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Compile sass files into css
	grunt.loadNpmTasks('grunt-sass');

	//Watch for changes to html, js and scss files
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Live reload middleware
	grunt.loadNpmTasks('grunt-contrib-connect');

	//main grunt
	grunt.registerTask('default', ['concat', 'sass', 'connect', 'watch']);

}; //Wrapper function