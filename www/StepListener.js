

var argscheck = require('cordova/argscheck'),
    exec = require('cordova/exec'),
    utils = require('cordova/utils'),

    stepcounter = {


        startWatch:function(succFun,failFunc,options){
            exec(succFun, failFunc, "StepListener", "start", [options]);
        },
        stopWatch:function(succFun,failFunc,options){
            exec(succFun, failFunc, "StepListener", "stop", [options]);
        },

        getCurrentStep :function(successCallback, errorCallback, options){

            exec(successCallback, errorCallback, "StepListener", "getCurrentStep", [options]);
        },
        test:function(){
            console.log("aaaaa");
        }
    };

module.exports = stepcounter;
