!function () {
  function loading() {

    wrap = document.createElement('div'),
    wrap.id = "wrap386";

    document.body.appendChild(wrap);
    document.body.style.visibility='visible';

    var curtainDown  = 5;
    wrap.style.height = '100%';
    var ival = setInterval(function(){
        wrap.style.height = 100 - curtainDown + '%';
        curtainDown = curtainDown + 5;

        if(curtainDown > 100) {
            wrap.parentNode.removeChild(wrap);
            clearInterval(ival);
            //console.log('done');
        }
    }, 100);
  }

  window.addEventListener("load", function (event) {
      loading();
  });
}();

