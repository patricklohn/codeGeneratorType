const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#btn-qr");
const inputValue = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qrImg-code");

/*Gerar codigos QR*/
function generateQrCode(){
    
    const qrCodeInputValue = inputValue.value;

    if(!qrCodeInputValue){
        return
    };

    qrCodeBtn.innerText = "Gerando código...";
    
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", ()=>{
        container.classList.add("active");
        qrCodeBtn.innerText = "Gerar novo QR Code";
    });
}

/*Limpar area QR code*/
function clearQrCode(){

}

// Eventos

inputValue.addEventListener("keyup", ()=>{
    if(!inputValue.value){
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR Code";
    }
})

qrCodeBtn.addEventListener("click", ()=>{
    generateQrCode();
})

document.addEventListener("keydown",(e)=>{
    if(e.key!="Enter")return;
    generateQrCode();
})

/*inputValue.addEventListener("keydown",(e)=>{
    if(e.code === "Enter"){
    generateQrCode();
    }
})*/