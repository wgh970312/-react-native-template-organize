/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Provider } from 'react-redux'
import Navigation from './navigation'
import UtilsComponent from './components/utils'
import { store } from '@/models/dva'

function App() {
  return (
    <Provider store={store}>
      <UtilsComponent>
        <Navigation />
      </UtilsComponent>
    </Provider>
  )
}

export default App
