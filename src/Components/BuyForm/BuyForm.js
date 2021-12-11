import React from 'react';
import { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import firebase from "firebase";
import 'firebase/firestore';
import { FiCheckCircle } from 'react-icons/fi';
import { CgDanger } from 'react-icons/cg';

import { getFirestore } from '../../services/getFirebase';
import { CartContextUse } from '../../Contexts/CartContext';
import { DarkContextUse } from '../../Contexts/DarkContext';
import './BuyFormStyle.css';

const BuyForm = ({ total, setBuying, setOrdenId }) => {

    const { dark } = DarkContextUse();

    const { clear, cart } = CartContextUse();
    const [goodForm, setGoodForm] = useState(false);
    const [goodEmail, setGoodEmail] = useState(false);

    //Datos para la orden de compra
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [emailVerif, setEmailVerif] = useState('');
    const [telefono, setTelefono] = useState('');

    const handleSubmit = (e) => {

        e.preventDefault();
        
        putOrdersDB();
    }

    const putOrdersDB = async () => {
        try {

            //Traigo la Data Base
            const db = await getFirestore();

            //Referencio el doc Ordenes
            const ordenes = db.collection('ordenes');

            //Creo la orden
            const orden = 
                {
                buyer: {nombre, apellido, email, telefono},
                stickers: cart,
                fecha: firebase.firestore.Timestamp.fromDate(new Date()),
                totalCompra: total
                }

            //Creo el documento
            ordenes.add(orden)
                        .then(({ id }) => {

                            setOrdenId(id);
                        })
                        .catch(e => console.log('error al crear orden:', e))

                        .finally(() => {
                            setBuying(false);
                            clear();
                        })
        }
        catch {
            console.log('error de compra')
        }
    }

    useEffect(() => {
        
        if(
            nombre !== '' &&
            apellido !== '' &&
            email !== '' &&
            telefono !== '' &&
            email === emailVerif
        ){
            setGoodForm(true);
        } else{
            setGoodForm(false);
        }

        if(email === emailVerif){
            setGoodEmail(true);
        } else{
            setGoodEmail(false);
        }

    }, [nombre, apellido, email, telefono, emailVerif])

    return (
        <Form className="col-12 col-sm-11 col-md-10 col-xxl-8 row p-1 justify-content-center" onSubmit={handleSubmit}>

            <Form.Group className="formGroup col-10 col-lg-5 col-xxl-4 my-2 my-lg-4 mx-lg-3"
                        controlId="formNombre">
                <Form.Label className={`${dark? 'dark' : 'light'} formGroup__label`}>
                    Nombre
                    {
                        nombre !== '' ?
                            <FiCheckCircle className="check ms-2"/>
                            :
                            <CgDanger className="error ms-2"/>
                    }
                </Form.Label>
                <Form.Control className="formGroup__control" onChange={e => setNombre(e.target.value)} type="name" placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="formGroup col-10 col-lg-5 col-xxl-4 my-2 my-lg-4 mx-lg-3" controlId="formApellido">
                <Form.Label className={`${dark? 'dark' : 'light'} formGroup__label`}>
                    Apellido
                    {
                        apellido !== '' ?
                            <FiCheckCircle className="check ms-2"/>
                            :
                            <CgDanger className="error ms-2"/>
                    }
                </Form.Label>
                <Form.Control className="formGroup__control" onChange={e => setApellido(e.target.value)} type="name" placeholder="Apellido" />
            </Form.Group>

            <Form.Group className="formGroup col-10 col-lg-5 col-xxl-4 my-2 my-lg-4 mx-lg-3" controlId="formEmail">
                <Form.Label className={`${dark? 'dark' : 'light'} formGroup__label`}>
                    Tu email
                    {
                        email !== '' ?
                            goodEmail ?
                                <FiCheckCircle className="check ms-2"/>
                                :
                                <CgDanger className="error ms-2"/>
                            :
                            <></>
                    }
                </Form.Label>
                <Form.Control className="formGroup__control" onChange={e => setEmail(e.target.value)} type="email" placeholder="ejemplo@mail.com" />
            </Form.Group>

            <Form.Group className="formGroup col-10 col-lg-5 col-xxl-4 my-2 my-lg-4 mx-lg-3" controlId="formConfirmEmail">
                <Form.Label className={`${dark? 'dark' : 'light'} formGroup__label`}>
                    Confirmá tu email
                    {
                        emailVerif !== '' ?
                            goodEmail ?
                                <FiCheckCircle className="check ms-2"/>
                                :
                                <CgDanger className="error ms-2"/>
                            :
                            <></>
                    }
                </Form.Label>
                <Form.Control className="formGroup__control" onChange={e => setEmailVerif(e.target.value)} type="email" placeholder="ejemplo@mail.com" />
            </Form.Group>

            <Form.Group className="formGroup col-10 col-lg-5 col-xxl-4 my-2 my-lg-4 mx-lg-3" controlId="formTelefono">
                <Form.Label className={`${dark? 'dark' : 'light'} formGroup__label`}>
                    Teléfono
                    {
                        telefono !== '' ?
                            <FiCheckCircle className="check ms-2"/>
                            :
                            <CgDanger className="error ms-2"/>
                    }
                </Form.Label>
                <Form.Control className="formGroup__control" onChange={e => setTelefono(e.target.value)} type="phone" placeholder="11 666 345" />
            </Form.Group>

            <div className="col-12 my-3 d-flex justify-content-center">
            {
                goodForm ?
                    <Button className={`${dark? 'comprarDark' : 'comprarLight'} col-4 my-2 py-1 btnComprar`}
                            variant="primary"
                            type="submit">
                        COMPRAR
                    </Button>
                    :
                    <Button disabled className="col-4 my-2 py-1 btnComprar" variant="primary" type="submit">
                        COMPRAR
                    </Button>
            }
            </div>

        </Form>
    )
}

export default BuyForm
