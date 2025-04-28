document.addEventListener('DOMcontentloaded',function(){
const aumentaFonteBotao= document.getElementByid('aumentar-fonte');
const diminuiFonteBotao= document.getElementById('diminuir-fonte');
let tamanhoAtualfonte = 1;

aumentaFonteBotao.addEventListener('click', function(){
tamanhoAtualfonte += 0,1
document.body.style.fontSize='${tamanhoAtualfonte}rem'
})


})