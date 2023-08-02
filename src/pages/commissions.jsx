import React from 'react'
import '../styles/default-page.scss'
import '../styles/commissions.scss'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import ImageElement from '../components/image'

import { FaCheck } from 'react-icons/fa6'

import CommissionForm from '../components/CommissionForm/CommissionForm'

const Check = () => <FaCheck color='orange' />

const CommissionBox = ({title, list, image, align}) => {
  const imgEl = <div className='illustration'><ImageElement img={image} classname='illustration__image' /></div>
  return (
    <div className={`item ${align}`}>
      {align === 'left' && imgEl}
      <div className='description'>
        <h2>{title}</h2>
        {list.map((item, i) => <p key={i}><Check /> {item}</p>)}
      </div>
      {align === 'right' && imgEl}
    </div>
  )
}

const CommissionsPage = () => {
  return (
    <Layout>
      <div className='page'>
        <div className='page__header padding'>
          <h1 className='page__header__heading'>Commissions</h1>
          <p className='page__header__description'>Commissions are <strong>OPEN</strong></p>
        </div>
        <div className='page__body'>
          
          <section className='commissions padding'>
            <div className='container'>
              <CommissionBox title='for a Baby'
                list={['Cute lovey gives safety and warmth.', 'Perfect for hugging and falling asleep with.', 'A dog. A frog. A car. Anything.']}
                image='/commissions-1.jpg'
                align='right' />
              
              <CommissionBox title='for Mood Control'
                list={['Every emotion is valid.', 'Express feelings with a reversible mood octopus.', 'Great for all ages.']}
                image='/commissions-2.jpg'
                align='left' />

              <CommissionBox title='for Playing'
                list={['Imagination enriches life.', 'Fun alone, better together.', 'Anything can be played with.']}
                image='/commissions-3.jpg'
                align='right' />

              <CommissionBox title='for Fun'
                list={['Never take life too seriously.', 'Small things can have big impacts.', 'A smile is precious.']}
                image='/commissions-4.jpg'
                align='left' />

              <CommissionBox title='for Laughs'
                list={['Jokes are the salt of life.', 'Challenge preconceptions.', 'Dare to take a chance.']}
                image='/commissions-5.jpg'
                align='right' />

              <div className='item left' id='form'>
                <div className='illustration'>
                  <CommissionForm />
                </div>
                <div className='description'>
                  <h2>for Commission</h2>
                  <p><Check /> Sending a message doesn't bind you to anything.</p>
                  <p><Check /> I'll get back to you within a few days.</p>
                  <p><Check /> The more details the better.</p>
                  <p><Check /> Or throw a msg to <a href='mailto:solmuteoriaa@gmail.com'>solmuteoriaa@gmail.com</a>.</p>
                </div>
              </div>


            </div>
           </section>

        </div>
      </div>
    </Layout>
  )
}

export default CommissionsPage

export const Head = () => 
<SEO 
  title='Solmuteoriaa - Commission a Crochet Project'
  description='Commission a unique huggable soft gift that recipient would never expect! Guaranteed to be the only one of its kind!'
  pathname='/commissions'
/>
