
$(function () {
  $('#view').click(function(){
    $('#posts').slideToggle("slow");
  });


  $('#latest').click(function(){
        $.getJSON("http://www.reddit.com/r/technology/new/.json?jsonp=?",function(data){
          $.each(data.data.children, function(i, item){
            if ( i < 20 ) return;
            $("#posts").append( '<div class="indv-post">' + '<ul>' + '<li>' + item.data.title + '</li>'
              + item.data.url  + '</li>' + '<li>' + item.data.permalink + '</li>' + '</ul>' + 
              '<div class="vote-up-div">' + '<button class="voteup" type="button">' + 'Vote up!' + '</button>' + '<div class="counter" id="countup">' + '</div>' + '</div>' + '<div class="vote-down-div"> '+ '<button class="vote" id="down" type="button">' + 'Vote down!'  + '</button>' +
              '<div class="counter" id="countdown">' + '</div>' + '</div>' +
              '</div>');
          });
        });
      });
      
   $(".vote-up-div").on("click",function() {
       $('this').find('.counter').html(function(i, val) { return +val+1 });
   });
   $(".vote-down-div").on("click",function() {
       $('this').find('.counter').html(function(i, val) { return +val+1 });
   });

 });

