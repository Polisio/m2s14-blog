import { Navigate, Route, Routes } from 'react-router-dom';
// Mis componentes (páginas)
import Home from '../pages/Home';
import World from '../pages/World';

// Route puede recibir 2 props, una llamada path y una llamada element

function AppRouter() {
    return (
        <Routes>
            <Route path="home" element= {<Home/>}/>
            <Route path="world" element= {<World/>}/>
            <Route path="/" element= {<Navigate to="/home"/>}/>
        </Routes>
    );
}

export default AppRouter;