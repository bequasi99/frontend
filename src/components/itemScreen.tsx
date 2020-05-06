import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const ItemScreen = ({ name, handleInview }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView) {
      handleInview(name)
    }
  }, [entry, inView, name, handleInview])

  return <div ref={ref} className="item-screen"></div>
}

export default ItemScreen
