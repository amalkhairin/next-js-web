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
            Hi, my name is <b>Amal Khairin</b>.I have strong technical skills and an academic background in <b>Software Development</b> or <b>Programming</b>. I have <b>experience</b> in Android development using Flutter framework and Full-stack Development using Laravel and Codeigniter. I also have <b>skills</b> in Node.js, Express.js, Next.js, PHP, SQL, Javascript, Ruby on Rails and Python.
        </p>
        <p className='pb-2 about-text' style={{textAlign: 'center', maxWidth: '75%'}}>
            I have <b>interest</b> in Software Development, Machine Learning, and Data Visualization. My <b>hobbies</b> are Gaming, Watching Movies or Series, and Drawing.
        </p>

        <h2 className='mt-5 mb-3'>Experiences (latest)</h2>

        <div class="timeline">
            <div class="time-container left">
                <div class="time-content">
                    <h2>February - August 2022</h2>
                    <h4 style={{ color: '#474e5d' }} className='mt-2'><strong>Backend Engineer - Apprenticeship</strong></h4>
                    <h6><small>Yayasan Anak Bangsa Bisa (Gen. GIGIH 2.0)</small></h6>
                    <p className='mt-2' style={{ fontSize:10 }}><small>Yayasan Anak Bangsa Bisa (YABB) is the impact-driven non-profit organization of the GoTo Group, established to enable changemakers who are committed to breaking traditional ways of problem solving so everyone can ThriveForward, ThriveGreener, and ThriveTogether</small></p>
                    <p className='mt-3' style={{ fontSize:10 }}><b>Responsibility:</b></p>
                    <ul style={{ fontSize:10 }}>
                      <li> • Studied backend engineering using Ruby on Rails framework.</li>
                      <li> • Develop a backend product based on the project capstone scheme.</li>
                      <li> • Responsible for creating API functions of the project application.</li>
                    </ul>
                    <a href='../apps' className='btn btn-sm btn-primary mt-3'>Product: Library App</a>
                </div>
            </div>
            <div class="time-container right">
                <div class="time-content">
                    <h2>July - August 2021</h2>
                    <h4 style={{ color: '#474e5d' }} className='mt-2'><strong>Android Developer - Internship</strong></h4>
                    <h6><small>Indonesian Institute of Sciences (LIPI)</small></h6>
                    <p className='mt-2' style={{ fontSize:10 }}><small>P21 LIPI is a national research institution and scientifict research and development</small></p>
                    <p className='mt-3' style={{ fontSize:10 }}><b>Responsibility:</b></p>
                    <ul style={{ fontSize:10 }}>
                      <li> • Responsible for making UI-based prototype applications and application design architectures.</li>
                      <li> • Responsible for making application frontend.</li>
                      <li> • Responsible for performing unit tests on applications.</li>
                      <li> • Responsible for creating apps documentation.</li>
                    </ul>
                </div>
            </div>
        </div>

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
