const fs = require("fs")

exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = `data`

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`)
    fs.mkdirSync(contentPath)
  }
}

exports.createPages = async ({ actions }, options) => {
  const basePath = options.basePath || "/"
  actions.createPage({
    path: basePath,
    component: require.resolve(`./src/templates/landing-page.js`),
  })
}
