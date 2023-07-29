import React from 'react'
import '../styles/default-page.scss'
import '../styles/404.scss'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const NotFoundPage = () => {
  return (
    <Layout>
    <div className='page'>
      <div className='page__header padding'>
        <h1 className='page__header__heading'>404</h1>
      </div>
      <div className='page__body'>
        <section className='content404 padding'>
          This page does not exist.
        </section>
      </div>
    </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head = () => 
<SEO 
  title='Solmuteoriaa - Page Not Found'
  description='This page does not exist. Sorry.'
  pathname='/404'
/>
