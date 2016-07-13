﻿(function(jQuery) {
	jQuery(function() { //on DOM ready
		//jQuery(".ss-banner-floating").simplyScroll();
        var time = 15000;
        var w = 0;
        jQuery(".ss-banner-floating>*").each(function(){
            w += $(this).outerWidth(true);
        });
        jQuery(".ss-banner-floating").append(jQuery(".ss-banner-floating>*").clone());
        // var transition = "transition 5s linear";
        // var transition_back = "transition 0s linear";
        // jQuery(".ss-banner-floating").css('transition',transition).css('transform','translateX(-'+w+'px)');
        // setTimeout(function(){
        //     jQuery(".ss-banner-floating").css('transition',transition_back).css('transform','translateX(0)');
        // },5000);
        var pos = 0;
        var tstart = 0
        var tend = 0;
        var klnum = time*60/1000;
        var correction = 0;
        var interval = setInterval(function(){
            var t = Date.now();
            if(t>tend){
                tstart = Date.now();
                tend = tstart + time;
            }
            var m = t - tstart;
            var kl = klnum * m/time;
            var pos = - w * kl/klnum;
            if(jQuery(".ss-banner-floating").is(':hover')){
                correction = parseInt(jQuery(".ss-banner-floating").css('left')) - pos; 
            }
            pos += correction;
            if(pos < -w){
                pos += w;
            }else if(pos > 0){
                pos -= w;
            }
            // console.log(pos);
            jQuery(".ss-banner-floating").css('left',pos + 'px');
            // console.log('step')
        },time/1000/60);
	});
})(jQuery);