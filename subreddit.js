$( document ).ready(function() {
  $('#view').click(function(){
    $('#posts').slideToggle("slow");
  });
});

$('#login').click(function(){
  $.post("http://www.reddit.com/api/login?api_type=json&passwd="+password+"&user="+username)
});

$('#latest').click(function(){
        var counter = 0;
        $.each(list_array, function(i, item){
          if ( i < 20 ) return;
          $("#posts").append( '<div class="indv-post" id="number'+ counter+'">' + '<button id="move-up" type="button">' + 'Move Up' + '</button>' + '<button id="move-down" type="button">' + 'Move Down' + '</button>' +
            '<ul>' + '<li>' + item.data.title + '</li>' + item.data.url  + '</li>' + '<li>' + item.data.permalink + '</li>' + '</ul>' + 
                    '<div class="vote-up-div">' + '<button id="voteup" type="button">' + 'Vote up!' + '</button>' + '<div class="counter" id="voteup">' + '</div>' + 
                  '</div>' + '<div class="vote-down-div"> '+ '<button id="votedown" type="button">' + 'Vote down!'  + '</button>' +
              '<div class="counter" id="countdown">' + '</div>' + '</div>' +
            '</div>');
          counter++;
        });
      });
 


$(document).on("click", ".vote-up-div", function(){
  $(this).find('.counter').html(function(i, val) { return +val+1 }
    );
});

$(document).on("click", ".vote-down-div", function(){
  $(this).find('.counter').html(function(i, val) { return +val-1 }
    );
});



$(document).on("click", "#move-up", function(){
  $(this).parent('.indv-post').insertBefore($(this).parent('.indv-post').prev());
});

$(document).on("click", "#move-down", function(){
  $(this).parent('.indv-post').insertAfter($(this).parent('.indv-post').next());
});