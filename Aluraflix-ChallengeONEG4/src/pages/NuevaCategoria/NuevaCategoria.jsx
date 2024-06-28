import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './NuevaCategoria.css'
import { agregarCategoria, buscarUsuario } from '../../client-service/client-service';
import { v4 as uuidv4 } from 'uuid';
import AdministrarCategoria from '../../componentes/AdministrarCategoria/AdministrarCategoria';

const NuevaCategoria = () => {

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [color, setColor] = useState('#2A7AE4');
    const [codigoUsuario, setCodigoUsuario] = useState('');
    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        buscarUsuario('/usuario', setUsuario)
        .catch(error => alert(error))     
    }, [])

    function limpiarInputs(){
        setTitulo('');
        setDescripcion('');
        setColor('#2A7AE4');
        setCodigoUsuario('');
    }

    return <>
    <div className="nuevo-video">
        <form 
            className="nuevo-video__formulario" 
            action=""
            onSubmit={(e) => {
                e.preventDefault();
    
                usuario.forEach( (user) => {
                    if(codigoUsuario === user.codigoUsuario){
                        const id =  uuidv4();
                        agregarCategoria(id, titulo, descripcion, color);
                    } else {
                        alert('Código de usuario inválido')
                    }
                })
            }}
            
        >
            <h2>Nueva Categoría</h2>
            <fieldset>
                <TextField 
                    id="outlined-basic" 
                    label="Título" 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={titulo}
                    onChange={ (e) => setTitulo(e.target.value)}
                    required
                />

                <TextField
                    id="outlined-multiline-flexible"
                    label="Descripción de la Categoría"
                    multiline
                    maxRows={4}
                    fullWidth
                    margin="normal"
                    value={descripcion}
                    onChange={ (e) => setDescripcion(e.target.value)}
                    required
                />

                <div className='color__container'>
                    <label className='color__label' htmlFor="color" required >Color</label>
                    <input name='color__input' type='color'
                        value={color}
                        onChange={ (e) => setColor(e.target.value)}
                    ></input>
                    
                </div>

                <TextField 
                    id="outlined-basic" 
                    label="Código de usuario" 
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={codigoUsuario}
                    onChange={ (e) => setCodigoUsuario(e.target.value)}
                    required
                />
                
            </fieldset>
            <Stack spacing={2} direction="row" className='botones'>
                <Button variant="contained" type='submit'>Guardar</Button>
                <Button variant="outlined" onClick={limpiarInputs}>Limpiar</Button>
            </Stack>

        </form>

        
    </div>

    <AdministrarCategoria />
    
    </>
}

export default NuevaCategoria;