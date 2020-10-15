import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistRootReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistRootReducer, applyMiddleware(thunkMiddleware));
const persistor = persistStore(store);

export { persistor, store };
