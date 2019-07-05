(function(root) {

    window.URL = window.URL || window.webkitURL || window.mozURL;

    function disableSmoothRendering(ctx) {
        ctx.webkitImageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;
        return ctx;
    }

    function Pixelate(image, opts) {
        opts = opts || {};
        this.image = image;
        this.setAmount(opts.amount);

        var imageLoaded = function() {
            this.imageUrl = image.src;
            this.width = image.clientWidth;
            this.height = image.clientHeight;

            this.canvas = document.createElement('canvas');
            this.canvas.style.display = 'none';
            this.canvas.width = this.width;
            this.canvas.height = this.height;

            this.canvas.style.cssText = 'image-rendering: optimizeSpeed;' + // FireFox < 6.0
                'image-rendering: -moz-crisp-edges;' + // FireFox
                'image-rendering: -o-crisp-edges;' +  // Opera
                'image-rendering: -webkit-crisp-edges;' + // Chrome
                'image-rendering: crisp-edges;' + // Chrome
                'image-rendering: -webkit-optimize-contrast;' + // Safari
                'image-rendering: pixelated; ' + // Future browsers
                '-ms-interpolation-mode: nearest-neighbor;'; // IE

            this.ctx = this.canvas.getContext('2d');
            this.ctx = disableSmoothRendering(this.ctx);

            this.image.parentNode.appendChild(this.canvas, this.image);
            this.image.onload = null;

            this.pixelImage = new Image();
            this.pixelImage.onload = function() {
                this.ready = true;
                this.render();
            }.bind(this);
            this.pixelImage.src = this.imageUrl;
        }.bind(this);

        if (this.image.complete) {
            imageLoaded();
        }

        this.image.onload = imageLoaded;

        return this;
    }

    Pixelate.prototype.setAmount = function(amount) {
        this.amount = 1 - (amount || 0);
        return this;
    };

    Pixelate.prototype.setWidth = function(width) {
        var height = (this.height / this.width) * width;
        this.width = width;
        this.height = height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.ctx = disableSmoothRendering(this.ctx);
        return this;
    };

    Pixelate.prototype.render = function() {
        if (!this.ready) return this;
        var w = this.width * (this.amount <= 0 ? 0.01 : this.amount);
        var h = this.height * (this.amount <= 0 ? 0.01 : this.amount);
        // render smaller image
        this.ctx.drawImage(this.pixelImage, 0, 0, w, h);
        // stretch the smaller image
        this.ctx.drawImage(this.canvas, 0, 0, w, h, 0, 0, this.width, this.height);
        this.image.src = this.canvas.toDataURL('image/png');
        return this;
    };

    if (typeof exports !== 'undefined') {
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Pixelate;
        }
        exports.pixelate = Pixelate;
    } else if (typeof define === 'function' && define.amd) {
        define([], function() {
            return Pixelate;
        });
    } else {
        root.Pixelate = Pixelate;
    }

})(this);

function easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
}

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

var marquee = document.querySelector('.banner').getBoundingClientRect().width - 17;

document.querySelector('.banner.second').style.left = marquee+"px";
style.innerHTML = keyFrames.replace(/LEFT_POSITION/g, -marquee+"px");
document.getElementsByTagName('head')[0].appendChild(style);

// var maingImg = document.querySelector('.main img');
// var pixelate = new Pixelate(maingImg);

document.addEventListener("ready", function (event) {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

window.addEventListener("load", function (event) {
    /*
    !(function () {
        var pixelCnt = 0;

        pixelate.setAmount((100 - easeInOutQuad(pixelCnt, 0, 100, 15)) / 100).render();

        setTimeout(function () {
            var pixelation = setInterval(function () {
                pixelCnt = pixelCnt + 1;
                pixelate.setAmount((100 - easeInOutQuad(pixelCnt, 0, 100, 15)) / 100).render();

                // console.log(pixelCnt);
                if (pixelCnt >= 15) {
                    pixelate.setAmount(0).render();
                    clearInterval(pixelation);
                }
            }, 33);
        }, 2000);
    })();
    */
});

AOS.init();
