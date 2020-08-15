import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"

const projectTemplate = ({ data, pageContext, location }) => {
  const project = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <article>
        <header>
          <Link to="/projects">&larr; back to all projects</Link>
          <h1 className="title">{project.frontmatter.project}</h1>
          <time>{project.frontmatter.date}</time>
        </header>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: project.html }}
        />
        <hr />
        <footer>
          <Bio />
        </footer>
        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={`/projects/${previous.fields.slug}`} rel="prev">
                  ← {previous.frontmatter.project}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={`/projects/${next.fields.slug}`} rel="next">
                  {next.frontmatter.project} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </article>
    </Layout>
  )
}

export default projectTemplate


