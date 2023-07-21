import React from 'react'
import { Helmet } from 'react-helmet-async'

function SEO({title, description, image}) {
  const host = import.meta.env.VITE_HOST_URL
  return (
    <Helmet>
      <title>Solmuteoriaa - {title}</title>
      <meta name='description' content={description} />

      <meta property='og:title' content={`Solmuteoriaa - ${title}`}/>
      <meta property='og:description' content={description}/>
      <meta property='og:image' content={`${host}${image}`}/>

      <meta name='twitter:title' content={`Solmuteoriaa - ${title}`}/>
      <meta name='twitter:description' content={description}/>
      <meta name='twitter:image' content={`${host}${image}`}/>
    </Helmet>
  )
}

export default SEO