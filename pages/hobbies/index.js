import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import * as Constant from '../../src/constant.js'
import Link from 'next/link'
import quran_thumbnail from '../../public/quran_thumbnail.png'
import dribbble_cover from '../../public/dribbble_cover.jpg'
import { useRouter } from 'next/router'
import dataJson from '../../src/font_db.json'

export default function Hobbies({ externalPostData }) {

    function handleClick(url){
        window.open(url,'_blank')
    }

    const router = useRouter()
    const {
        query: { id },
    } = router

    return (
        <div className='container'>
            <Head>
                <title>Hobbies</title>
                <meta name="description" content="Amal Khairin's Hobbies" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.mainBlog}>
                <div className='p-2'>
                <h1 className='mb-2 fw-bold blog-header'>Hobbies</h1>
                <div className='col p-2'>
                    <div className='pt-4 pb-2'><h3><b>Galleries</b></h3></div>
                    <div className='row'>
                        <div className="card m-2" style={{width: '12rem'}}>
                            <div className="card-body">
                                <h2 className="card-title">Instagram</h2>
                                <h6 className="card-text pb-2">Digital Illustration Galleries</h6>
                                <button className="btn btn-primary">Open</button>
                            </div>
                        </div>
                        <div className="card m-2" style={{width: '12rem'}}>
                            <div className="card-body">
                                <h2 className="card-title">Dribbble</h2>
                                <h6 className="card-text pb-2">Logo Design portofolio</h6>
                                <button onClick={() => handleClick(Constant.DRIBBBLE_URL)} className="btn btn-primary">Open</button>
                            </div>
                        </div>
                    </div>
                    <div className='pt-4 pb-2'><h3><b>Fonts</b></h3></div>
                    <div className='row'>
                    {externalPostData.map((data) => {
                    return (
                            <div className="card m-2" style={{width: '12rem'}} key={data.id}>
                                <div className="card-body">
                                    <h2 className="card-title">{data.name}</h2>
                                    <h6 className="card-text pb-2">{data.excerpt}</h6>
                                    <Link href={{pathname: "/hobbies/fonts/[dynamic]/[id]", query: {dynamic: data.id, id: data.name}}} passHref>
                                        <button className="btn btn-primary">Open</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
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

export async function getStaticProps() {
    return {
        props: {
            externalPostData: dataJson.fonts,
        },
    };
}
