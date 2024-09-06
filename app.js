function pesquisar() 
{
    // Função acionada ao clicar no botão de pesquisa. 
    // Busca a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // obtem o valor digitado no campo de pesquisa do HTML
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML =
        "<p>Não foi digitado nenhum argumento de pesquisa</p>"  
        return}


    campoPesquisa = campoPesquisa.toLowerCase()
    //console.log(campoPesquisa);

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = ""; 

    // Itera sobre os dados da pesquisa e cria o HTML para cada resultado.

    for (let dado of dados) 
    {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

      //  console.log(titulo);
      //  console.log(descricao);
      //  console.log(tags);
      //  console.log(titulo.includes(campoPesquisa));
      //  console.log(descricao.includes(campoPesquisa));
      //  console.log(tags.includes(campoPesquisa));

        if (
               titulo.includes(campoPesquisa) 
            || descricao.includes(campoPesquisa)
            || tags.includes(campoPesquisa)
           )
           {
            resultados += `
            <div class="item-resultado"> <h2>
                <a href="#" target="_blank">${dado.titulo}</a> </h2>
              <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais Informações</a> </div>
          `;
        }
    }

    // verifica se resultados está vazio com o argumento de pesquisa preenchido
    if (!resultados) {
        resultados = "<p>O argumento de pesquisa não existe na base.</p>"  
    }
    // Insere os resultados gerados na seção HTML.
    section.innerHTML = resultados;
  }
 

