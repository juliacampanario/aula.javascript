function clicou(){
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por clicar</b>";
    //console.log(documente.getElementById("agradecimento"));
    //alert("Obrigado por clicar")
}
function redirecionar (){
    window.open("https://maismulheres.tech/");
    //window.location.href = "https://maismulheres.tech/"
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";   
    elemento.innerHTML = "Passe o mouse aqui";
}
function load() {
    alert ("Pagina Carregada");
    
}
function funcaoChange(elemento) {
    console.log(elemento.value);
}

//Aula function
/*
function soma(n1, n2){
    return n1 + n2;
}
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

alert(soma(5, 10));
*/

// Aula date
//var d = new Date();
//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());


// Aula Laços de repetição - condicionais
/*var count;
for(count=0; count <= 5; count++){
    alert(count);
};*/
/*
var count = 0;
while (count <= 5){
    console.log(count)
    count++;
};
*/
/*
var idade = prompt("Qual a sua idade?")
if (idade >= 18){
alert("Maior de idade");
}else {
    alert("Menor de idade")
};
*/


//Aula Dicionário
/*var frutas = [{nome:"Maçã", cor:"Vermelha"},{nome:"Uva", cor:"Roxa"}]
console.log(frutas)
alert(frutas[1].nome)

var fruta = {nome:"Maçã", cor:"Vermelha"};
console.log(fruta.nome)
alert(fruta.cor)
*/


//Aula Array
//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//alert(lista);
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" * "))


//Aula introdução ao JavaScript
//var nome = "Julia Campanário"
//var idade = 22;
//var idade2 = 23;
//var frase = "Japão é o melhor time do mundo";
//alert (nome + " tem " + idade + " anos");
//console.log(nome);
//console.log(idade + idade2) 
//console.log (frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão","Brasil"));