import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const IndexPage = () => {
  return(
    <StaticQuery
      query={query}
      render={data => (
        <ul>
          {data.allStrapiProject.edges.map(project => (
            <li key={project.node.strapiId}>{project.node.name}</li>
          ))}
        </ul>
      )}
    />
  )
}

const query = graphql`
  {
    allStrapiProject {
      edges {
        node {
          name
          strapiId
          url
          img_url
          description
          programming_languages {
            name
          }
        }
      }
    }
  }
`

export default IndexPage