import './body.css';
import {Button} from '@mui/material';
import {Link} from 'react-router-dom';

export default function Body() {
    return (
        <div className="contain-body">
        <h1>Bienvenidos a Meme Generator V2</h1>
        <Button variant="contained" className="btn-start"><Link to="/generate">Empezar</Link></Button>
        </div>
    );
}