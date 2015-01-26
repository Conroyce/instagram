$('.photoAdd').on("click",function(e) {
  e.preventDefault();
  var photo = $('.photoFile').val();
  var title = $('.photoTitle').val();
  var user = $('.photoUser').val();
  $('.photoUser').val('');
  $('.photoFile').val('');
  $('.photoTitle').val('');
  
  $.post("/",{photo:photo,title: title, user:user},function(data) {console.log(data);});
});