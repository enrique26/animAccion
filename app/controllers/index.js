var matris2d = Ti.UI.create2DMatrix({
	rotate : 20,
	scale : 1.5,
});

var amin = Ti.UI.createAnimation({
	transform : matris2d,
	duration : 3000,
	autoreverse : false,
	repeat : 1,

});


$.primerCon.addEventListener('swipe', function(e) {
	$.primerCon.animate(amin);
});

// if is iphone
var selectIndex=0;
$.index.addEventListener('swipe',function(e){
	if(selectIndex%2 == 0){
		$.index.animate({
			view:$.segundoCon,
			transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
			
		});
	}else{
		$.index.animate({
			view:$.primerCon,
			transition:Ti.UI.iPhone.AnimationStyle.CURL_DOWN
		});
	}
	selectIndex++;
});

// android no soporta matrices de 3 dimensiones
// $.primerCon.addEventListener('click',function(){
	// var t1= Ti.UI.create3DMatrix();
	// //con rotate, la animacion ocurre junto con la rotacion
	// t1 = t1.rotate(90,100,200,50);
	// t1.m23 = 10/12;
	// var a1 = Titanium.UI.createAnimation();
	// a1.transform = t1;
	// a1.duration = 500;
	// a1.autoreverse=true;
	// var a2=Ti.UI.createAnimation({
		// visible:false,
		// duration:3000,
	// });
// 	
	// var a3=Ti.UI.createAnimation({
		// visible:true,
		// top:40,
		// opacity:1.0,
		// duration:800
	// });
// 	
	// $.index.animate(a1);
	// $.primerCon.animate(a2);
	// $.segundoCon.animate(a3);
// });

$.index.open();
