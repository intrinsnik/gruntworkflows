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
		}

	}); //Init Config

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat']);

}; //Wrapper function