function sendEmail (){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "demon.fabien.pro@gmail.com",
        Password : "Fabionicuss",
        To : "demon.fabien.pro@gmail.com",
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Firstname :" + document.getElementById("firstname").value +"\t"+
            "Lastname :" + document.getElementById("lastname")+"\n"+
            "email :" + document.getElementById("email").value +"\n"+
            "Subject :" + document.getElementById("subject").value +"\n"+
            "Message :" + document.getElementById("message").value
    }).then(
        message => alert("Message Send Successfully")
    );
}
