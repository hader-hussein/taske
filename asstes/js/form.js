let namEeer = document.getElementById('nam-error');
let namEmail = document.getElementById('email-error');
let namPassword = document.getElementById('password-error');
let namConfirm = document.getElementById('Confirm-error');
let supmitError = document.getElementById('supmit-error');




let userName = document.querySelector("[name='Username']");
let userEmail = document.querySelector("[name='email']");
let userPass = document.querySelector("[name='password']");
let userConfirm = document.querySelector("[name='Confirm']");


function validatename(){
  let usern = document.getElementById("content-name").value;
  if(usern.value !== "" && usern.length <=15){
    namEeer.innerHTML ="name is required";
    return false;
  }
  if(!usern.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    namEeer.innerHTML ="name is required";
    return false;
  }
  namEeer.innerHTML ='<i class="fa-solid fa-check"></i>';
return true;
}
function validateemail(){

  let userEm = document.getElementById("content-email").value;
  if(userEm.value !== "" && userEm.length == 0){
    namEmail.innerHTML ="email is required";
    return false;
  }
  if(!userEm.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    namEmail.innerHTML ="email invalid";
    return false;
  }
  namEmail.innerHTML ='<i class="fa-solid fa-check"></i>';
return true;
}
function validatepassword(){
  let userpass = document.getElementById("content-pass").value;
  if(userpass.value !== "" && userpass.length == 8){
    namPassword.innerHTML ="password is required";
    return false;
  }
  if(userpass.length !== 0){
    namPassword.innerHTML ="password is required 8 degitel";
    return false;
  }
  if(!userpass.match(/^[0-9]{8}$/)){
    namPassword.innerHTML ="only digits please";
    return false;
  }
  namPassword.innerHTML ='<i class="fa-solid fa-check"></i>';
return true;
}
function validateconfirm(){
  let userpassc = document.getElementById("content-confirm").value;
  if(userpassc.value !== "" && userpassc.length == 8){
    namConfirm.innerHTML ="Confirm password is required";
    return false;
  }
  if(userpassc.length !== 0){
    namConfirm.innerHTML ="Confirm password is required 8 degitel";
    return false;
  }
  if(!userpassc.match(/^[0-9]{8}$/)){
    namConfirm.innerHTML ="only digits please";
    return false;
  }
  namConfirm.innerHTML ='<i class="fa-solid fa-check"></i>';
return true;
}


document.forms[0].onsubmit = function (eo){
  let userVield =false;
  let userEmile =false;
  let userPesword =false;
  let userConfirm=false;
  if(userName.value !== "" && userName.value.length <= 15){
    userVield = true;
  }
  if(userEmail.value !== ""){
    userEmile = true;
  }
  if(userPass.value !== ""){
    userPesword = true;
  }
  if(userConfirm.value !== ""){
    userConfirm = true;
  }
  if(userVield === false ||userEmile === false|| userPesword === false || userConfirm ==false  ){
    eo.preventDefault();

  }
}

function validateform (){
  if(!validatename( ) || validateemail()|| validatepassword()|| validateconfirm()){
    supmitError.innerHTML = "plase fix error to supmit"
  }
  
}