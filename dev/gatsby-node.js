/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
 const path = require(`path`)

 exports.onCreateNode = async ({ node, actions, store, cache }) => {
   const { createNode, createNodeField } = actions;
 
   if (node.internal.type !== null && node.internal.type === "StrapiSeniors") {
     for (let project of node.projects_list) {
         if (project.gallery.length > 0) {

            for (const image of project.gallery) {
                const fileNode = await createRemoteFileNode({
                  url: "http://localhost:1337" + image.url,
                  store,
                  cache,
                  createNode,
                  createNodeId: (id) => image.id.toString(),
                });
        
                if (fileNode) {
                  image.localFile___NODE = fileNode.id;
                  console.log(fileNode);
                }
              }       
         }
   }
 };
 }
 var slugify = require('slugify')

 // // create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
  {
    allStrapiSeniors {
      nodes {
        name
      }
    }
  }
`)



console.log(result.data.allStrapiSeniors.nodes)


result.data.allStrapiSeniors.nodes.forEach(senior => {
    const slug = slugify(senior.name)
    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/senior-template.js`),
      context: {
        name: senior.name,
      },
    })
  })
}




