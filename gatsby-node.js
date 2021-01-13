/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */


// create blog post pages
exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] },
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query in node.`)
    return
  }

  const { createPage } = actions
  const blogPostTemplate = require.resolve(`./src/templates/blog-post-template.js`)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        // additional data
        slug: node.frontmatter.slug,
        // pagePath: node.frontmatter.slug.substr(1), // quick&dirty hack b/c of double slash siteUrl//blog/post-title
      }
    })
  })

}