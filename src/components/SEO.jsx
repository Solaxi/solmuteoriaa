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

      <link rel="preconnect" href="https://fonts.googleapis.com" />
		  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
		  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />

		  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {children}
    </>
  )
}

export default SEO