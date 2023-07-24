import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import '../../styles/crochet-patterns-list.scss'
import Button from '../../components/Button/ButtonElement'
import Card from './CrochetPatternCard'

const showOnFrontpage = [
  'hey-duggee-frog',
  'snowman',
  'mouse',
  'angry-birds-stella'
]

const CrochetPatternsList = ({frontpage}) => {
  const crochetPatternsListData = useStaticQuery(graphql`
    query CrochetPatternsListQuery {
      allCrochetpatternsJson {
        nodes {
          patternId
          title
          cardDescription
          cardImg
          titleImgAlt
        }
      }
    }
  `)

  return (
    <section className='services padding'>
      <h2 className='services__heading'>
        {frontpage ? 'LATEST'  : 'FREE'} CROCHET PATTERNS
      </h2>
        <div className='services__container'>
          {
          !frontpage 
            ? crochetPatternsListData.allCrochetpatternsJson.nodes.map(item => <Card key={item.patternId} pattern={item} />)
            : showOnFrontpage.map(fp => 
                crochetPatternsListData.allCrochetpatternsJson.nodes.map(item => 
                  item.patternId === fp && <Card key={item.patternId} pattern={item} />
                )
              )
          }

        </div>
      
      {frontpage && <Button to='/crochet-patterns' title='Show all free crochet patterns' subclass='large' />}

    </section>
  )
}

export default CrochetPatternsList