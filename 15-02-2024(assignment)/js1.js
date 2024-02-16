const url1 = "https://jsonplaceholder.typicode.com/posts";
async function getData1(url1) {
    try {
        const resp = await fetch(url1);
        const data = await resp.json();
        let h1 = document.createElement('h1');
        h1.textContent = "Posts";
        document.body.appendChild(h1);

        let output = data.slice(0, 2).map(post => `Title: ${post.title}, Body: ${post.body}`);

        output.forEach((post) => {
            let div = document.createElement('div');
            div.textContent = post;
            document.body.appendChild(div);
        });
    }
    catch (error) {
        console.log(error);
    }
}

const url2 = "https://jsonplaceholder.typicode.com/users";
async function getData2(url2) {
    try {
        const resp = await fetch(url2);
        const data = await resp.json();
        let h1 = document.createElement('h1');
        h1.textContent = "Users";
        document.body.appendChild(h1);

        let output = data.slice(0, 2).map(user => `Name: ${user.name}, Email: ${user.email}`);

        output.forEach((user) => {
            let div = document.createElement('div');
            div.textContent = user;
            document.body.appendChild(div);
        });
    }
    catch (error) {
        console.log(error);
    }
}

const url3 = "https://jsonplaceholder.typicode.com/todos";
async function getData3(url3) {
    try {
        const resp = await fetch(url3);
        const data = await resp.json();
        let h1 = document.createElement('h1');
        h1.textContent = "Todos";
        document.body.appendChild(h1);

        let output = data.slice(0, 2).map(todo => `Title: ${todo.title}, Completed: ${todo.completed}`);

        output.forEach((todo) => {
            let div = document.createElement('div');
            div.textContent = todo;
            document.body.appendChild(div);
        });
    }
    catch (error) {
        console.log(error);
    }
}

getData1(url1);
getData2(url2);
getData3(url3);
