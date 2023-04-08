import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '50141f7d253c45cf81c95c10f03eacfa',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Hey,this is Monika 👋',
  domain: process.env.NEXT_PUBLIC_DOMAIN || 'monikarajput.xyz',
  author: 'Monika Rajput',
  // open graph metadata (optional)
  description: '🚀 Data Engineer',

  // social usernames (optional)
  twitter: 'mounicarajput',
  github: 'mounicarajput',
  linkedin: 'mounicarajput',
  //newsletter: 'http://newsletter.amanin.tech', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //

  //pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
   navigationStyle: 'custom',
   navigationLinks: [
   {
       title: ' blog',
       pageId: '24e8e3b2631a4c1e900e6e1b0ef98a0d'
     },
    {
       title: '🛠 Work',
       pageId: '4645e64954174d97915765ce29dcedad'
     },
{
       title: '🧭 Books',
       pageId: 'a2ecd41f0744464cac1d3e634b756178'
     },
{
       title: '📞 Connect',
       pageId: 'f00f555c4cf94d609aff0a3d784f1407'
     }]

})
