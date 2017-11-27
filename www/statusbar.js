
var exec = require('cordova/exec');


var Swiper = {

    isVisible: true,

    test: function()
    {
    	exec(null,null,"StatusBar","test",[]);
    },
    action: function(success,error)
    {
    	exec(success,error,"StatusBar","activeReader",[]);
    },
    deactive: function(success,error)
    {
    	exec(success,error,"StatusBar","deactiveReader",[]);
    },
    swipe: function(success,error)
    {
    	exec(success,error,"StatusBar","swipe",[]);
    }
}

module.exports = Swiper;
