import React from "react"
import { Link } from "gatsby"

import Carousel from 'react-material-ui-carousel'

import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      images: allFile(filter: {
        relativeDirectory: {
          eq: "carousel"
        }
      }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        
      }
    }
  `)

  console.log(data);

  return (
    <Layout>
      <SEO title="Welcome" />
      <h1>Coming in 2021</h1>
      <div style={{ 
        marginBottom: `1.45rem` }}>
          <Carousel>
          {
              data.images.edges.map( (edge, i) => {
              return <Img fluid={edge.node.childImageSharp.fluid} />  
            } )
          }
          </Carousel>
      </div>
    </Layout>
  )
}

export default IndexPage
