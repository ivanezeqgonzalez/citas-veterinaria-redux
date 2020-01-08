import { createStore } from 'redux';
import reducer from './reducers/index';
import { obtenerStateStorage, guardarStateStorage } from './localstorage';

// const initialState = [];
const storageState = obtenerStateStorage();

const store = createStore(
    reducer,
    storageState,
    window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe( () => {
    guardarStateStorage({
        citas: store.getState().citas
    })
})

export default store;