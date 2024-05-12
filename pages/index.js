import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profile_pict from '../public/profile_pict.jpeg'
import * as Constant from '../src/constant.js'
import Link from 'next/link'
import { LightningBoltIcon } from "@heroicons/react/solid";


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
        {/* <a href='#' className={styles.shareIcon}>
          <i className="bi bi-share-fill icon icon-color"></i>
        </a> */}
      </div>
      <main className={styles.main}>
        <div className={styles.usernameGroup}>
          <div className='username'><b>Amal Khairin</b></div>
        </div>

        <div>
          <Link href={{pathname: "/about"}} passHref>
            <button className={styles.btn}><div>About</div></button>
          </Link>
          <Link href={{pathname: "/apps"}} passHref>
            <button className={styles.btn}><div>Portfolio</div></button>
          </Link>
          <Link href={{pathname: ""}} passHref>
            <button onClick={() => handleClick("https://medium.com/@amalkhairin")}
             className={styles.btn}>Blog</button>
          </Link>
          <Link href={{pathname: "/hobbies"}} passHref>
            <button className={styles.btn}>Hobbies</button>
          </Link>
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

        <div style={{ marginTop: 40 }}>
          <p style={{ textAlign: 'center', fontSize:9 }}>
            This website was built using the following tech-stack:
          </p>
          <p style={{ textAlign: 'center', fontSize:9 }}>
            <b>Next.js, Node.js, React, Vercel, HTML5, Tailwind CSS</b>
          </p>
        </div>

      </main>

      <footer className={styles.footer}>
        <p>
          2023 © Amal Khairin
        </p>
      </footer>
    </div>
  )
}
