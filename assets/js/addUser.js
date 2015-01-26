$('.newSubmit').on("click",function(e) {
  e.preventDefault();
  var name = $('.newName').val();
  var email = $('.newEmail').val();
  $('.newName').val("");
  $(".newEmail").val("");
  $.post("/",{name:name,email:email},function(data) {console.log(data);});
});