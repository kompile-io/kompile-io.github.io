import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingAccentStyles = {
  color: "#663399",
}

// markup
const HomePage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>
        <span style={headingAccentStyles}>_ it kompiles ! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
    </main>
  )
}

export default HomePage
