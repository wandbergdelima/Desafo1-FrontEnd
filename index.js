const url = "https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook";

const botaoBuscar = document.getElementById('botao');
botaoBuscar.addEventListener('click', buscaDados);
const textoAPI = document.getElementById('valor');

function buscaDados() {
  valorTextoApi = textoAPI.value;
  consumiuApi(valorTextoApi);
}

function consumiuApi(value) {
  axios.get(url)
    .then((response) => {
      // const mostrarSugestoes = response.data.suggestions;
      const mostrarProdutos = response.data.products;
      mostrarProdutos.forEach(element => {
        if (element.name.includes(value)) {
          mostrar.appendChild(document.createTextNode(JSON.stringify(element)));
          console.log(element.name);
        } else {
          console.log('Não encontrado');
          mostrar.textcontent = 'Não encontrado';
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

// mostrarSugestoes.forEach(element => {
//   if (value == element.name) {
//     mostrar2.textContent = JSON.stringify(element);
//     console.log(element.name);
//   }
// });
// } else {
// mostrar.textContent = JSON.stringify(mostrarProdutos);
// mostrar2.textContent = JSON.stringify(mostrarSugestoes);