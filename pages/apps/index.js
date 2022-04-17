import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import * as Constant from '../../src/constant.js'
import Link from 'next/link'
import quran_thumbnail from '../../public/quran_thumbnail.png'
import { useRouter } from 'next/router'
import dataJson from '../../src/db.json'

export default function Apps() {

    function handleClick(url){
        window.open(url,'_blank')
    }

    return (
        <div className='container'>
            <Head>
                <title>Apps</title>
                <meta name="description" content="Amal Khairin's Apps" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.mainBlog}>
                <div className='p-2'>
                <h1 className='mb-2 fw-bold blog-header'>Apps</h1>
                <div className='col p-2'>
                    <div className='row'>
                        <div className="card m-2" style={{width: '12rem'}}>
                            <Image src={quran_thumbnail} alt="Avatar"  className="card-img-top" />
                            <div className="card-body">
                                <h2 className="card-title">QuranPro</h2>
                                <h5 className="card-text pb-2">Aplikasi Al-Quran dan Terjemahan bahasa Indonesia</h5>
                                <button onClick={() => handleClick(Constant.QURAN_URL)} className="btn btn-primary">Download</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <p>
                Copyright © Amal Khairin
                </p>
            </footer>
        </div>
    )
}