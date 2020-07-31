import './styles.css';
import debounce from 'lodash.debounce';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

import { alert } from '@pnotify/core';
const notice = alert({
  title: 'Confirmation Needed',
  text: 'Are you sure?',
  hide: false,
  modules: {
    Confirm: {
      confirm: true
    }
  }
});
notice.on('pnotify:confirm', () => {

});
notice.on('pnotify:cancel', () => {

});
const refs = {
    form:document.querySelector('.search-form'),
    input:document.querySelector('.search-input'),
    ul:document.querySelector('.countries'),
};
refs.input.addEventListener('input', debounce(() => {setUrl()},500));
const url = `https://restcountries.eu/rest/v2/name/`;
function getdata(data) {
    let dataLength = data.length;
    let countries = '';
    if (dataLength <= 1) {
        countries = `<li>${data[0].name} - ${data[0].nativeName}
        <h2>${data[0].name}</h2>
        <p>Capital: ${data[0].capital}</p>
        <p>Population: ${data[0].population}</p>
        <ul>Languages:
        <li>${data[0].languages[0].name}</li>
        </ul>
        <img src="${data[0].flag}" alt="image" width="300">
        </li>`;
    } else {countries = data.map(country => `<li>${country.name}</li>`).join('');};
    refs.ul.innerHTML = countries;
    console.log(data);    
};
function setUrl() {
    let inputValue = refs.input.value;
    fetch(url + inputValue).then(response => response.json()).then(data => getdata(data));
}
