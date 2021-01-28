const PageDetail = (argument) => {
    const preparePage = () => {
      const cleanedArgument = argument.replace(/\s+/g, "-");
  
  
      const fetchGame = (url, argument) => {
        let finalURL = url + argument;
  
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            let { name, released, description, ratings_count, rating, background_image, developers, genres, tags, parent_platforms, website, clip } = response;
  
            let gametags = [];
            let tagsID = [];
              tags.forEach((e) => {
                gametags += e.name + " - "
                tagsID += e.id
            })

            let gamegenres = "";
          let genreID = [];
          genres.forEach((e) => {
            gamegenres += e.name + " "
            genreID += e.id
          })
            
          let articleDOM = document.querySelector(".page-detail .article");
  
          articleDOM.querySelector("#detailtitle").innerHTML = name;
          articleDOM.querySelector("#detaildate").innerHTML = released;
          articleDOM.querySelector("#rating span").innerHTML = rating;
          articleDOM.querySelector("#ratings_count span").innerHTML = ratings_count;

          articleDOM.querySelector("#jumbo").style.backgroundImage= `url('${background_image}')`;
          //articleDOM.querySelector("#detailplatformlogo").innerHTML = detailplatformlist; 
          articleDOM.querySelector("#detailwebsite").href = `"${website}"`;
          articleDOM.querySelector("#detailgenres").innerHTML = gamegenres;
          articleDOM.querySelector("#detailtags").innerHTML = gametags;
          articleDOM.querySelector("#detailvideo").src = `https://www.youtube.com/embed/${clip.video}`;
          articleDOM.querySelector("#detaildescription").innerHTML = description;
          articleDOM.querySelector("#detaildevelopers").innerHTML = devname;
         });
      };
  
      fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
      <section class="page-detail">
      <a class="btn btn-light mb-5" href="#pagelist">Voir les autres jeux</a>
        <div class="article">
          <div id="jumbo" class="jumbotron jumbotron-fluid">
            <a id="detailwebsite" class="btn btnWebsite mt-4 ml-4">Check website</a>
          </div>
          <div class="container">
            <h1 id="detailtitle" class="title"></h1>
            <p id="rating" class="highlight"><span></span> / 5</p>
            <p id="ratings_count" class="highlight"><span></span> votes</p>
            <p id="detailplatformlogo"></p>
            
          </div>
          
          <div class="container">
            <h1>Trailer</h1>
            <iframe id="detailvideo" width="420" height="315"></iframe>
            <h1>Description</h1>
            <p id="detaildescription" class="description"></p>
            <h4>Release date</h4>
            <p class="release-date lead"><span id="detaildate"></span></p>
            <h4>Developer</h4>
            <p id="detaildevelopers"></p>
            <h4>Genres</h4>
            <p id="detailgenres"></p>
            <h4>Tags</h4>
            <p id="detailtags"></p>
          </div>
        </div>
      </section>
      `;
  
      preparePage();
    };
  
    render();
  };

  export {PageDetail};