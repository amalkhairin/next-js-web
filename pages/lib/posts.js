import dataJson from '../../src/db.json'

export async function getAllPostIds() {
    var data = dataJson.posts
    // const ids = data.map((data) => data.title)
    // console.log(ids)

    return data.map(d => {
        return {
            params: {
                dynamic: d.id,
                id: d.title
            }
        }
    })
}

export async function getPostData(id) {
    const key = Object.keys(dataJson.posts).find(post => dataJson.posts[post].id === id)
    var data = dataJson.posts[key]
    // Combine the data with the id
    return {
        id,
        data
    }
}