import './Contenido.css';
import * as React from 'react';
import { useState } from 'react'; // Importa el hook useState
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel, Switch, Box, Card, CardContent} from '@mui/material';



const Contenido = (props) => {
    const [seleccionado, setSeleccionado] = useState(null); // Update -> Nuevo estado para el botón seleccionado

    const handleSeleccion = (valor) => {
        if (seleccionado === valor) {
            setSeleccionado(null); // Si se hace clic en el botón ya seleccionado, lo deseleccionapp
        } else {
            setSeleccionado(valor);
        }
    };
    return (
    <div className='contenedor-formulario'>
        <h1 className='titulo-contenido'>Textos hiper-personalizados para campañas</h1>
        <p className='instrucciones'>Agrega la información requerida</p>
        <Box my={2}>
        <Card className='card-formulario'>
            <CardContent>
                <span className='text-mensaje'>¿Cómo deseas generar tu mensaje?</span>
                <FormControlLabel
                control={<Checkbox checked={seleccionado === 'Jasper'} onChange={() => handleSeleccion('Jasper')} />} //mejora aqui tambien
                label="Jasper"
            />
            <FormControlLabel
                control={<Checkbox checked={seleccionado === 'Google'} onChange={() => handleSeleccion('Google')} />}
                label="Google"
            />
                <TextField className='text-field' color='primary' type='text' id="momento-venta" label="Momento de venta" variant="outlined" />
                <TextField className='text-field' id="outlined-basic" label="Categoría" variant="outlined" />
                <TextField className='text-field' id="outlined-basic" label="Palabras clave" variant="outlined" />
                <TextField className='text-field' id="outlined-basic" label="Descuento" />
                <span className='text-emojis'>¿Deseas utilizar emojis?</span>
                <FormControlLabel className='switch-emojis' control={<Switch/>} />
                <Select className='select'  color='primary'>
                    <MenuItem value={10}>Notificaciones Push</MenuItem>
                    <MenuItem value={20}>Banners</MenuItem>
                    <MenuItem value={30}>SMS</MenuItem>
                </Select>
                <p className='instrucciones'>Haz click aquí para general el mensaje</p>
                <Button  className='button-generar'color='primary' variant="contained">Generar</Button>
            </CardContent>
        </Card>
        </Box>
    </div>
    );
}

export default Contenido;
