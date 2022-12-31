function calcular(){
    var resul = document.getElementById('result').innerHTML;
    if(resul)
    {
       
        document.getElementById('result').innerHTML = eval(resul);
    }
    else
    {
        alert('Sem numeros para calcular')
    }
}
function digitar(botao){
   var numero = document.getElementById('result').innerHTML; 
   document.getElementById('result').innerHTML = numero + botao;
  
}
function restaurar(){
    document.getElementById('result').innerHTML = "";
}
function voltar(){
        var resul = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = resul.substring(0, resul.length-1);
}