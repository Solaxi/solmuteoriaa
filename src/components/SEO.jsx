import React from 'react'
import { Helmet } from 'react-helmet-async'

function SEO({title, description, image}) {
  const ogImage = `${window.location.protocol}//${window.location.hostname}${image}`

  return (
    <Helmet>
      <title>Solmuteoriaa - {title}</title>
      <meta name='description' content={description} />

      <meta property='og:type' content='website'/>
      <meta property='og:url' content={window.location.href}/>
      <meta property='og:title' content={title}/>
      <meta property='og:description' content={description}/>
      <meta property='og:image' content={ogImage}/>

      <meta name='twitter:card' content='summary_large_image'/>
      <meta name='twitter:title' content={title}/>
      <meta name='twitter:description' content={description}/>
      <meta name='twitter:image' content={ogImage}/>
      <meta name='twitter:creator' content='@EskoPoutanen' />
      <meta name='twitter:site' content='@EskoPoutanen' />
    </Helmet>
  )
}

export default SEO