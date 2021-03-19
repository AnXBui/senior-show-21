/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

 exports.onCreateNode = async ({ node, actions, store, cache }) => {
   const { createNode, createNodeField } = actions;
 
   if (node.internal.type !== null && node.internal.type === "StrapiSeniors") {
    //    console.log(node.projects_list);
     for (const project of node.projects_list) {
        //  console.log(project);
         if (project.gallery.length > 0) {

            for (const image of project.gallery) {
                // console.log(image);
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

