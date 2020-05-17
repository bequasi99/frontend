import React from "react"
import { useInView } from "react-intersection-observer"

const Itempdf = props => {
  const item = props.data
  const [ref, inView, entry] = useInView({
    rootMargin: "-1px 0px",
    threshold: 0.9,
  })

  console.log("inview", inView)

  return (
    <a
      ref={ref}
      href={item.download.url}
      className={inView ? "item item-pdf item-snap" : "item item-pdf"}
      target="_blank"
      rel="noreferrer"
    >
      <div className={inView ? "pdf-icon-wrapper snap" : "pdf-icon-wrapper"}>
        <img src={item.icon.url} className="pdf-icon" alt="pdf download" />
      </div>
      <div className="small-font pdf-link-name">
        <span className={inView ? "snap" : ""}>{item.download.raw.name}</span>
      </div>
    </a>
  )
}

export default Itempdf
