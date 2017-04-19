$(function(){
console.log('query running');

$.ajax({//request data from omdb on movie founder
  url: 'http://www.omdbapi.com/?t=founder',
  success: function(foo){
console.log('This is the response-->', foo);
$('body').append( '<img src="'+ foo.Poster +'">')
$('h2').prepend(foo.Title);
$('h3').prepend(foo.Actors);
$('h4').prepend(foo.Rated);
$(document).ready(function(){
    animateDiv();

});

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.4;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}
$('img').on('click', function(){

$('img').effect( "explode",'slow' );

});
// var poster = $('body').append( '<img src="'+ foo.Poster +'">')
// var title = $('h2').prepend(foo.Title);
// var actors = $('h3').prepend(foo.Actors);
// var rated = $('h4').prepend(foo.Rated);
}

})



});
