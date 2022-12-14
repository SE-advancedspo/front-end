import axios from 'axios'

const init = axios.create({
    url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': '36936d3ebfmsh2bde9f4429d27dfp1f60f4jsnf43cc5b71a84',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
});

export const translate = (spotData) => {
    console.log(spotData)
    return init.post(spotData)
}