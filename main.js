let nomeUsuario='Ana,Bárbara,Michel';
alert(nomeUsuario)

function soma (número1, número2) {
    return número1+número2;
}
console.log(soma(6,4));

function areaQuadrado (lado) {
    return lado**2;
}
console.log(areaQuadrado(6));


console.log(media(1,2,3));

let nome=parseInt(prompt('qual foi sua nota no 1°trimestre?'));
document.write(nome);
let media=function (número1,número2,número3){
    return (número1+número2+número3)/3;
}