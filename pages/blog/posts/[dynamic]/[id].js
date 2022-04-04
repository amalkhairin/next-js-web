import { getAllPostIds, getPostData } from '../../../../lib/posts'
import Link from 'next/link'
import * as Constant from '../../../../src/constant.js'
import Image from 'next/image'
import profile_pict from '../../../../public/profile_pict.jpeg'

export default function Post({ postData }) {
  return (
      <div className='container post-bg'>
        <div className='content'>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div className='avatar' style={{alignItems: 'center'}}>
                    <Link href={{pathname: "/"}} passHref>
                        <button>
                            <Image src={profile_pict} alt="Avatar" width='50vw' height='50vw' className='profile-blog' />
                        </button>
                    </Link>
                </div>
                <div className='px-3' style={{alignItems: 'center'}}>
                    <p className='content-author pt-2'>Posted on {postData.data.created_at}</p>
                    <p className='content-author pb-2' style={{color: 'blue'}}>by <a href={Constant.LINKED_IN_URL} target="_blank" rel='noreferrer'>
                        {postData.data.author} </a>
                    </p>
                </div>
            </div>
            <h1 className='content-title pb-2'>{postData.data.title}</h1>
            <p className='content-body'>{postData.data.body}</p>
        </div>
      </div>
  )
}

export async function getStaticPaths() {
    let paths = await getAllPostIds()
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
    const postData = await getPostData(params.dynamic)
    return {
        props: {
            postData
        }
    }
}