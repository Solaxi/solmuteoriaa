// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {

  function createPatternPage(pattern, patternIdPrefix) {
    actions.createPage({
      path: `/crochet-patterns/${pattern.patternId}`,
      component: require.resolve(`./src/templates/crochet-pattern.jsx`),
      context: { 
        patternId: `${patternIdPrefix}${pattern.patternId}`, 
        title: pattern.title,
        description: pattern.cardDescription,
        image: pattern.titleImg
      }
    })
  }

  //General crochet patterns
  const allData = await graphql(`
    query CrochetPatterns {
      allCrochetpatternsJson {
        nodes {
          patternId
          title
          titleImg
          cardDescription
        }
      }
    }
  `)
  allData.data.allCrochetpatternsJson.nodes.forEach(pattern => createPatternPage(pattern, ''))
  
  //European flags crochet patterns
  const flagData = await graphql(`
    query CrochetPatternsFlags {
      allEuropeanflagsJson {
        nodes {
          patternId
          title
          titleImg
          cardDescription
        }
      }
    }
  `)
  flagData.data.allEuropeanflagsJson.nodes.forEach(pattern => createPatternPage(pattern, 'europeanflags/')) 

    //Hey duggee badges crochet patterns
  const badgeData = await graphql(`
    query CrochetPatternsHeyDuggeeBadges {
      allHeyDuggeeBadgesJson {
        nodes {
          patternId
          title
          titleImg
          cardDescription
        }
      }
    }
  `)
  badgeData.data.allHeyDuggeeBadgesJson.nodes.forEach(pattern => createPatternPage(pattern, 'hey-duggee-badges/')) 
}