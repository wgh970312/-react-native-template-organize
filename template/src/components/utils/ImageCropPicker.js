import React, { useCallback } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker'

export const imagePicker = ImagePicker

function ImageCropPicker({ children, mode = 'openPicker', option }) {

  const picker = useCallback(() => ImagePicker[mode]?.(option), [mode, option])

  return (
    <TouchableWithoutFeedback onPress={picker}>
      { children }
    </TouchableWithoutFeedback>
  )
}

export default ImageCropPicker