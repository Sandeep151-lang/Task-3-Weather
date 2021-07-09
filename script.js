// const input = document.getElementById('input');
// const btn = document.getElementById('btn');
// const img = document.getElementById('image');

// btn.addEventListener('click', ghify);

// async function ghify(params) {
//     const url = `https://goweather.herokuapp.com/weather/${input.value}`
//     //let url = "https://api.giphy.com/v1/gifs/search?api_key=4kTPjiAPpxFuzj2XtE9O5NyLWrJvnlQ7&q=" + input.value + "&limit=25&offset=0&rating=g&lang=en";
//     //let ur = `https://api.giphy.com/v1/gifs/search?api_key=4kTPjiAPpxFuzj2XtE9O5NyLWrJvnlQ7&q=${input.value}&limit=25&offset=0&rating=g&lang=en`
//     fetch(url)
//         .then(resp => resp.json())
//         .then(data => {
//             //console.log(data.data[0].images.original.url);
//             // img.innerHTML = `<img width='300' height='300' src="${data.data[0].images.original.url}"/>`
//             console.log(data.wind)
//         });
// }
// ghify();
// const input = document.getElementById('input');
// const btn = document.getElementById('btn');
// const degree = document.getElementById('temperature')

// btn.addEventListener('click', weather);

// async function weather(params) {
//     const url = `https://goweather.herokuapp.com/weather/${input.value}`
//     //let url = "https://api.giphy.com/v1/gifs/search?api_key=4kTPjiAPpxFuzj2XtE9O5NyLWrJvnlQ7&q=" + input.value + "&limit=25&offset=0&rating=g&lang=en";
//     //let ur = `https://api.giphy.com/v1/gifs/search?api_key=4kTPjiAPpxFuzj2XtE9O5NyLWrJvnlQ7&q=${input.value}&limit=25&offset=0&rating=g&lang=en`
//     fetch(url)
//         .then(resp => resp.json())
//         .then(data => {
//             //console.log(data.data[0].images.original.url);
//             // img.innerHTML = `<img width='300' height='300' src="${data.data[0].images.original.url}"/>`
//             console.log(data.wind)
//         });
// }
// weather();

const inputs = document.getElementById('input');
const butn = document.getElementById('btn');
const degree = document.getElementById('temperature');
butn.addEventListener('click', api);
async function api(params) {
    fetch(`https://goweather.herokuapp.com/weather/${inputs.value}`).then(resp => resp.json()).then(data => {
        degree.innerHTML = `<div class="card" style="width: 15rem;">
        <div class="card-body">
        <h5 class="card-title">${inputs.value.toUpperCase()}</h5>
        <p class="card-text" style="font-size:0.9rem; font-weight:bold">Temperature: <span style="color:red;"> ${data.temperature}</span></p>
        <p class="card-text" style="font-size:0.9rem; font-weight:bold; color:red">${data.description}</span></p>
        </div>
        </div>
        <br>
        <div class="card" style="width: 15rem;">
        <div class="card-body">
        <h5 class="card-title">Day 1</h5>
        <p class="card-text"  style="font-size:0.9rem; font-weight:bold">Temperature: <span style="color:red;">${data.forecast[0].temperature}</span></p>
        <p class="card-text"  style="font-size:0.9rem; font-weight:bold">Wind: <span style="color:red;">${data.forecast[0].wind}</span></p>
        </div>
        </div>
        <br>
        <div class="card" style="width: 15rem;">
        <div class="card-body">
        <h5 class="card-title">Day 2</h5>
        <p class="card-text"  style="font-size:0.9rem; font-weight:bold">Temperature:<span style="color:red;"> ${data.forecast[1].temperature}</span></p>
        <p class="card-text"  style="font-size:0.9rem; font-weight:bold">Wind: <span style="color:red;">${data.forecast[1].wind}</span></p>
        </div>
        </div>
        `
    }).catch((err) => {
        console.log(err, "invalid");
    })
}
api();