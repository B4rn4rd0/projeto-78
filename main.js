var imagens = ["pai.png","mae.jpg","filho.jpg"];
var nomes = ["Eber","Patrícia","Bernardo"];
var i = 0;
function atualizar(){
    var membros = 2;
    if(i>2){
        i = 0;
    }
    var atualizarImg = imagens[i];
    var atualizarNome = nomes[i];
    i++;
    document.getElementById("img").src = atualizarImg;
    document.getElementById("nome").innerHTML = atualizarNome;
}