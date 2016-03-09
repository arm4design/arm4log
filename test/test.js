var Logger = require('../Logger.js');
var fs = require('fs');
var path = require('path');
var assert = require('chai').assert;

describe('Logger', function(){
    describe('defaultInstance', function(){
        var logger = new Logger();
        it('should instantiate', function(){
            assert.strictEqual(logger.file, path.resolve('.') + '/log', 'default log filepath should be '+ path.resolve('.') +'/log');
        });
    });
    describe('instance', function(){
        var logger = new Logger({
            path: 'test',
            filename: 'dummy-log'
        });
        it('should instantiate', function(){
            assert.strictEqual(logger.file, path.resolve('test') + '/dummy-log', 'specified log filepath should be '+ path.resolve('test') +'/dummy-log');
        });
        describe('.info()', function(){
            it('should append an INFO log line', function(){
                logger.info('Log line');
                setTimeout(function(){
                    assert.isAtLeast(fs.readFileSync(logger.file, 'utf-8').search('INFO'), 0, 'INFO string should be in the log file');
                }, 600);
            });
        });
        describe('.error()', function(){
            it('should append an ERROR log line', function(){
                logger.error('Log line');
                setTimeout(function(){
                    assert.isAtLeast(fs.readFileSync(logger.file, 'utf-8').search('ERROR'), 0, 'ERROR string should be in the log file');
                }, 600);
            });
        });
        describe('.data()', function(){
            it('should append a DATA log line', function(){
                logger.data('Log line');
                setTimeout(function(){
                    assert.isAtLeast(fs.readFileSync(logger.file, 'utf-8').search('DATA'), 0, 'DATA string should be in the log file');
                }, 600);
            });
        });
        describe('.warning()', function(){
            it('should append a WARNING log line', function(){
                logger.warning('Log line');
                setTimeout(function(){
                    assert.isAtLeast(fs.readFileSync(logger.file, 'utf-8').search('WARNING'), 0, 'WARNING string should be in the log file');
                }, 600);
            });
        });
        after(function(){
            try { fs.unlinkSync(logger.file); } 
            catch(e) {}
        });
    });
});