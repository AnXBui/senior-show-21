/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const path = require(`path`);

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
          }
        }
      }
    }
  }
};
var slugify = require("slugify");

// // create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allStrapiSeniors {
        edges {
          node {
            name
          }
          next {
            name
          }
          previous {
            name
          }
        }
      }
    }
  `);

  // console.log(result.data.allStrapiSeniors.edges)

  const seniorArray = result.data.allStrapiSeniors.edges;

  seniorArray.forEach((senior, index) => {
    const slug = slugify(senior.node.name);

    // function isRealValue(obj)
    //   {
    //   return obj && obj !== 'null' && obj !== 'undefined';
    //   }
    // console.log(isRealValue(`prev is ${senior.prev}`));

    console.log(senior);
    // console.log(`value of prev is "${senior.prev}"`);
    const nextName = senior.next ? senior.next.name : seniorArray[0].node.name;
    const prevName = senior.previous
      ? senior.previous.name
      : seniorArray[seniorArray.length - 1].node.name;

    createPage({
      path: `/${slug}`,
      component: path.resolve(`src/templates/senior-template.js`),
      context: {
        name: senior.node.name,
        next: nextName,
        prev: prevName,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: "/gatsby-plugin-transition-link/",
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
