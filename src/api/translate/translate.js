import axios from 'axios'

export const translate = (spotData) => {
    const options = {
        method: 'GET',
        url: 'https://deepl-translator1.p.rapidapi.com/translate',
        params: {text: spotData.q, target_lang: 'en-US'},
        headers: {
            'X-RapidAPI-Key': 'fc4a3e75d0msh00cc0d18e6bd9f9p1b01aajsn0b67e880f8b4',
            'X-RapidAPI-Host': 'deepl-translator1.p.rapidapi.com'
        }
    }
    
    return axios.request(options)
}