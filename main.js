const endpoint ='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'; 

let cities = [];

fetch (endpoint)
.then(blob => blob.json())
// to get the raw data we use d code below and console,log to check it.
// .then(RawData => console.log(RawData))  
//pushing our raw data into our empty array of cities using a spread operator of ... 
.then( RawData => cities.push(...RawData) )

function findMatches(wordToMatch, cities){
  return cities.filter(place => {
    // we need to  check if the cities or state matches what was returned 

    const regex = new RegExp (wordToMatch,  'gi');
    return place.city.match(regex) || place.state.match(regex)
  } );
}

function displayMatches() {
    //console.log( this.value);
    const matchArray = findMatches(this.value, cities);
    // console.log(matchArray)
    const html = matchArray.map(place =>{
        return `
        <li>
        <span class='name'>${place.city}, ${place.state} <span/>
        <span class='population'>${place.population}</span>
        
        </li>
        `
    }).join('');
    showInput.innerHTML = html;

}


const searchInput = document.querySelector('.searchinput')
const showInput = document.querySelector('.suggestion')

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches); 