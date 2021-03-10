import React, { useCallback } from 'react'
import { View, Text, Button, TouchableWithoutFeedback } from "react-native"
import { connect } from 'react-redux'
import { BASE_URL } from '@/env.json'
import FastImage from 'react-native-fast-image'
import { utils } from '@/components/utils'

function HomeScreen({ navigation, app }) {

  const viewImage = useCallback(() => {
    // utils.previewImage([
    //   { url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' },
    //   { url: 'https://dss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1819216937,2118754409&fm=26&gp=0.jpg' }
    // ])
    // console.log(getUtils())
    console.log({...utils})
    // utils.pickImage({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // })
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {app}</Text>
      <Button title="详情" onPress={() => navigation.navigate('Detail', { target: '首页', redirect: 'Home' })} />
      <Button title="查看图片" onPress={viewImage} />
      <TouchableWithoutFeedback onPress={viewImage}>
        <FastImage style={{width: 200, height: 200 }} source={{ uri: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460' }} />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default connect(state => ({ app: state.app.app }))(HomeScreen)
