import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import * as Constant from '../../src/constant.js'
import Link from 'next/link'

export default function Apps() {

    function handleClick(url){
        window.open(url,'_blank')
    }

    return (
        <div className='container'>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Amal Khairin's Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.mainBlog}>
                <div className='p-2'>
                <h1 className='mb-2 fw-bold blog-header'>Portfolio</h1>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5'>
                    <div className='col col-auto'>
                        <div className="card m-2" >
                            <div className='card-header'>
                                <h3 style={{ fontWeight: 'bold' }}>QuranPro</h3>
                            </div>
                            <div className="card-body">
                                <img src="quran_thumbnail.png" width={200} height={100} alt="Avatar" className="card-img-top mb-3" style={{objectFit: 'cover', height:100, width:300}} />
                                <div className='row row-cols-3 mb-2 mx-auto'>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#1D77CA', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>Flutter</span>
                                        </div>
                                    </div>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#00BF71', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>Android</span>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-text pb-2">Aplikasi Al-Quran dan Terjemahan bahasa Indonesia</h5>
                                <button onClick={() => handleClick(Constant.QURAN_URL)} className="btn btn-primary">Download</button>
                            </div>
                        </div>
                    </div>

                    <div className='col col-auto'>
                        <div className="card m-2" >
                            <div className='card-header'>
                                <h3 style={{ fontWeight: 'bold' }}>Kawa&apos;s Cakes and Cookies</h3>
                            </div>
                            <div className="card-body">
                                <img src="larav_thumbnail.png" width={200} height={100} alt="Avatar" className="card-img-top mb-3" style={{objectFit: 'cover', height:100, width:300}} />
                                <div className='row row-cols-3 mb-2 mx-auto'>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#D13F3F', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>Laravel</span>
                                        </div>
                                    </div>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#6C63FF', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>PHP</span>
                                        </div>
                                    </div>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#F15A24', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>HTML5</span>
                                        </div>
                                    </div>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#00BF71', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>Frontend</span>
                                        </div>
                                    </div>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#F9A826', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>Backend</span>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-text pb-2">Website for Kawa&apos;s Cakes and Cookies shop</h5>
                                <button onClick={() => handleClick(Constant.KAWA_URL)} className="btn btn-primary">Visit Website</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col col-auto'>
                        <div className="card m-2" >
                            <div className='card-header'>
                                <h3 style={{ fontWeight: 'bold' }}>Library App</h3>
                            </div>
                            <div className="card-body">
                                <img src="ruby_thumbnail.png" width={200} height={100} alt="Avatar" className="card-img-top mb-3" style={{objectFit: 'cover', height:100, width:300}} />
                                <div className='row row-cols-3 mb-2 mx-auto'>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#D13F3F', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>Ruby on Rails</span>
                                        </div>
                                    </div>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#D13F3F', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>Ruby</span>
                                        </div>
                                    </div>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#F9A826', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>Backend</span>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-text pb-2">A backend-side application that provides an API for library app</h5>
                                <button onClick={() => handleClick(Constant.RUBY_URL)} className="btn btn-primary">Documentation</button>
                            </div>
                        </div>
                    </div>

                    <div className='col col-auto'>
                        <div className="card m-2" >
                            <div className='card-header'>
                                <h3 style={{ fontWeight: 'bold' }}>Amal Khairin&apos;s Website</h3>
                            </div>
                            <div className="card-body">
                                <img src="next_thumbnail.png" width={200} height={100} alt="Avatar" className="card-img-top mb-3" style={{objectFit: 'cover', height:100, width:300}} />
                                <div className='row row-cols-3 mb-2 mx-auto'>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#1D1D1D', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>NextJs</span>
                                        </div>
                                    </div>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#F9A826', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>Javascript</span>
                                        </div>
                                    </div>
                                    <div className='col col-auto p-0 m-1'>
                                        <div className='card' style={{ padding: 6, background: '#00BF71', color: 'white' }}>
                                            <span style={{ fontSize:9 }}>Frontend</span>
                                        </div>
                                    </div>
                                </div>
                                <h5 className="card-text pb-2">A backend-side application that provides an API for library app</h5>
                                <button onClick={() => handleClick(Constant.NEXT_URL)} className="btn btn-primary">Visit Website</button>
                            </div>
                        </div>
                    </div>
                </div>
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