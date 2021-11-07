import Layout from '@/components/Layout'
import {API_URL} from '@/config/index'
import NewsItem from '@/components/NewsItem'
import Link from 'next/link'

export default function Home({news}) {
  
  return (
    <div>
      <Layout>
        <h1>Latest News</h1>
        {news.length === 0 && <h3>No News</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item}/>
        ))}
        {news.length > 0 && (
          <Link href='/news'>
            <a className='btn-secondary'>View all news</a>
          </Link>
        )}
      </Layout>
    </div>
  )
}

// export async function getServerSideProps(){
//   const res = await fetch(`${API_URL}/api/news`)
//   const news = await res.json()

//   return {
//     props: {new s},
//   }
// }

export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/news`)
  const news = await res.json()

  return {
    props: {news: news.slice(0, 5)},
    // check if there is a change in the data in every one second
    revalidate: 1
  }
}

