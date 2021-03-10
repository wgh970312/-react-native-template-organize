import { useEffect, useRef, useCallback } from "react";

export default function useOnceRequest(fn) {
  const request = useRef()
  const pending = useRef(false)

  useEffect(() => request.current = fn, [fn])

  const response = useCallback((...args) => {
    if(!request.current){
      return Promise.reject(new Error('执行函数不存在'))
    }

    pending.current = true
    return request.current(...args).finally(() => {
      pending.current = false
    })
  }, [])

  const isPending = useCallback(() => pending.current, [])

  return [response, isPending]
}