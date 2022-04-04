import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import * as Constant from '../../src/constant.js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import dataJson from '../../src/db.json'

export default function Posts({ externalPostData }) {
    const router = useRouter()
    const {
        query: { id },
    } = router
    return (
        <div className='container'>
            <main className={styles.mainBlog}>
            <div className='p-2'>
            <h1 className='mb-2'>Blog</h1>
            <div className='row p-2'>
            {externalPostData.map((data) => {
            return (
                <div className='card mb-2 mt-2' key={data.id}>
                    <Link href={{pathname: "/blog/posts/[dynamic]/[id]", query: {dynamic: data.id, id: data.title}}} passHref>
                        <div className="card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <h6 className="card-subtitle mb-2 text-muted">Posted on {data.created_at}</h6>
                            <p className="card-text" style={{fontSize: '1rem'}}>{data.excerpt}</p>
                        </div>
                    </Link>
                </div>
            );
            })}
            </div>
            </div>
            </main>
            <footer className={styles.footer}>
                <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Copyright © Amal Khairin
                </a>
            </footer>
        </div>
    )
}

export async function getStaticProps() {
    return {
        props: {
            externalPostData: dataJson.posts,
        },
    };
}