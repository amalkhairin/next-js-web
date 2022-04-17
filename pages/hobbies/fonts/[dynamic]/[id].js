import { getAllFontIds, getFontData } from '../../../../lib/fonts'
import Link from 'next/link'
import Head from 'next/head'
import * as Constant from '../../../../src/constant.js'
import Image from 'next/image'

export default function Font({ fontData }) {

    function handleClick(url){
        window.open(url,'_blank')
    }
  return (
      <div>
      <Head>
        <title>{fontData.data.name} | {fontData.data.author}</title>
        <meta name="description" content={fontData.data.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className='container post-bg'>
        <div className='content'>
            <h1 className='content-title pb-2'>{fontData.data.name}</h1>
            <Link href={{pathname: "/"}} passHref>
                <p className='content-author pb-2 link' style={{color: 'blue'}}>
                    by {fontData.data.author}
                </p>
            </Link>
            <div className='content-body'>
                <button className='btn btn-success' onClick={() => handleClick(fontData.data.url)}>
                    Download
                </button>
                <blockquote>
                    <b><i>Note of the author</i></b> <br></br>
                    <p>{fontData.data.license_note}</p>
                </blockquote>
                <blockquote>
                    If you want DONATE click here {fontData.data.paypal_donate_url  } <br></br>
                    I really appreciate your donations. <br></br>
                </blockquote>
                {fontData.data.pictures.map((data,i) => {
                    return (
                        <div className='row p-2' key={i}>
                            <div style={{ position: "relative", width: "100%", paddingBottom: "20%"}} >
                            <Image
                                alt="font preview"
                                src={data}
                                layout="fill"
                                objectFit="contain" // Scale your image down to fit into the container
                            />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
    let paths = await getAllFontIds()
    // console.log(paths)
    return {
        paths: paths,
        fallback: false
    }
    // paths = paths.map((p) => {
    //     params: {
    //         dynamic: paths[0].params.dynamic,
    //         id: paths[0].params.id
    //     }
    // })
    // console.log(paths)
    // return {
    //     paths,
    //     fallback: false
    // }
}

export async function getStaticProps({ params }) {
    // console.log(params)
    const fontData = await getFontData(params.dynamic)
    return {
        props: {
            fontData
        }
    }
}