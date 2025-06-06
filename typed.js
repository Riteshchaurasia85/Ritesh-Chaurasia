var typed = new Typed(".developer",{
    strings: ["Frontend Developer.", "Backend Developer.","Java Developer.","C++ Developer." ,"Full-Stack Developer."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector("ul");

 hamburger.addEventListener("click", ()=>{
    ul.classList.toggle("show-icon");

     if(ul.className == "show-icon"){
        document.getElementById("bar").className = "ri-close-fill";
     } 
     else{
        document.getElementById("bar").className = "ri-menu-line";
        
     }

 })
  
  function sendmail(){
   let perms = {
      name : document.getElementById("name").Value,
      email : document.getElementById("email").Value,
      subject : document.getElementById("subject").Value,
      message : document.getElementById("message").Value,
   }

   emailjs.send("service_fxvehxr", "template_aspbgu5",parms).then(alert("Email sent!!"));
  }
    
  
