$(document).ready(function() {
  $('#media').carousel({
    pause: true,
    interval: false,
  });
});


function esend(){
  alert(1);
  var template_params = {
   "reply_to": "reply_to_value",
   "name": "name_value",
   "phone": "phone_value",
   "mail": "mail_value",
   "coment": "coment_value"
}

var service_id = "default_service";
var template_id = "template_ZF7P3JFp";
emailjs.send(service_id,template_id,template_params);
}
