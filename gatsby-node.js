// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
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

  result.data.allCrochetpatternsJson.nodes.forEach(pattern => {
    actions.createPage({
      path: `/crochet-patterns/${pattern.patternId}`,
      component: require.resolve(`./src/templates/crochet-pattern.jsx`),
      context: { 
        patternId: pattern.patternId, 
        title: pattern.title,
        description: pattern.cardDescription,
        image: pattern.titleImg
      }
    })
  })
  
  const result2 = await graphql(`
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

  result2.data.allEuropeanflagsJson.nodes.forEach(pattern => {
    actions.createPage({
      path: `/crochet-patterns/${pattern.patternId}`,
      component: require.resolve(`./src/templates/crochet-pattern.jsx`),
      context: { 
        patternId: `europeanflags/${pattern.patternId}`, 
        title: pattern.title, 
        description: pattern.cardDescription,
        image: pattern.titleImg
      }
    })
  })
}