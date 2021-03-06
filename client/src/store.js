import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['view'],
    stateReconciler: autoMergeLevel2 
   }
   
const pReducer = persistReducer(rootPersistConfig, rootReducer);
   
export const store = createStore(pReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);