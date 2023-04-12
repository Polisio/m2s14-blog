import { useEffect } from "react";
import {getAnimales} from '../services/main';

function Us() {

    useEffect(()=>{
        console.log("Entró al componente Us");
        getAnimales().then((response) => {
            console.log(response);
        });
        // return ()=>{console.log('Salió del componente')};
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Página Us</h1>
                </div>
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Animal</th>
                                <th>Cantidad</th>
                                <th>Fecha</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>Cat</td>
                                <td>1</td>
                                <td>22/08/2023</td>
                                <td>
                                <bottom type="button" className="btn btn-danger">Eliminar</bottom>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Us;