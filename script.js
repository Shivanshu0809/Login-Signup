function myFunction(){
    let pass=document.getElementById("password");
    // var change=document.getElementsByClassName("fa-pass");

    if(pass.type=="password"){
        pass.type ="text";
    }
    else{
        pass.type="password";
    }
    
}
function myFunction2(){
    let pass2=document.getElementById("password2");
    if(pass2.type=="password"){
        pass2.type="text";
    }
    else{
        pass2.type="password";
    }

}

const loginForm=document.getElementById("sec1");
const signupForm=document.getElementById("sec2");
  function registerFun(){

    loginForm.style.display="none";
    signupForm.style.display="block";

  }
   
  function loginFun(){
    loginForm.style.display="block";
    signupForm.style.display="none";
  }