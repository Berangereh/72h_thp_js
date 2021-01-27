const PageDetail = (argument) => {
    const preparePage = () => {
      const cleanedArgument = argument.replace(/\s+/g, "-");
  
  
      const fetchGame = (url, argument) => {
        let finalURL = url + argument;
  
        fetch(`${finalURL}`)
          .then((response) => response.json())
          .then((response) => {
            let { name, released, description, rating, ratings_count, developer, tags } = response;
  
            let articleDOM = document.querySelector(".page-detail .article");
  
            articleDOM.querySelector("h1.title").innerHTML = name;
            articleDOM.querySelector("p.release-date span").innerHTML = released;
            articleDOM.querySelector("p.description").innerHTML = description;
            articleDOM.querySelector("p.rating span").innerHTML = rating;
            articleDOM.querySelector("p.ratings_count span").innerHTML = ratings_count;
            articleDOM.querySelector("p.developer").innerHTML = developer;
            articleDOM.querySelector("p.tags").innerHTML = tags;




          });
      };
  
      fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-detail container">
          <div class="article">
            <h1 class="title"></h1>
            <p class="rating"><span></span> / 5</p>
            <p class="ratings_count"><span></span> votes</p>
            <h3>Plot</h3>
            <p class="description"></p>
            <h3>Gameplay</h3>
            <p class="release-date">Release date : <span></span></p>
            <h3>Developer</h3>
            <p class="developer"></p>
            <h3>Plateforms</h3>
            <h3>Publisher</h3>
            <h3>Genre</h3>
            <h3>Tags</h3>
            <p class="tags"></p>
            
          </div>
        </section>
      `;
  
      preparePage();
    };
  
    render();
  };

  export {PageDetail};