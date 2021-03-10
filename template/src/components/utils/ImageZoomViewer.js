import React, { useImperativeHandle, useCallback, useState } from 'react'
import { Modal } from 'react-native'
import ImageViewer from 'react-native-image-zoom-viewer'

const menuContext = { saveToLocal: '保存到本地', cancel: '取消' }

function ImageZoomViewer(props, ref) {
  const [visible, setVisible] = useState(false)
  const [$imageUrls, setImageUrls] = useState([])

  const previewImage = useCallback(imageUrls => {
    setImageUrls(imageUrls)
    setVisible(true)
  }, [])

  useImperativeHandle(ref, () => previewImage)

  return (
    <Modal visible={visible} transparent={true}>
      <ImageViewer
        imageUrls={$imageUrls}
        onClick={() => { setVisible(false) }}
        menuContext={menuContext}
      />
    </Modal>
  )
}

export default React.forwardRef(ImageZoomViewer)
