export async function getAllPostIds() {
    const apiURL = "http://localhost:3001/posts";
    const response = await fetch(apiURL);
    const data = await response.json();
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
    const apiURL = "http://localhost:3001/posts/" + id;
    console.log(apiURL)
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log("sss ",data)
    // Combine the data with the id
    return {
        id,
        data
    }
}