const PageList = (argument = "") => {
    const preparePage = () => {
        cleanedArgument = argument.replace(/\s+/g, "-");
        let articles = "";
    
        const fetchList = (url, argument) => {
          let finalURL = url;
          if (argument) {
            finalURL = url + "?search=" + argument;
          }
    
          fetch(`${finalURL}`)
            .then((response) => response.json())
            .then((response) => {
              response.results.forEach(game => {
                
                articles +=
                `   <div id="cardHover" class="container">
                        <div class="cardGame card inline-poster" id="card">                         
                            <img src="${game.background_image}" class="card-img-top">
                            <div class ="card-body">
                                <h1 class ="card-text">${game.name}</h1>                                
                                <a href = "#pagedetail/${game.id}" class ="card-text">${game.id}</a>
                            </div>
                        </div>  
                    </div>`;   

            
                      
            document.querySelector(".page-list .articles").innerHTML = articles;

            const mouseTarget = document.getElementById("cardHover");
            const contentCard = document.getElementById("card");
        
            mouseTarget.addEventListener('mouseenter', e => {
                
                document.getElementById(`card`).innerHTML = `
                <h3>${game.released}</h3>
                <h3>${game.rating}/5 - ${game.ratings_count} votes </h3>
                <h4>${game.tags[0].name}</h4> 
                ` ;
                //rajouter une boucle pour avoir tous les tags
                });

            mouseTarget.addEventListener('mouseleave', e => {
                document.querySelector(".page-list .articles").innerHTML = articles;
            });

        });
        
    });
        };
    
        fetchList("https://api.rawg.io/api/games", cleanedArgument);
      };
    
      const render = () => {
        pageContent.innerHTML = `
          <section class="page-list">
            <div class="articles">...loading</div>
          </section>
        `;
    
        preparePage();
      };
    
      render();
  };