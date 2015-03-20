

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec'),
    utils = require('cordova/utils'),

    stepcounter = {


        startWatch:function(succFun,failFunc,options){
            exec(succFun, failFunc, "StepListener", "Start", [options]);
        },
        stopWatch:function(succFun,failFunc,options){
            exec(succFun, failFunc, "StepListener", "Stop", [options]);
        },

        getCurrentStep :function(successCallback, errorCallback, options){
            exec(successCallback, errorCallback, "StepListener", "getCurrentStep", [options]);
        }
    };

module.exports = stepcounter;
