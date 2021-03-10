import React from 'react'
import { View, Text, Button } from "react-native"
import { Focused } from '@/navigation/components'
import { useSelector, useDispatch } from 'react-redux'

function MineScreen({ navigation }) {

  const isLogin = useSelector(({ user }) => user.login)
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mine Screen</Text>
      {
        isLogin ? (
          <>
            <Button title="详情" onPress={() => navigation.navigate('Detail', { target: '我的', redirect: 'Mine' })} />
            <Button title="退出登录" onPress={() => dispatch({ type: 'user/logout' })} />
          </>
        ) : (
          <Button title="登录" onPress={() => navigation.navigate('Login')} />
        )
      }
      <Focused />
    </View>
  );
}

export default MineScreen
