import React from 'react'
import '../styles/default-page.scss'
import SEO from '../components/SEO'
import Layout from '../components/layout'
import CrochetPatternsList from '../components/CrochetPatterns/CrochetPatternsList'

const CrochetPatternsPage = () => {
  return (
    <Layout>
      <div className='page'>
        <div className='page__header padding'>
          <h1 className='page__header__heading'>Crochet Patterns</h1>
          <p className='page__header__description'>All patterns are designed by me</p>
        </div>
        <div className='page__body'>
           <CrochetPatternsList frontpage={false} />
        </div>

      </div>
    </Layout>
  )
}

export default CrochetPatternsPage

export const Head = () => 
<SEO 
  title='Solmuteoriaa - Free Crochet Patterns'
  description='Free Crochet Patterns for cute plushies and unconventional ideas. All patterns are designed by me.'
  pathname='/crochet-patterns'
/>
