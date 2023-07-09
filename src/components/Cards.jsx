import {Button,Card, Col,Row} from 'react-bootstrap';
import Color from './Color';
import { useEffect } from 'react';
import { borrarColor } from '../helpers/queries';
import Swal from 'sweetalert2';
const Cards = ({ colores }) => {
    useEffect(()=>{
console.log(colores)
    },[])
    const borrar =(id)=>{
        console.log(id)
        borrarColor(id).then((respuesta)=>{
        if(respuesta.status===201){
            Swal.fire("Exito al borrar color","Se borro el color seleccionado","success");
        }else{
            Swal.fire("Error al borrar color","Se produjo un error al borrar el color seleccionado","error");
        }
        })
    }
    return (
        <section className='d-flex'>
            {
            colores.map((item, index) => (
                <Card className=" mx-2 my-2 d-flex justify-content-center" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">Color: {item.nombre}</h5>
                    </div>
                    <div className='text-center'>
                        <Color color={item.nombre}></Color>
                    </div>
                <Button className='my-2' variant='danger' onClick={() =>borrar(item._id)}>Borrar</Button>
                </Card>
            ))}
        </section>

    );
    }
    export default Cards