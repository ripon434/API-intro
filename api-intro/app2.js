function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data));
}


function displayUser(data) {
    const ul = document.getElementById('users');
    for (const ripon of data) {
        const li = document.createElement('li');
        li.innerText = `name: ${ripon.name}`;
        ul.appendChild(li);
  }
    
}