let smenuclass = document.getElementsByClassName("smenuclass");

function menuUp(){
    console.log("Clicked");
    if(smenuclass[0].style.margin=="0.2cm")
    {
        smenuclass[0].style.margin="46% 0% 46% 0%";
    }
    
    else
    {
        smenuclass[0].style.margin="0.2cm"
    }
}

// if (event.ctrlKey){
//     smenuclass[0].style.margin="0.2cm"
// }