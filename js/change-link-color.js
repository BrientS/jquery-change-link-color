(function($){
$.fn.changelinkcolor = function(options){
var defaults = {
color : "red",
textDecoration : "none"

}


 if(options){ $.extend(defaults,options) }

 return $("a").css("color",defaults.color).css("text-decoration",defaults.textDecoration);
 

}



}) (jQuery);