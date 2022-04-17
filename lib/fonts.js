import dataJson from '../src/font_db.json'

export async function getAllFontIds() {
    var data = dataJson.fonts
    // const ids = data.map((data) => data.title)
    // console.log(ids)

    return data.map(d => {
        return {
            params: {
                dynamic: d.id,
                id: d.name
            }
        }
    })
}

export async function getFontData(id) {
    const key = Object.keys(dataJson.fonts).find(font => dataJson.fonts[font].id === id)
    var data = dataJson.fonts[key]
    // Combine the data with the id
    return {
        id,
        data
    }
}