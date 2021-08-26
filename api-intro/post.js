function userPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(Response => Response.json())
        .then(data => displayPost(data));
       
}
userPost();

function displayPost(get) {
    const postContainer = document.getElementById('posts');
    for (const sd of get) {
        const div = document.createElement('div');
        div.classList.add('sd');
        div.innerHTML = `<h3>${sd.title}</h3> <p>${sd.body}</p>`;
        postContainer.appendChild(div);
        console.log(sd);
    }
    
}

function addAPost() {
    fetch('https://jsonplaceholder.typicode.com/pusts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'My new post',
            body: 'this is my post',
            userID: 12
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
            
        }
    })
        .then(response => response.json())
        .then(data => console.log(data));
}
