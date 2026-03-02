export const GA_ID = process.env.NEXT_PUBLIC_GA_ID

// Track page views
export const pageview = (url) => {
  window.gtag("config", GA_ID, {
    page_path: url,
  })
}

// Track custom events
export const event = (action, params) => {
  window.gtag("event", action, params)
}