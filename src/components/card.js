import axios from "axios"



const Card = (article) => {
  const card = document.createElement('card');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const span = document.createElement('span');
  const id = document.createElement('id');
 
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  id.classList.add(article.id)

  img.src = article.authorPhoto;

  headline.textContent = article.headline;
  span.textContent = `By ${article.authorName}`;
 
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(span);
  card.appendChild(id);
  
  card.addEventListener('click', () => {
   console.log(headline);
  })
  //! return 
  return card;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    const select = document.querySelector(selector);
     const arrayArticles = res.data.articles;
    const javascript = arrayArticles.javascript;
    const bootstrap = arrayArticles.bootstrap;
    const technology = arrayArticles.technology;
    const jquery = arrayArticles.jquery;
    const node = arrayArticles.node;

    const take = document.querySelector('.cards-container');
    console.log(take)
    
    javascript.forEach(item =>{
      item.id =('javascript');
      select.appendChild(Card(item))

    })
    bootstrap.forEach(item =>{
      item.id =('bootstrap');
      select.appendChild(Card(item))
    })
    technology.forEach(item =>{
      item.id =('technology');
      select.appendChild(Card(item))
    })
    jquery.forEach(item =>{
      item.id =('jquery');
      select.appendChild(Card(item))
    })
    node.forEach(item =>{
      item.id =('node');
      select.appendChild(Card(item))
    })
  })
  .catch(err =>{
    console.log(err);
  })

  }
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }