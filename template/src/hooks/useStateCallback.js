import { useCallback, useEffect, useRef, useState } from "react"

export default function useStateCallback(initialState) {
  const cbs = useRef(new Set())
  const [value, setValue] = useState(initialState)

  const setState = useCallback((val, fn) => {
    setValue(val)
    if(fn){
      cbs.current.add(fn)
    }
  }, [])

  useEffect(() => {
    if(cbs.current.size > 0) {
      cbs.current.forEach(cb => {
        cb(value)    
      })

      cbs.current.clear()
    }
  }, [value])

  return [value, setState]
}