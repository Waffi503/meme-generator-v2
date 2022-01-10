import {TextField, Button,Box} from '@mui/material';
import {useState} from 'react';
import './generador.css';

export default function Generador() {
    const [texto, setTexto] = useState('');
    const [meme, setMeme] = useState('https://elcomercio.pe/resizer/hRs1vfTyfRkhn0bJ2fqvesXyxpg=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TZWQAX3MXNHAXFI2ENMUOUGFDQ.jpg');
    const setMemeProps = () =>{
        
    }
  return (
    <>
    <div className="contain">
    <Box component="form" className="contain-generador" 
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      >
    <h1>Generador de Memes</h1>
    <TextField label="Nombre del meme" variant="outlined" />
    <TextField label="Descripción" variant="outlined" />
    <TextField label="Url de la imagen" variant="outlined" onChange={(e)=> setMeme(e.target.value)} />
    <Button variant="contained" className="btn-generar" onClick={setMemeProps}>Generar</Button>
    </Box>
    <div className="contain-meme">
    <img src={meme} alt="Meme" className="meme"/>
    </div>
    </div>

    </>
  );
}