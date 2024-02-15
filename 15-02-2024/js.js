const url = "https://jonplaceholder.typicode.com/users"
//fetch api
const pr = fetch(url);
pr.then((response) => {
    // console.log(response);
    return response.json();
}).then((data) => {
    console.log(data.slice(0, 2));
}).catch((err) => {
    console.log(err);
})
//JSON javascript object notation

// async-wait

async function getData(url) {
    console.log("inner1");
    const resp = await fetch(url);
    console.log("inner2");
    const body = await resp.json();
    console.log(body);
    return resp;
}
const pr = getData(url);
pr.then((data) => {
    console.log(data);
})
// const pr= await getData(url);    inside async
// console.log(pr);