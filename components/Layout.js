import Head from 'next/head'
import styles from '@/styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import {useRouter} from 'next/router'

function Layout({title, keywords, description, children}) {
  const router = useRouter()
  console.log('router', router)
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='descriptions' content={description}/>
        <meta name='keywords' content={keywords}/>
      </Head>
      <Header />
      {router.pathname === '/' && <Hero />}
      <div className={styles.container}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Sport News | Find Lates Sport News',
  description: 'A Website that brings you latest news abou sports',
  keywords: 'cricket, football, f1, tennis, badminton, golf',
}

export default Layout