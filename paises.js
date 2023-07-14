function buscaPaises () {
    var url = "https://restcountries.com/v3.1/all";

    fetch(url)
    .then(data => data.json())
    .then(paises => {
        console.log(paises);
        var html = "";

        for (let i = 0; i < paises.length; i++) {
            const pais = paises[i];
            
            let card_padrao = `    
        <div class="col-4 mb-2">
        <div class="card" style="width: 18rem;">
            <img src="${pais.flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${pais.name.common}</h5>
              <p class="card-text">Continente: ${pais.continents[0]}</p>
            </div>
          </div>
          </div>
            
            
            `;

            html += card_padrao
        }
        
        document.getElementById('linha').innerHTML = html;
    })
    
}

function pesquisarPaises() {
    var input = document.getElementById("pesquisa").value.toLowerCase();
    var cards = document.getElementsByClassName("card");
    var resultados = [];
  
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      var countryName = card.getElementsByClassName("card-title")[0].textContent.toLowerCase();
      if (countryName.includes(input)) {
        resultados.push(card);
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    }
  
    var container = document.getElementById("container");
    for (let i = 0; i < resultados.length; i++) {
      container.insertBefore(resultados[i], container.firstChild);
    }
  }
  
  buscaPaises();
  