$("ul").on("click","li",function(){
	
	$(this).toggleClass("completed");
}
);
//This is to temove the todos
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	event.stopPropagation();
});
//To Add the todos
$("input[type='text']").keypress(function(event){
if(event.which===13)
{
	var text=$(this).val();
	$(this).val("");
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ text +"</li>");
}
}
)
$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();
})
