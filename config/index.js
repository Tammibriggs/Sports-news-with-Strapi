const dev = process.env.NEXT_ENV !== 'production'
console.log(dev)
export const API_URL = dev ? 'http://localhost:3000' :'sports-news-with-strapi-i0ed9gugh-tammibriggs-team.vercel.app'