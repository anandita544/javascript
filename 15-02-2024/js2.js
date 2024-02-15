// / const url = "https:/jsonplaceholder.typicode.com/users"
// const pr = fetch(url);
// pr.then((response) => {
//     console.log(response);
//     const data = response.json();
//     return data;
// }).then((data) => {
//     console.log(data);
// })


// async function getData(url) {
//     const resp = await fetch(url);
//     console.log(resp);
//     const data = await resp.json();
//     console.log(data);
//     return data;

// }
// let output = '';
// const pr = getData(url);
// pr.then((data) => {

//     output += JSON.stringify(data.slice(0, 2));

//     document.body.innerHTML = `<div>${output}</div>`

// }).catch((err) => {
//     document.body.innerHTML = err;
// })


const url1 = "https://jsonplaceholder.typicode.com/posts"
async function getData1(url1) {
    try {
        const resp = await fetch(url1);
        console.log(resp);
        const data = await resp.json();
        console.log(data);
        let h1 = document.createElement('h1');
        h1.textContent = "posts"
        document.body.appendChild(h1);

        let output = data.slice(0, 4);

        output.forEach((output) => {

            let div = document.createElement('div');
            // div.textContent = JSON.stringify(output);
            div.innerHTML = `<ul><li>${output.userId} ,${output.title}</li><ul>`
            document.body.appendChild(div);

        });
    }
    catch (error) {
        console.log(error);
    }
}

const url2 = "https://jsonplaceholder.typicode.com/users"
async function getData2(url2) {
    try {
        const resp = await fetch(url2);
        console.log(resp);
        const data = await resp.json();
        console.log(data);
        let h1 = document.createElement('h1');
        h1.textContent = "users"
        document.body.appendChild(h1);

        let output = data.slice(0, 4);

        output.forEach((output) => {

            let div = document.createElement('div');
            // div.textContent = JSON.stringify(output);
            div.innerHTML = `<ul><li>${JSON.stringify(output)}</li><ul>`
            document.body.appendChild(div);

        });
    }
    catch (error) {
        console.log(error);
    }
}

const url3 = "https://jsonplaceholder.typicode.com/todos"
async function getData3(url3) {
    try {
        const resp = await fetch(url3);
        console.log(resp);
        const data = await resp.json();
        console.log(data);

        let output = data.slice(0, 2);
        let h1 = document.createElement('h1');
        h1.textContent = "Todos"
        document.body.appendChild(h1);

        output.forEach((output) => {

            let div = document.createElement('div');
            // div.textContent = JSON.stringify(output);
            div.innerHTML = `<ul><li>${JSON.stringify(output)}</li><ul>`
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
// let output1 = '';
// const pr1 = getData1(url1);
// pr1.then((data) => {

//     output1 += JSON.stringify(data.slice(0, 4));

//     document.body.innerHTML = `
//     <div>${output1}</div>`

// }).catch((err) => {
//     document.body.innerHTML = err;
// }) 