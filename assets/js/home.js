// !(function () {
var style = document.createElement('style');
style.type = 'text/css';

var keyFrames = '\
	@keyframes marquee {\
        0%   { transform: translate(0,0); }\
        100% { transform: translate(LEFT_POSITION,0); }\
    }\
    \
    @-webkit-keyframes marquee {\
        0%   { -webkit-transform: translate(0,0); }\
        100% { -webkit-transform: translate(LEFT_POSITION, 0); }\
    }\
    \
    @-moz-keyframes marquee {\
        0%   { -webkit-transform: translate(0,0); }\
        100% { -webkit-transform: translate(LEFT_POSITION, 0); }\
    }';

var marquee = document.querySelector('.banner').getBoundingClientRect().width - 8;

document.querySelector('.banner.second').style.left = marquee+"px";
style.innerHTML = keyFrames.replace(/LEFT_POSITION/g, -marquee+"px");
document.getElementsByTagName('head')[0].appendChild(style);
//})();