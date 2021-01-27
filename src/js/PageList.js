

const PageList = (argument = "") => {

  

  let datasave = "";
  console.log("Page List", argument);

    const preparePage = () => {
      const pagesize = "&page_size=9";

        const cleanedArgument = argument.replace(/\s+/g, "-");
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
                        <div class="cardGame card inline-poster center" id="card">                         
                          <div id="card_img">  
                            <img src="${game.background_image}" class="card-img-top">
                          </div>  
                          <div class ="card-body">
                                <a href = "#pagedetail/${game.id}" class ="h1 card-text">${game.name}</a>
                            </div>
                        </div>  
                    </div>`; 
                      
            document.querySelector(".page-list .articles").innerHTML = articles;

            const mouseTarget = document.getElementById("card_img");
            const contentCard = document.getElementById("card");

        
            mouseTarget.addEventListener('mouseenter', e => {

              mouseTarget.innerHTML =
                `<h3>${game.released}</h3>
                <h3>${game.rating}/5 - ${game.ratings_count} votes </h3>
                <h4>${game.tags[0].name}</h4> 
                ` ;
                console.log('mouse enter!');
                });

                mouseTarget.addEventListener('mouseleave', e => {
                  mouseTarget.innerHTML = articles;
                  //document.querySelector(".page-list .articles").innerHTML = articles;
            });

        });
        
    });
    


        };
        
    
        fetchList("https://api.rawg.io/api/games", cleanedArgument + pagesize);
      };

      

      
    
      const render = () => {
        pageContent.innerHTML = `
          <section class="page-list ">
            <h1>Welcome,</h1>
            <p>The hype Program is so cool! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div class="articles">...loading</div>
          </section>
        `;
    
        preparePage();
      };
    
      render();

      
  };

  let btnshowmore = document.createElement("div");
  btnshowmore.innerHTML= `
  <button type="button" class="btn btn-outline-light" id="btnshowmore">Plus de jeux</button>
  `;
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(btnshowmore);



  export {PageList};