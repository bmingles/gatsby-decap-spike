import express from 'express'
import { createFilePath } from 'gatsby-source-filesystem'

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPreset({
    name: 'babel-preset-gatsby',
    options: {
      reactRuntime: 'automatic',
    },
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'src/blog' })
    createNodeField({
      node,
      name: 'slug',
      value: `/blog${slug}`,
    })
  }
}

// Hack to make static folder work during local dev
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static('static'))
}
