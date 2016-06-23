/**
 * Line command
 * > npm init
 * > npm install grunt grunt-contrib-less grunt-contrib-watch jit-grunt --save-dev
 * > grunt
 */
module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "style.min.css": "style.less"
                }
            }
        },
        watch: {
            styles: {
                files: [
                    'style.less'
                ],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'watch']);
};
