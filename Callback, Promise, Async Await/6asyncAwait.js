async function fetchData() {
    const a = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const b = await a.json()
    console.log(b);
}
fetchData();