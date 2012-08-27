$(document).ready(function() {
	$( "#accordion" ).accordion(
	  {
	    navigation: true,
	    autoHeight: false,
	});

  $(".head").click(function(event){
	  window.location.hash=this.hash;
  });
 
  $('.header').click(function() {
   var href = $(this).attr('href') || "";
   $(this).addClass('current-page');
   var counter = 0;
   $('#headerlist li a').each(function(){
     if($(this).attr('href') != href){
       $(this).removeClass('current-page');
     }else{
       $( "#accordion" ).accordion( "option", "active", counter );
     }
     counter = counter + 1;
   });
  });
 
 $('.head').click(function() { 
  var href = $(this).attr('href') || "";
   $('#headerlist li a').each(function(){
     if($(this).attr('href') != href || $(this).attr('href') != ""){
       $(this).removeClass('current-page');
     }else{
       $(this).addClass('current-page');
     }
   });
  
 });
});

function secureEmail () {
  var x="function f(x){var i,o=\"\",ol=x.length,l=ol;while(x.charCodeAt(l/13)!" +
  "=49){try{x+=x;l+=l;}catch(e){}}for(i=l-1;i>=0;i--){o+=x.charAt(i);}return o" +
  ".substr(0,ol);}f(\")221,\\\"MEOZPO120\\\\@R000\\\\300\\\\010\\\\D010\\\\330" +
  "\\\\220\\\\420\\\\000\\\\320\\\\410\\\\220\\\\030\\\\220\\\\+2(3+230\\\\-;6" +
  "\\\"\\\\;;0ls410\\\\\\\"\\\\!.b*9<:\\\"\\\\1*4:05,JQM|OYXLYYV610\\\\\\\\\\\\"+
  "F]YNC710\\\\p620\\\\LLZO600\\\\D030\\\\M~S|!n2 /++):/$\\\"\\\\>&!)1~1.#dems" +
  "ows-voe320\\\\010\\\\730\\\\420\\\\630\\\\\\\"(f};o nruter};))++y(^)i(tAedo" +
  "Crahc.x(edoCrahCmorf.gnirtS=+o;721=%y;2=*y))y+221(>i(fi{)++i;l<i;0=i(rof;ht" +
  "gnel.x=l,\\\"\\\"=o,i rav{)y,x(f noitcnuf\")"                                ;
  while(x=eval(x));
}



