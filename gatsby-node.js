exports.onCreateWebpackConfig = ({ stage, actions }) => {
  // If production JavaScript and CSS build
  if (stage === "build-javascript") {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}
