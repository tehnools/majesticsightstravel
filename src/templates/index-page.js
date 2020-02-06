import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  image2,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div className="black-overlay"></div>
        <img className="header-logo" src="/img/logo.png" />
      </div>
      <section className="section section-gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                    <div className="tile">
                      <h1 className="title has-text-centered"
                        style={{ color: 'white' }}
                      >
                        {mainpitch.title}
                      </h1>
                    </div>
                    <div className="tile">
                      <p className="subtitle"
                        style={{ color: 'white' }}
                      >{mainpitch.description}</p>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <h4 className="has-text-weight-semibold has-text-centered	is-size-4"
                        style={{ color: "white" }}
                      >
                        {heading}
                      </h4>
                    </div>
                  </div>
                  <div
                    className="full-width-image margin-top-0"
                    style={{
                      backgroundImage: `url(${
                        !!image2.childImageSharp ? image2.childImageSharp.fluid.src : image2
                        })`,
                      backgroundPosition: `top left`,
                      backgroundAttachment: `fixed`,
                    }}
                  >
                    {/* <div className="black-overlay"></div> */}
                  </div>
                  {/* <Features gridItems={intro.blurbs} /> */}
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/packages">
                        See all packages
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        image2={frontmatter.newsletter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        newsletter{
          image
        }
      }
    }
  }
`
