// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(function (data) {
        console.log(data);
        var htmls = data.map(function (item) {
            return `<li>
        <h2>${item.title}</h2>
        <p>${item.title}</p>
        </li>`;
        })
        var html = htmls.join('');
        document.getElementById('boxParent').innerHTML = html;
    })