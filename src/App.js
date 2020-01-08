import React, { useState } from 'react';
import store from './store';
import AgregarCita from './components/AgegarCita';
import { Provider } from 'react-redux';
import ListadoCitas from './components/ListadoCitas';

function App() {
    

    return (
        <Provider store={store}>
            <div className="container">
                <header>
                    <h1 className="text-center">Administrador de Pacientes de veterinaria</h1>
                </header>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <AgregarCita />
                    </div>
                    <div className="col-md-6">
                        <ListadoCitas />
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default App;
