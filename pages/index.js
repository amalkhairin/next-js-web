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
        <title>Amal Khairin</title>
        <meta name="description" content="Amal Khairin's Website" />
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
          <Link href={{pathname: "/about"}} className={styles.username}>amalkhairin</Link>
        </div>

        <div>
          <button onClick={() => handleClick(Constant.QURAN_URL)} className={styles.btn}>Download QuranPro</button>
          <button className={styles.btn}>[Coming Soon] Url Shortener</button>
          <Link href={{pathname: "/blog"}} passHref>
            <button className={styles.btn}>Blog</button>
          </Link>
          <button onClick={() => handleClick(Constant.INSTAGRAM_H_URL)} className={styles.btn}>Hobbies</button>
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