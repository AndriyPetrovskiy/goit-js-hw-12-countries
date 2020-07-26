// import './styles.css';
// import debounce from 'lodash.debounce';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';



// import { alert, notice, info, success, error, defaultModules } from '@pnotify/core';

// // Manually set the type.
// const myAlert = alert({
//   text: "I'm an alert.",
//   type: 'error',
//   title: "You welcome",
// });

// // Automatically set the type.
// const myNotice = notice({
//   text: "I'm a notice.",
// });

// const myInfo = info({
//   text: "I'm an info message."
// });

// const mySuccess = success({
//   text: "I'm a success message."
// });

// const myError = error({
//   text: "I'm an error message."
// });

// const input = document.querySelector('input');
// const list = document.querySelector('.list');
// console.log(list);

// console.log(input);

// input.addEventListener('click', debounce(() => {setUrl()}, 500));

// const url = `https://restcountries.eu/rest/v2/name`;

// function getData(data) {
//     let dataLength = data.length;
//     let countries = '';
//     if(dataLength <= 1) {
//         countries = `<li>${data[0].name} - ${data[0].nativeName}<p>Cpatal: ${data[0].capital}</p><p>Population: ${data[0].population}</p></li>`.joine('');
//     } else {
//         countries = data.map(country => `<li>${country.name}</li>`).join();
//     }
//     list.innerHTML = countries;
// };

// function setUrl() {
//     let inputValue = input.value;
//     fetch(url + inputValue).then(res => res.json()).then(data => getData(data));
// }

import './styles.css';
import debounce from 'lodash.debounce';
// import { alert, notice, info, success, error, defaultModules } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
// const myAlert = alert({
//     text: "I'm an alert.",
//     type: 'Error',
//     title: 'You are welcome',
//   });
//   // Automatically set the type.
//   const myNotice = notice({
//     text: "I'm a notice.",
//   });
//   const myInfo = info({
//     text: "I'm an info message."
//   });
//   const mySuccess = success({
//     text: "I'm a success message."
//   });
//   const myError = error({
//     text: "I'm an error message."
//   });
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
  // User confirmed, continue here...
});
notice.on('pnotify:cancel', () => {
  // User canceled, continue here...
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
// function showStackTopLeft(type) {
//     if (typeof window.stackTopLeft === 'undefined') {
//       window.stackTopLeft = new PNotify.Stack({
//         dir1: 'down',
//         dir2: 'right',
//         firstpos1: 25,
//         firstpos2: 25,
//         push: 'top',
//         maxStrategy: 'close'
//       });
//     }
//     const opts = {
//       title: 'Over Here',
//       text: "Check me out. I'm in a different stack.",
//       stack: window.stackTopLeft
//     };
//     switch (type) {
//       case 'error':
//         opts.title = 'Oh No';
//         opts.text = 'Watch out for that water tower!';
//         opts.type = 'error';
//         break;
//       case 'info':
//         opts.title = 'Breaking News';
//         opts.text = 'Have you met Ted?';
//         opts.type = 'info';
//         break;
//       case 'success':
//         opts.title = 'Good News Everyone';
//         opts.text =
//           "I've invented a device that bites shiny metal asses.";
//         opts.type = 'success';
//         break;
//     }
//     PNotify.alert(opts);
//   }
//   showStackTopLeft('error');