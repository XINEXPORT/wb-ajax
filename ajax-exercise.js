import axios from 'axios';

// PART 1: Show Dog Photo
  // TODO: get a random photo from the Dog API and show it in the #dog-image div

// function showDogPhoto(evt) {
// axios.get('https://dog.ceo/api/breeds/image/random').then(res => {
//   const imgUrl = res.data.message;
// document.querySelector("#dog-image").innerHTML = `<img src=${imgUrl}>`;
// })
// }

async function showDogPhoto(evt) {
  const response = await axios.get("https://dog.ceo/api/breeds/image/random");
  let imgUrl = response.data.message;
  document.querySelector("#dog-image").innerHTML = `<img src = ${imgUrl}>`;
}

document.querySelector('#get-dog-image').addEventListener('click', showDogPhoto);


// PART 2: Show Weather

async function  showWeather(evt) {
  const zipcode = document.querySelector('#zipcode-field').value;
  const response = await axios.get(`/weather.txt?q=${zipcode}`);
  let weather = response.data;

  document.querySelector('#weather-info').innerHTML = weather;
}

document.querySelector('#weather-button').addEventListener('click', showWeather);


// PART 3: Order Cookies
  // TODO: Need to preventDefault here, because we're listening for a submit event!
  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

async function orderCookies(evt) {
  evt.preventDefault();

  const cookieType = document.querySelector('#cookie-type-field').value;
  const qty = document.querySelector('#qty-field').value;
  console.log(qty);
  const response = await axios.post('/order-cookies.json', {cookieType: cookieType, qty:qty})
  const yumCookie = response.data;
  console.log(yumCookie);
// document.querySelector('order-status').innerHTML = yumCookie;

const orderStatus = document.querySelector('#order-status');
orderStatus.innerText= response.data.message;

if (response.data.resultCode ==="ERROR"){
  orderStatus.innerText=response.data.message;
} else{
  orderStatus.innerText=response.data.message
}
}


document.querySelector('#order-form').addEventListener('submit', orderCookies);

// PART 4: iTunes Search

function iTunesSearch(evt) {
  evt.preventDefault();
  const searchTerm = document.querySelector("#search-term").value;

  // TODO: In the #itunes-results list, show all results in the following format:
  // `Artist: ${artistName} Song: ${trackName}`
}
document.querySelector('#itunes-search-form').addEventListener('submit', iTunesSearch);
