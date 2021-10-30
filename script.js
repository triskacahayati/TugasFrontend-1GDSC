function init(){
    const listMovie = document.getElementById('movie-list');
    for(let i = 0; i < movies.length; i++){
        let item = document.createElement('li');
        let nama = document.createElement('p');
        let image = document.createElement('img');
        let link = document.createElement('a');
        let rating = document.createElement('p');

        image.src = movies[i].gambar;
        nama.innerHTML = movies[i].name;
        link.href = "detail.html";
        link.onclick = function() {changeID(i)};
        rating.innerHTML = "Rating: " + movies[i].rating;

        link.appendChild(image);
        link.appendChild(nama);
        // item.appendChild(image);
        item.appendChild(link);
        item.appendChild(rating);

        listMovie.appendChild(item);
    }
}

function changeID(i){
    localStorage.setItem('ID',i)
}

function detail(){
    const ID = localStorage.getItem('ID');
    const content = document.getElementById('content');
    const name = document.createElement('p');
    const desc = document.createElement('p');
    const back = document.createElement('a');

    name.innerHTML = movies[ID].name
    desc.innerHTML = movies[ID].deskripsi;
    back.innerHTML = 'Back'
    back.href = 'index.html';

    content.appendChild(name);
    content.appendChild(desc);
    content.appendChild(back)
}