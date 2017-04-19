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

}
});



});
