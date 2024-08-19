
// todos los personajes

// Punto 1

const Api = 'https://thronesapi.com/api/v2/Characters';

async function ned(Api) {
    try{
        const res = await fetch(Api);
        if(!res.ok){
            throw new Error('Error', res.status)
        }
        const personajes = await res.json()
        personajes.map(personaje =>{
                    if (personaje.fullName == "Ned Stark"){
                        console.log(personaje);
                    }
                })
    }catch(err){
        console.log(err);
    }
}

ned(Api)

// Punto 2

// const Api = 'https://thronesapi.com/api/v2/Characters';

// async function todos(Api) {
//     try{
//         const res = await fetch(Api);
//         if(!res.ok){
//             throw new Error('Error', res.status)
//         }
//         const datos = await res.json()
//         console.log(datos);
//     }catch(err){
//         console.log(err);
//     }
// }

// todos(Api)