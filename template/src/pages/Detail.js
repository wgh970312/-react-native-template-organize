import React from 'react'
import {View, Text} from 'react-native'
import {useRoute} from '@react-navigation/native'
import {useImmer} from 'use-immer'

function DetailsScreen({route}) {
  const {
    params: {target},
  } = route
  const {
    params: {redirect},
  } = useRoute()
  const [count, setCount] = useImmer({
    count: 1,
  })

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text
        onPress={() =>
          setCount((c) => {
            c.count++
          })
        }>
        Details Screen {count.count}
      </Text>
      <Text>target {target}</Text>
      <Text>redirect {redirect}</Text>
    </View>
  )
}

export default DetailsScreen
