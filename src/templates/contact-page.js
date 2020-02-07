import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export const ContactPageTemplate = ({ title, location, email, contacts }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <h1
            className="title is-size-1 has-text-weight-bold is-bold-light has-text-white has-text-centered"
          >
            {title}
          </h1>
          <div class="columns">
            <div class="column is-4">
              <div class="card contact card-equal-height has-text-centered">
                <header class="card-header">
                  <p class="card-header-title title is-4 has-content-centered">
                    Location
                  </p>
                </header>
                <div class="card-content is-centered">
                  {location}
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card contact card-equal-height has-text-centered">
                <header class="card-header">
                  <p class="card-header-title title is-4 has-content-centered">
                    Email
                      </p>
                </header>
                <div class="card-content is-centered">
                  {email}
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card contact card-equal-height has-text-centered">
                <header class="card-header">
                  <p class="card-header-title title is-4 has-content-centered">
                    Phone
                      </p>
                </header>
                <div class="card-content is-centered">
                  <div class="rows">
                    {
                      contacts.map(contact => <div className="row">
                        {contact.name} : {contact.phoneNumber}
                      </div>)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string,
  email: PropTypes.string,
  contacts: PropTypes.object
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ContactPageTemplate
        title={frontmatter.title}
        location={frontmatter.location}
        email={frontmatter.email}
        contacts={frontmatter.contacts}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage {
  markdownRemark(frontmatter: {templateKey: {eq: "contact-page"}}) {
    frontmatter {
      title
      location
      email
      contacts {
        name
        phoneNumber
        email
      }
    }
  }
}
`
