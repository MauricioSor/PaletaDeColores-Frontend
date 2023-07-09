import {Button,Card, Col,Row} from 'react-bootstrap';
import Color from './Color';
import { useEffect } from 'react';
const Cards = ({ colores, borrarColor }) => {
    useEffect(()=>{
console.log(colores)
    },[])
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
                <Button className='my-2' variant='danger' onClick={() =>borrarColor(item._id)}>Borrar</Button>
                </Card>
            ))}
        </section>

    );
    }
    export default Cards