import React, { createRef } from 'react'
import ImageZoomViewer from './ImageZoomViewer'
import { imagePicker } from './ImageCropPicker'

const $utils = {
  previewImage: createRef(),
  pickImage: imagePicker
}

function UtilsComponent({ children }) {
  return (
    <>
      <ImageZoomViewer ref={$utils.previewImage} />
      { children }
    </>
  )
}

export const utils = new Proxy($utils, {
  get(target,key){
    const t = Reflect.get(target, key)
    return t?.current || t
  }
})

export default UtilsComponent