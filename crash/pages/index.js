import Head from 'next/head'
import Image from 'next/image'
import Article from '../component/Article';
import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  console.log('helo');
  console.log(articles);
  return (
    <div className={styles.csontainer}>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, voluptatibus.
<Article articles={articles}/>

    </div>

  )
}


export const getStaticProps =async ()=>{
  const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props:{
      articles
    }
  }
}