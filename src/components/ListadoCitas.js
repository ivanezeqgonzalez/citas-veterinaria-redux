import React from 'react';
import { useSelector } from 'react-redux';
import Cita from './Cita';


const ListadoCitas = () => {
    const citas = useSelector( state => state.citas );
    const mensaje = Object.keys(citas.citas).length === 0 ? 'No hay citas' : 'Administra las Citas acá';

    return(
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
            </div>
            <div className="lista-citas">
                {citas.citas.map(cita => (
                    <Cita 
                        cita={cita}
                        key={cita.id}
                    />
                ))}
            </div>
        </div>
    ); 

};

export default ListadoCitas;