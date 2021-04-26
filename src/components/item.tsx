import React from "react"
import { useInView } from "react-intersection-observer"

const Item = props => {
  const item = props.data
  const [ref, inView, entry] = useInView({
    rootMargin: "-1px 0px",
    threshold: 0.9,
  })

  return (
    <a
      ref={ref}
      href={item.download.url}
      className={inView ? "item item-snap" : "item"}
      target="_blank"
      rel="noreferrer"
    >
      <h2 className="medium-font heading">{item.title.text}</h2>
      <p className="medium-font">{item.description.text}</p>
      <div className="pdf-link-name-mobile">
        <span className="small-font">{item.download.url.match(/\/([^\/]+)$/)[1]}</span>
      </div>
      <div className="mobile-pdf">
        <div className="pdf-icon-wrapper">
          <img src={item.icon.url} className="pdf-icon" alt="pdf download" />
        </div>
      </div>
    </a>
  )
}

export default Item
