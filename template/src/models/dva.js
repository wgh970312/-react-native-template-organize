import { create } from 'dva-core'
import createLoading from 'dva-loading'
import immer, { enableES5 } from 'dva-immer'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import models from './reducers'

enableES5()

export const app = create({
  initialState: {},
  onReducer: reducer => persistReducer({
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ['user'],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [],
  }, reducer)
})

app.use(immer());
app.use(createLoading());
app.use({
  onError(err) {
    console.log('dvaError', err);
  },
})

models.forEach(model => app.model(model))

app.start()

export const store = app._store
persistStore(store)