$('.escribe').bind('keyup', function (e) {
  var key = e.keyCode || e.which;
  if (key === 13) {
    var inputBox = $(".escribe").val();
    if (inputBox!== "") {
      doTweet(inputBox);
      $(".pane-body").scrollTop(500) ;
      clear();
    }
  };
});

function time(){
	var tiempo = new Date();
	var h = tiempo.getHours();
	var m = tiempo.getMinutes();
	var hora= h+":"+m;
	return hora
}
function doTweet(inputBox){
  gian[data].chat.push(inputBox)
	var hora_actual=time();
    $('.pane-body').append('<div class="total-i"><div class="msg-i"><div class="message-i"><div class="bubble-i"><div class="message-text-i t-right"><span>'+inputBox+'</span></div><div class"time-chat t-right"><span class="time-i text-right">'+hora_actual+'</span></div></div></div></div></div></div>')
    $('.'+data).html(inputBox);
    $('#time'+data).html(hora_actual);
}   
function clear() {
	var inputBox = document.getElementById("escribe");
	inputBox.value = "";
	inputBox.focus();
}
var data=0;
$(".contact").click(function(){
 	data=$(this).attr("data")
  var src="image/"+contact[data].img;
	$("#avatar").attr("src",src);
  var name=contact[data].name;
  $("#chat-title").html(name);
  var hora_actual=time();
  if(data==0){
    $("#chat-status").html("Ana María, Aldo, Gian, Mariana,Papu, Tú");
  } else{
    $("#chat-status").html("últ, vez hoy "+hora_actual);
  }
  $(".pane-chat-msgs").empty();
  $(".pane-body").append('<div class"pane-chat-msgs"></div>');
  var avatar=$("#chat-title").text();
  for(i in gian){
    if(avatar==gian[i].name){
      for(a in gian[i].chat){
        var chat= gian[i].chat[a]
        $(".pane-chat-msgs").append('<div class="total-i"><div class="msg-i"><div class="message-i"><div class="bubble-i"><div class="message-text-i t-right"><span>'+chat+'</span></div><div class"time-chat t-right"><span class="time-i text-right">'+hora_actual+'</span></div></div></div></div></div></div>')
      }
    }
  }

  // for(a in gian[data].chat){
  //   var chat= gian[data].chat[a]
  //   $(".pane-chat-msgs"+data).append('<div class="total-i"><div class="msg-i"><div class="message-i"><div class="bubble-i"><div class="message-text-i t-right"><span>'+chat+'</span></div><div class"time-chat t-right"><span class="time-i text-right">'+hora_actual+'</span></div></div></div></div></div></div>')
  // }
});

$('.search-escribe').keypress(function() {
  if (event.which==13) {
    var tarjetas = $(".chat-title");
    var contacto=$(".contact")
    var texto    = $(".search-escribe").val();
    texto        = texto.toLowerCase();
    tarjetas.show();
    var j=0;
    for(var i=0; i<= tarjetas.size(); i++){
      var contenido = tarjetas.eq(i).text();
      contenido     = contenido.toLowerCase();
      var index     = contenido.indexOf(texto);
        if(index == -1){
          contacto.eq(i).hide();
        }else if(index==0 && j==0){
          j++;
          data=$("#"+i).attr("data")
          var src="image/"+contact[data].img;
          $("#avatar").attr("src",src);
          var name=contact[data].name;
          $("#chat-title").html(name);
        }
      }
    $(".pane-chat-msgs").empty();
    // var inputBox = document.getElementById("search");
    // inputBox.value = "";
    // inputBox.focus();
  }
  clear();
});

$('.search-escribe').keypress(function() {

  if($('.search-escribe').val() === "" && event.which==13 ){
    $('.contact').addClass("visible")
  }
});

function clear(){
  if($('.search-escribe').val() === "" && event.which==13){
    $('.contact').addClass("visible")
  }
};


