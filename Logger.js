/**
 * @class
 * @classdesc The Logger class to create logger instances
 * @author Armando Soriano <asoriano.dev@gmail.com>
 * @version 1.0.0
 * @param {object} options {
 *                         path {string}, 
 *                         filename {string}
 *                         }
 */
function Logger(options) {

    if( !options )
		options = {};
    
    var path = require('path');
    var folder = options.path ? path.resolve(path.normalize(options.path)) : path.resolve(__dirname);
    var filename = options.filename ? options.filename : 'log';
    
	Object.defineProperties(this, {
        /**
         * @member {function} 
         * @description NodeJS filesystem module 
         */
	    fs: {
	        value : require('fs'),
	        enumerable : false,
	        writable : false,
	        configurable : false
	    },
        /**
         * @member {string}
         * @description NodeJS end-of-line value
         */
	    EOL: {
	        value : require('os').EOL,
	        enumerable : false,
	        writable : false,
	        configurable : false
	    },
        /**
         * @member {string} 
         * @description Full path to log file
         */
		file : {
		    value : folder + '/' + filename,
		    enumerable : true,
		    writable : false,
		    configurable : false
		},
        /**
         * @member {string} 
         * @description The current time in locale basis string to be printed as logging timestamp
         */
        date: {
            get: function(){
                return new Date().toLocaleString().split(' ').slice(0, 5).join(' ');
            }
        }
	});

};
/**
 * @description Write
 * @param {any} data The data to be written in the log
 */
Logger.prototype.write = function(data) {
	this.fs.appendFile(this.file, data, function(err) {
		if (err) throw err;
	});
};
/**
 * Prints an error log message
 * @param {string} message The message to be written
 */
Logger.prototype.error = function(message) {
	this.write('[ERROR][' + this.date + ']: ' + message + this.EOL);
};
/**
 * Prints an info log message
 * @param {string} message The message to be written
 */
Logger.prototype.info = function(message) {
	this.write('[INFO][' + this.date + ']: ' + message + this.EOL);
};
/**
 * Prints a warning log message
 * @param {string} message The message to be printed
 */
Logger.prototype.warning = function(message) {
	this.write('[WARNING][' + this.date + ']: ' + message + this.EOL);
};
/**
 * Prints a data log message
 * @param {string} message The message to be printed
 */
Logger.prototype.data = function(message) {
	this.write('[DATA][' + this.date + ']: ' + message + this.EOL);
};

module.exports = Logger;