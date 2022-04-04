import Layout from '../../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Link from 'next/link'
import * as Constant from '../../../../src/constant.js'

export default function Post({ postData }) {
  return (
      <div className='container post-bg'>
        <div className='content'>
            <h1 className='content-title'>{postData.data.title}</h1>
            <p className='content-author pt-2'>Posted on {postData.data.created_at}</p>
            <p className='content-author pb-2' style={{color: 'blue'}}>by <a href={Constant.LINKED_IN_URL} target="_blank" rel='noreferrer'>
                {postData.data.author} </a>
            </p>
            <p className='content-body'>{postData.data.body}</p>
        </div>
      </div>
    //   <Layout>
    //         {postData.id}
    //         <br />
    //         {postData.data.title}
    //         <br />
    //         {postData.data.body}
    //     </Layout>
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
    console.log(postData)
    return {
        props: {
            postData
        }
    }
}