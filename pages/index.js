import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profile_pict from '../public/profile_pict.jpeg'
import * as Constant from '../src/constant.js'
import Link from 'next/link'


export default function Home() {

  function handleClick(url){
    window.open(url,'_blank')
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <a href='#' className={styles.shareIcon}>
          <i className="bi bi-share-fill icon icon-color"></i>
        </a>
      </div>
      <main className={styles.main}>
        <div className='avatar'>
          <Image src={profile_pict} alt="Avatar" width='100vw' height='100vw' className={styles.profile} />
        </div>
        <div className={styles.usernameGroup}>
          <a href='#' className={styles.username}>amalkhairin</a>
        </div>

        <div>
          <button onClick={() => handleClick(Constant.QURAN_URL)} className={styles.btn}>Download QuranPro</button>
          <button className={styles.btn}>Free Url Shortener</button>
          <Link href={{pathname: "/blog"}} passHref>
            <button className={styles.btn}>Blog</button>
          </Link>
          <button className={styles.btn}>Hobbies</button>
        </div>

        <div>
          <button className='btn-icon' onClick={() => handleClick(Constant.LINKED_IN_URL)}>
            <i className="bi bi-linkedin icon icon-color"></i>
          </button>
          <button className='btn-icon' onClick={() => handleClick(Constant.INSTAGRAM_URL)}>
            <i className="bi bi-instagram icon icon-color"></i>
          </button>
          <button className='btn-icon' onClick={() => handleClick(Constant.GITHUB_URL)}>
            <i className="bi bi-github icon icon-color"></i>
          </button>
        </div>

        {/* <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p> */}

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className="shadow-cyan-500/50">
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © Amal Khairin
        </a>
      </footer>
    </div>
  )
}
