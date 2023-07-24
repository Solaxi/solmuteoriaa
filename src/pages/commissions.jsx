import React from 'react'
import '../styles/default-page.scss'
import '../styles/commissions.scss'
import Layout from '../components/layout'
import SEO from '../components/SEO'

import { FaCheck } from 'react-icons/fa6'

//import CommissionForm from '../../components/CommissionForm/CommissionForm'

const Check = () => <FaCheck color='orange' />

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
            <div className='inquiry'>
              <p>To inquire about a commission: <a href='mailto:solmuteoriaa@gmail.com'>solmuteoriaa@gmail.com</a></p>
            </div>

            <div className='container'>
              
              <div className='item right'>
                <div className='description'>
                  <h2>for a Baby</h2>
                  <p><Check /> Cute lovey gives safety and warmth.</p>
                  <p><Check />Perfect for hugging and falling asleep with.</p>
                  <p><Check />A dog. A frog. A car. Anything.</p>
                </div>
                <div className='illustration'>
                  <img src='/images/commissions-1.jpg' alt='' />
                </div>
              </div>

              <div className='item left'>
                <div className='illustration'>
                  <img src='/images/commissions-2.jpg' alt='' />
                </div>
                <div className='description'>
                  <h2>for Mood Control</h2>
                  <p><Check /> Every emotion is valid.</p>
                  <p><Check /> Express feelings with a reversible mood octopus.</p>
                  <p><Check /> Great for all ages.</p>
                </div>
              </div>

              <div className='item right'>
                <div className='description'>
                  <h2>for Playing</h2>
                  <p><Check /> Imagination enriches life.</p>
                  <p><Check /> Fun alone, better together.</p>
                  <p><Check /> Anything can be played with.</p>
                </div>
                <div className='illustration'>
                  <img src='/images/commissions-3.jpg' alt='' />
                </div>
              </div>

              <div className='item left'>
                <div className='illustration'>
                  <img src='/images/commissions-4.jpg' alt='' />
                </div>
                <div className='description'>
                  <h2>for Fun</h2>
                  <p><Check /> Never take life too seriously.</p>
                  <p><Check /> Small things can have big impacts.</p>
                  <p><Check /> A smile is precious.</p>
                </div>
              </div>

              <div className='item right'>
                <div className='description'>
                  <h2>for Laughs</h2>
                  <p><Check /> Jokes are the salt of life.</p>
                  <p><Check /> Challenge preconceptions.</p>
                  <p><Check /> Dare to take a chance.</p>
                </div>
                <div className='illustration'>
                  <img src='/images/commissions-5.jpg' alt='' />
                </div>
              </div>

              <div className='item left'>
                <div className='illustration'>
                  {/*<CommissionForm />*/}
                </div>
                <div className='description'>
                  <h2>for Commission</h2>
                  <p><Check /> Sending a message doesn't bind you to anything.</p>
                  <p><Check /> I'll get back to you within a few days.</p>
                  <p><Check /> The more details the better.</p>
                  {/*<p><Check /> Or email to <a href='mailto:solmuteoriaa@gmail.com'>solmuteoriaa@gmail.com</a></p>*/}
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
