



function darkmode(){

    
    const isDarkMode= localStorage.getItem("darkmode")==="true";
   
    localStorage.setItem("darkmode",!isDarkMode);
    const element=document.body;
    element.classList.toggle("dark-mode",!isDarkMode);

    var icon = document.getElementById("dark_light_mode");

    if(document.body.classList.contains("dark-mode")){
        icon.src="../Journey/images/dark theme icon/sun.png"
      }
      else{
        icon.src="../Journey/images/dark theme icon/moon.png"
      }


   
}

function onload(){
    document.body.classList.toggle("dark-mode",localStorage.getItem("darkmode")==="true");

}