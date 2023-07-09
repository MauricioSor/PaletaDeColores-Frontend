const URL_COLORES=import.meta.env.VITE_COLORES;
const URL_CREAR=import.meta.env.VITE_CREAR;
const URL_BORRAR=import.meta.env.VITE_BORRAR;

export const buscarColores= async()=>{
    try{
        const consulta = await fetch(URL_COLORES);
        const colores= await consulta.json();
        return colores;
    }catch(error){
        console.log(error);
    }
}

export const crearcolor=async(color)=>{
    try{
        const consulta = await fetch(URL_CREAR,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"},
            body: JSON.stringify(color)
        })
        return consulta;
    }catch(error){
        console.log(error);
    }
}