
function generateRandomString(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
    }
    return result;
}

function captchainput(){
    var captchatext=document.getElementById("captcha")
    var returnvalue=generateRandomString(5)
    captchatext.textContent=returnvalue
    
}

function verifyCaptcha(){
    var captchtext=document.getElementById("captcha").textContent
    var captchainput=document.getElementById("captchaInput").value

    if(captchainput===captchtext){
        alert("Success")
    }
    else{
        alert("Please enter the CAPTCHA")
    }
}

window.onload=function(){
    captchainput()
}



// function captchainput(){
//     var captcha=document.getElementById("captcha")
//     captcha.textContent=captchacode(5)
// }

// function captchacode(length){
//     var letter="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     var captchaletter=''
//     for(i=0;i<length;i++){
//          captchaletter+=letter.charAt(Math.floor(Math.random()*letter.length))    
//     }
//     return captchaletter;
// }

// function verifyCaptcha(){
//     var captchaInput=document.getElementById("captchaInput").value
//     var captcha=document.getElementById("captcha").textContent
//     if(captcha===captchaInput){
//         console.log("success")
//     }
//     else{
//         console.log("no")
//     }
// }

// window.onload=function(){
//     captchainput()
// }
