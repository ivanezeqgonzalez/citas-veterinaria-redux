import React from 'react';
import { useDispatch } from 'react-redux';
import { borrarCitaAction } from '../actions/citasActions';

const Cita = ({cita}) => {
    const { mascota, propietario, fecha, hora, sintomas, id} = cita;
    const dispatch = useDispatch();

    return(
        <div className="card mt-3">
            <div className="card-body">
                <h3 className="mt-0">{mascota}</h3>
                <p className="card-text"><span>Nombre Dueño: {propietario}</span></p>
                <p className="card-text"><span>Fecha: {fecha}</span></p>
                <p className="card-text"><span>Hora: {hora}</span>  </p>
                <p className="card-text"><span>Sintomas:</span> <br />
                    {sintomas}
                </p>
                <button 
                    onClick={() => dispatch(borrarCitaAction(cita.id))}
                    className="btn btn-danger">Borrar &times;
                </button>
            </div>
        </div>
    );
}

export default Cita;