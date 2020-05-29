import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FixedContent from "../components/fixedContent"
import Items from "../components/items"

const IndexPage = () => {
  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const onScroll = () => {
    const right = document.querySelector("#right-column") as HTMLDivElement

    right.style.transform =
      "translate3d(0, " + (0 - window.pageYOffset) * -1 + "px, 0)"
  }

  const handleInview = itemToshow => {
    const introContent = document.querySelector(
      "#introContent"
    ) as HTMLDivElement
    const mainContent = document.querySelector("#mainContent") as HTMLDivElement
    const contactForm = document.querySelector("#contactForm") as HTMLDivElement
    introContent.style.zIndex = -1
    mainContent.style.zIndex = -1
    contactForm.style.zIndex = -1

    if (itemToshow === "intro") {
      introContent.style.zIndex = 2
    } else if (itemToshow === "middle") {
      mainContent.style.zIndex = 2
    } else {
      contactForm.style.zIndex = 2
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <FixedContent />
      <Items handleInview={handleInview} />
    </Layout>
  )
}

export default IndexPage
