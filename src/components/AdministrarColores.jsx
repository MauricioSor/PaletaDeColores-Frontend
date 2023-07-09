import { Form, Row, Col, Container, Button ,Spinner} from 'react-bootstrap';
import Color from './Color';
import Cards from './Cards';
import { useState, useEffect } from "react";
import { buscarColores, crearcolor } from '../helpers/queries'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';

const AdministrarColores = () => {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm();
    const [colores, setColores] = useState([]);
    const [spinner,setSpinner]=useState(true);
    const cargar = () => {
        buscarColores().then((respuesta) => {
            setColores(respuesta);
            console.log(respuesta)
            setSpinner(false);
        })
    }

    const guardar = (color) => {
        console.log(color)
        crearcolor(color).then((respuesta) => {
            if (respuesta.status === 200) {
                Swal.fire('Exito al cargar el color', "Se cargó su color a la BD", "success")
            } else {
                Swal.fire('Error al cargar el color', "Ocurrió un error al cargar su color a la BD", "error")
            }
        })
    }

    useEffect(() => {
        cargar();
        }, []);
    return (
        <>
            <Container className='border bg-dark my-5'>
                <h4 className='text-start text-light pt-3'>Administrar colores</h4>
                <hr className='text-light' />
                <Form className='text-light my-3' onSubmit={handleSubmit(guardar)}>
                    <Row >
                        <Col md={4} className="d-flex align-items-center justify-content-center">
                            <Form.Group className="">
                                <Color color={colores} ></Color>
                            </Form.Group></Col>
                        <Col md={6} className="d-flex align-items-center justify-content-center">
                            <Form.Group >
                                <Form.Control
                                    as="textarea"
                                    placeholder='Ingrese un color pj. Blue'
                                    rows={5} cols={60}
                                    {...register('nombre', {
                                        required: "Ingrese una tarea"
                                        , minLength: {
                                            value: 2,
                                            message: "La cantidad minima de caracteres es de 2"
                                        },
                                        maxLength: {
                                            value: 20
                                            , message: "La cantidad máxima de caracteres es 20"
                                        }
                                    })}
                                />
                            </Form.Group>
                            <Form.Text className="text-danger">
                                {errors.nombre?.message}
                            </Form.Text>
                        </Col>
                    </Row>
                    <Button type='submit'>Agregar</Button>
                </Form>
                <Row className='mx-auto'>
                    {spinner?
                    (<div className='d-flex -justify-content-center'>
                        <Spinner variant='primary' animation='border'/>
                    </div>):
                <Cards colores={colores}></Cards>
                    }
                </Row>
            </Container>
        </>
    );
};

export default AdministrarColores;