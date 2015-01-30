// $('.photoAdd').on("click",function(e) {
//   e.preventDefault();
//   var photo = $('.photoFile').val();
//   var title = $('.photoTitle').val();
//   var id = $('.photoId').val();
//   $('.photoId').val('');
//   $('.photoFile').val('');
//   $('.photoTitle').val('');
  
//   $.post("/"+id+"/photos  ",{photo:photo,title: title},function(data) {console.log(data);});
// });