import React from 'react'
import { Helmet } from 'react-helmet-async'

function SEO({titleAdd, description, url, image}) {
  const ogUrl = `www.solmuteoriaa.com${url}`

  return (
    <Helmet>
      <title>Solmuteoriaa - {titleAdd}</title>
      <meta name='description' content={description} />

      <meta property='og:type' content='website'/>
      <meta property='og:url' content={ogUrl}/>
      <meta property='og:title' content={titleAdd}/>
      <meta property='og:description' content={description}/>
      <meta property='og:image' content={image}/>

      <meta name='twitter:card' content='summary_large_image'/>
      <meta name='twitter:title' content={titleAdd}/>
      <meta name='twitter:description' content={description}/>
      <meta name='twitter:image' content={image}/>
      <meta name='twitter:creator' content='@EskoPoutanen' />
      <meta name='twitter:site' content='@EskoPoutanen' />
    </Helmet>
  )
}

export default SEO