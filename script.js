$(document).ready(function(){

  $( 'div').hover(
    function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    }
  );

  $('.button').click(
  	function(){
  		$(this).fadeTo("slow", 0.2);
  	}
  );

  $('.halfButton').click(
  	function(){
  		$(this).fadeTo("slow", 0.2);
  	}
  );

});
