async function getcombinedData () {
    const [data1, data2] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos/1").then ((response)=> response.json()
        ),
            fetch("https://jsonplaceholder.typicode.com/posts/1").then ((response) => response.json()
        ),
    ])
    const combinedData = {
        todo: data1,
        post: data2
    }
    return combinedData;
}
getcombinedData().then((response)=>console.log(response))