import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';
import storage from 'redux-persist/es/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistRootReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistRootReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export { persistor, store };
