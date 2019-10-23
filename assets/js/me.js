var keystrokeSound = new Audio('/assets/sound/sfx_sounds_Blip7.wav');
var interval ;
//var cnt = 0;

document.querySelector('#mute').addEventListener('change', function () {
	if(this.checked) {
        keystrokeSound.volume = 1.0;
        this.parentElement.className = 'sound sound-on';
	} else {
        keystrokeSound.volume = 0;
        this.parentElement.className = 'sound sound-off';
	}
});

function playSound (time) {
	clearInterval(interval);

	time = (time)?time:0;

	setTimeout(function() {
		interval = setInterval(function(){
			keystrokeSound.pause();
			keystrokeSound.currentTime = 0;
            var playPromise = keystrokeSound.play();
            if (playPromise !== undefined) {
                playPromise.then( _ => {

                })
            .catch(error => {
                });
            }

		}, 100);
	}, time);
}

window.addEventListener("load", function (event) {
	var typed = new Typed('.text', {
		strings: ['Name : 임대현^1000\n\nBirth : 1991 / 12 / 30^1000\n\nGender : 남자^1000\n\nJob : 풀 스택을 지향하는 웹 개발자.. ^2000 `\n\n\n<div class="continue stage1"><a href="javascript:;" onclick="alert(\'업데이트 중입니다.\');" >[ Continue ]</a></div>\n\n`'],
		startDelay: 2000,
		backSpeed: 100,
		typeSpeed: 100,
		preStringTyped :function(array, self){
			playSound();
		},
		onTypingPaused : function(array, self) {
			clearInterval(interval);
			//cnt = cnt + 1;
		},
		onTypingResumed : function(array, self) {
			playSound();
			//if(cnt > 5) {
			//document.querySelector('.text').style.position = 'relative';
			//document.querySelector('.text').style.top = -1 * (60 * (cnt-5)) + 'px';
			//document.querySelector('.typed-cursor').style.position = 'relative';
			//document.querySelector('.typed-cursor').style.top = -1 * (60 * (cnt-5)) + 'px';
			//}
		},
		onStringTyped : function(array, self){
			//playSound(1200);
			clearInterval(interval);
		},
		onComplete: function(array, self){
			setTimeout(function () {
				clearInterval(interval);
				keystrokeSound.pause();
			}, 100);
		}
	});
});
