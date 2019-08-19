// MASTER TIMELINE --------------------------------------
var TL = new TimelineMax({
  repeat: 0,
  repeatDelay: 0,
  paused: false
});

TL.to("#wrapper", 0, {autoAlpha: 1});
TL.set('#bugIE, .bugIE', {rotationZ: 0.01, transformStyle:"preserve-3d", force3D:true});

TL.add([
  TweenMax.staggerFrom(["#txt1-1","#txt1-2","#txt1-3","#txt1-4"], .5, {autoAlpha: 0, scale: 1.1, ease:Power1.easeInOut}, 0.2),
]);
TL.add([
  TweenMax.staggerFrom(".arrow.t1.arrow-right", .5, { autoAlpha:0,x: -100, ease:Back.easeOut.config(0.5)}, 0.1),
  TweenMax.from("#coca-empty", .5, { autoAlpha: 0, x: -100, ease:Back.easeOut.config(0.5), delay: .3}),
], "+=.5");
TL.add([
  TweenMax.to("#coca-empty", .5, { autoAlpha: 0, x: 100, ease:Power1.easeIn}),
], "+=0.20");
TL.add([
  TweenMax.staggerFrom(".arrow.t1.arrow-left", .5, { autoAlpha:0,x: 100, ease:Back.easeOut.config(0.5)}, 0.1),
  TweenMax.from("#coca-full", .5, { autoAlpha: 0, x: 100, ease:Power1.easeInOut}),
], "+=0.20");
TL.add([
  TweenMax.staggerTo(".arrow.t1.arrow-left", .5, { autoAlpha:0,x: -100, ease:Power1.easeOut}, 0.1),
  TweenMax.staggerTo(".arrow.t1.arrow-right", .5, { delay:.1, autoAlpha:0, x: 100, ease:Power1.easeOut}, 0.1),  
]);
TL.add([
  TweenMax.to("#coca-full", .5, {  x:-320, scale: 1.5, ease:Power1.easeInOut}),
  TweenMax.from("#foto", .5, {delay: 0.3, autoAlpha: 0, ease:Power1.easeInOut}),
], "+=1.6");
TL.add([  
  TweenMax.to("#step-1, #step-2", .5, {autoAlpha: 0, ease:Power1.easeInOut,}),
  TweenMax.from('#foto', 2.5, {scale: .8, ease:Power1.easeInOut}),
]);

TL.add([
  TweenMax.to("#foto", .5, {autoAlpha: 0, ease:Power1.easeInOut}),
  TweenMax.from("#txt2-1", .5, {autoAlpha: 0, scale: 1.1, ease:Power1.easeInOut}),
  TweenMax.from("#txt2-2", .5, {autoAlpha: 0, scale: 1.1, ease:Power1.easeInOut, delay: .3}),
  TweenMax.from("#txt2-3", .5, {autoAlpha: 0, scale: 1.1, ease:Power1.easeInOut, delay: .5}),
  TweenMax.from("#txt2-4", .5, {autoAlpha: 0, scale: 1.1, ease:Power1.easeInOut, delay: .7}),
]);
TL.add([  
  TweenMax.from("#bg2", .5, {autoAlpha: 0, ease:Power1.easeInOut}),
    
  TweenMax.staggerFrom(["#txt3-1", "#txt3-2", "#txt3-3"], .5, {autoAlpha: 0, scale: 1.1, ease:Power1.easeInOut}, 0.2),

  TweenMax.from("#setaEnd0", .5, { autoAlpha: 0, x: 100, ease:Back.easeOut.config(0.5), delay: .2}),
  TweenMax.from("#setaEnd1", .5, { autoAlpha: 0, x: -100, ease:Back.easeOut.config(0.5), delay: .2}),
  TweenMax.from("#coca", .5, {autoAlpha: 0, x: -100, ease:Back.easeOut.config(0.5), delay: .3}),
  TweenMax.from("#fanta", .5, {autoAlpha: 0, x: 150, ease:Back.easeOut.config(0.5), delay: .3}),
], "+=2.1");

TL.add([
  TweenMax.from("#logo", .5, {autoAlpha: 0, scale: .8, ease:Back.easeOut.config(0.5), delay: .2}),
  TweenMax.from("#cta", .5, {autoAlpha: 0, scale: .8, ease:Back.easeOut.config(0.5), delay: .2}),
]);

console.log("Banner Duration: "+TL.totalDuration().toFixed(2));
