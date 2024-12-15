
function getTicket (form) {
    let formData = new FormData(form);
    let object = {};
    formData.forEach(function(value, key){
      object[key] = value;
    });
    alert(object.username + " registered ticket for " + object.movies + " at " + object.date);
    
    alert("Your ticket ID and receipt will be send to the email " + object.email)
    
}

