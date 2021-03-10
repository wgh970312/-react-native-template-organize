import React, { useEffect, useMemo, useRef } from 'react'
import { useIsFocused } from '@react-navigation/native'

const NoopComponent = () => null

function Lifecycle({
  focused = true,
  onChange,
  onFocus,
  onBlur,
  Component = NoopComponent,
  children
}) {
  const cbs = useRef({ onChange, onFocus, onBlur })
  const isFocused = useIsFocused()

  useEffect(() => { cbs.current.onChange = onChange }, [onChange])
  useEffect(() => { cbs.current.onFocus = onFocus }, [onFocus])
  useEffect(() => { cbs.current.onBlur = onBlur }, [onBlur])

  useEffect(() => {
    const { onChange, onFocus, onBlur } = cbs.current
    onChange?.(isFocused)
    isFocused ? onFocus?.() : onBlur?.()
  }, [isFocused])

  const FocusedComponent = useMemo(() => {
    if(children) {
      return children
    }

    if(typeof Component === 'function'){
      return <Component />
    } else {
      return Component
    }
  }, [children, Component])

  if(isFocused === !!focused){
    return FocusedComponent
  }

  return <NoopComponent />
}

export default Lifecycle
