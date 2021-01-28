const PageList = (argument = "") => {

  let datasave = "";
  let nextpage = "";
  let count = 0;

    const preparePage = () => {
      const currentgame = "&dates=2021-01-20,2030-12-31";
      const pagesize = "&page_size=9";
        const cleanedArgument = argument.replace(/\s+/g, "-");
        let articles = "";
    
        const fetchList = (url, argument) => {

          let finalURL = "";

          if (argument == "") {
            finalURL = url + "?search=" + pagesize + currentgame;
          } else if (argument != "Next") {
            finalURL = url + "?search=" + argument + pagesize;
          } else if (argument == "Next") {
            finalURL = url;
          }
    
          fetch(`${finalURL}`)
            .then((response) => response.json())
            .then((response) => {
              datasave = response;
              console.log(datasave);
              nextpage = datasave.next;

            // let gametags = [];
            // let tagsID = [];
            //   tags.forEach((e) => {
            //     gametags += e.name + " - "
            //     tagsID += e.id
            // })

              datasave.results.forEach(game => {
                
                articles +=
                `   <div id="cardHover">
                        <a class="center" id="card" href = "#pagedetail/${game.id}">                         
                           
                          <img src="${game.background_image}" class="card-img-top img_card">                          
                          
                          <div id="hiddenCard class="card-body center" style="display: none;">
                            <p>${game.released}</p>
                            <p>${game.rating}/5 - ${game.ratings_count} votes </p>
                            <p>${game.tags}</p>
                          </div> 

                          <div id="card_title" class ="card-body">
                            <h3>${game.name}</h3>
                          </div>
                        </a> 
                    </div>`; 
                      
          document.querySelector(".page-list .articles").innerHTML = articles;

      //bouton next page

        let button = document.getElementById("buttonshowmore");

        button.innerHTML = `<button type="button" class="btn center btnShowMore">Plus de Games</button>`

        const newFetch = () => {
          count += 1;
          console.log(count);
          button.removeEventListener("click", newFetch)
          console.log(nextpage);
          fetchList(nextpage, "Next")
        }

        button.addEventListener("click", newFetch)
 
        const cardlist = document.querySelectorAll("#cardHover")
        
        cardlist.forEach((element) => {
          element.addEventListener("mouseover", () => {
            element.childNodes[1].childNodes[1].style.display="none";
            element.childNodes[1].childNodes[3].style.display="block";
          })
        })
        

        cardlist.forEach((element) => {
          element.addEventListener("mouseleave", () => {
            element.childNodes[1].childNodes[1].style.display="block";
            element.childNodes[1].childNodes[3].style.display="none";
          })
        })

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
            <div class="articles row row-cols-3">...loading</div>
            <div class="mt-3" id="buttonshowmore"></div>

          </section>
        `;
    
        preparePage();
      };
    
      render();
      
  };

  export {PageList};