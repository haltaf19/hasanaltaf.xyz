const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({actions, graphql, reporter }) => {
    const { createPage } = actions

    const project = path.resolve("src/components/Projects")

    
}
