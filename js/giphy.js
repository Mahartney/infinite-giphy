$(document).ready(function(){
  $("#search").on("submit", gif_load)
})

$(window).scroll(function(){
  if($(window).scrollTop() == $(document).height() - $(window).height()) {
      gif_load();
      };
});

var gif_load = function(event){
  if (typeof event !== 'undefined'){
  event.preventDefault();
  $('.gifs').empty()
}
  var pubkey = "&api_key=dc6zaTOxFJmzC"
  var search_for = $('#keyword').val();
  var url = "http://api.giphy.com/v1/gifs/search?q="
  $.ajax({
    url: url + search_for + pubkey + "&limit=10",
    type: "get",
    dataType: "json",
  }).done(function(response){
    for (i=0; i<response.data.length; i++) {
    $('.gifs').append("<iframe src='"+response.data[i].embed_url+"'>")
  }
    console.log(response)
  }).fail(function(){
    console.log("Ajax request fails!")
  }).always(function(){
    console.log("This always happens regardless of successful ajax request or not.")
  })
}
