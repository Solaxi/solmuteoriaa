import React from 'react'
import '../styles/default-page.scss'
import '../styles/esko.scss'
import Layout from '../components/layout'
import SEO from '../components/SEO'

const EskoPage = () => {
  return (
    <Layout nonav='true' nofooter='true'>
    <div className='page'>
      <div className='page__header padding'>
        <h1 className='page__header__heading'>Esko Poutanen</h1>
      </div>
      <div className='page__body'>
        <section className='page__body__content padding'>
          This page is about Esko
        </section>
      </div>
    </div>
    </Layout>
  )
}

export default EskoPage

export const Head = () => 
<SEO 
  title='Solmuteoriaa - About Esko'
  description={`Solmuteoriaa is a website dedicated to crochet created by Esko Poutanen, a ${new Date().getFullYear()-1983}-year-old dad from Finland.`}
  pathname='/esko'
/>
