const Header = (title, date, temp) => {
  
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const topDiv = document.createElement('div');
  const day = document.createElement('span');
  const label = document.createElement('h1');
  const degrees = document.createElement('span');

  topDiv.appendChild(day);
  topDiv.appendChild(label);
  topDiv.appendChild(degrees);

  date.textContent = `${date}`
  title.textContent = `${$title}`
  temp.textContent = `${temp}`

}



const headerAppender = (selector) => {

  const holder = document.querySelector('.header-container');
    holder.appendChild(Header('George', '2-12', '54'))
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
