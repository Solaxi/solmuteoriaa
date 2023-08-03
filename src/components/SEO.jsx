import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

export const SEO = ({ title, description, image, pathname, children }) => {
  const { title: defaultTitle, 
          description: defaultDescription, 
          image: defaultImage, 
          siteUrl, 
          twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image ? `${siteUrl}/images${image}` : `${siteUrl}/images${defaultImage}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }
  
  return (
    <>
      <meta charSet='UTF-8' />

      <title>{seo.title}</title>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:url' content={seo.url} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      <meta name='twitter:creator' content={seo.twitterUsername} />
      <meta name="twitter:site" content={seo.twitterUsername} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />

		  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {children}
    </>
  )
}

export default SEO