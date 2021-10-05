var lista = document.querySelector('.lista__itens');
var adicionarNome = document.getElementById('adicionarNome');

function limparValor(){
  adicionarNome.value='';
}

function incluirCheck(){
  var input = document.createElement('input');
  input.type = 'checkbox';
  input.classList.add('item__check');
  input.id = 'checar';
  return input;
}
function incluirTextoLinha(texto){
  var input = document.createElement('input');
  input.type = 'text';
  input.classList.add('item__nome');
  input.value = texto;
  input.readOnly = true;
  return input;
}
function incluirCancelar(){
  var input = document.createElement('button');
  input.classList.add('item__cancelar');
  input.id = 'cancelar';
  input.textContent = 'x';
  return input;
}

function adicionarItem(texto){

  var item = document.createElement('li');
  item.classList.add('lista__item');

  var check = incluirCheck();
  var inputTexto = incluirTextoLinha(texto);
  var cancelar = incluirCancelar();

  item.appendChild(check);
  item.appendChild(inputTexto);
  item.appendChild(cancelar);

  lista.appendChild(item);
}

lista.addEventListener('click',function(event){
  var clicado = event.target.id;

  if(clicado=='adicionar'){
    var adicionarNome = document.getElementById('adicionarNome');
    if(adicionarNome.value != ''){
      adicionarItem(adicionarNome.value);
      limparValor();
    }
    
  }
  else if(clicado == 'checar'){
    var linha = event.target.parentNode;
    if(linha.classList == 'lista__item'){
      linha.classList.add('item-feito')
    }
    else{
      linha.classList.remove('item-feito')
    }
    
  }
  else if(clicado == 'cancelar'){
    var linha = event.target.parentNode;
    linha.remove();
  }
});