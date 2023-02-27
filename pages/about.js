import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profile_pict from '../public/profile_pict.jpeg'
import * as Constant from '../src/constant.js'
import Link from 'next/link'


export default function About() {

  function handleClick(url){
    window.open(url,'_blank')
  }

  return (
    <div className="container">
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <main className={styles.main}>
        <div className='avatar'>
          <Image src={profile_pict} alt="Avatar" width={100} height={100} className={styles.profile}/>
        </div>
        <h2 className='pt-4 pb-3'>About Me</h2>
    
        <p className='pb-4 about-text' style={{textAlign: 'center', maxWidth: '75%'}}>
            Hi, my name is <b>Amal Khairin</b>. I&apos;m a fresh graduate with a bachelor&apos;s degree in Informatics at Telkom University. I have strong technical skills and an academic background in <b>Software Development</b> or <b>Programming</b>. I have <b>experience</b> in Android development using Flutter framework and Back-end Development using Ruby on rails and Laravel. I also have <b>skills</b> in Node.js, Express.js, Next.js, PHP, SQL, Javascript, and Python.
        </p>
        <p className='pb-2 about-text' style={{textAlign: 'center', maxWidth: '75%'}}>
            I have <b>interest</b> in Software Development, Machine Learning, and Data Visualization. My <b>hobbies</b> are Gaming, Watching Movies or Series, and Drawing.
        </p>

        <h2 className='pt-5 pb-3'>Contact Me</h2>
        <div>
          <button className='btn-icon' onClick={() => handleClick(Constant.LINKED_IN_URL)}>
            <i className="bi bi-linkedin icon icon-color"></i>
          </button>
          <button className='btn-icon' onClick={() => handleClick("mailto:"+Constant.GMAIL_ADDRESS)}>
            <i className="bi bi-envelope-fill icon icon-color"></i>
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
          2023 © Amal Khairin
        </a>
      </footer>
    </div>
  )
}