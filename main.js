// let contacts = [];

var myname= document.getElementById("myname").innerText;
var email= document.getElementById("email").value
var phone=document.getElementById("phone").value;
var description = document.getElementById("description").value;
var theForm= document.getElementById("theForm");

theForm.addEventListener("click", function(e){
    e.preventDefault();
});

function Process() {
    //no need for validation

    
}
function displayContacts(e) {
    
    console.log(myname);
    console.log(email);
    console.log(phone);
    console.log(description);
    
}
// alert('working!');
