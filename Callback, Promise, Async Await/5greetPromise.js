function greet (name){
    return new Promise((a)=>{
        const greeting = `Hello ${name}!`;
        a(greeting);
    });
}

greet('Mithun').then ((b)=>console.log(b));