self._386 = self._386 || {
    onePass : true
};

!function () {
  var character = { height: 20, width: 12.4 };

  function scrollLock() {
    var last = 0;
    $(window).bind('scroll', function(e) {
      var func, off = window.scrollTop;

      console.log(off, last, off < last ? "up" : "down");

      // this determines whether the user is intending to go up or down.
      func = off < last ? "floor" : "ceil";

      // make sure we don't run this from ourselves
      if(off % character.height === 0) {
        return;
      }
      last = off;

      window.scrollTo(
        0,
        Math[func](off / character.height) * character.height
      );

    }); 
  }  

  function loading() {

    if(_386.fastLoad) {
      document.body.style.visibility='visible';
      return;
    }

    var
      onePass = _386.onePass,
      speedFactor = 1 / (_386.speedFactor || 1) * 165000;
      wrap = document.createElement('div'),
      
    wrap.id = "wrap386";

    document.body.appendChild(wrap);
    document.body.style.visibility='visible';

    var curtainDown  = 1;
    wrap.style.height = '100%';
    var ival = setInterval(function(){
        wrap.style.height = 100 - (curtainDown*10) + '%';
        curtainDown++;

        if(curtainDown*10 > 100) {
            clearInterval(ival);
            //console.log('done');
        }
    }, 100);
  }

  window.addEventListener("load", function (event) {
      loading();
  });
}();

