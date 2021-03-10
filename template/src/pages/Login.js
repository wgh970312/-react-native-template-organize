import React, {useCallback} from 'react'
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux'

function LoginScreen({navigation, dispatch}) {
  const login = useCallback(() => {
    dispatch({type: 'user/login'}).then((res) => {
      navigation.navigate('Main')
    })
  }, [])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="login" onPress={login} />
    </View>
  )
}

export default connect((state) => ({app: state.app.app}))(LoginScreen)
