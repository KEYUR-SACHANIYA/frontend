import axios from 'axios'

var options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
  params: {countryIds: 'IN', namePrefix: 'del', limit: '5'},
  headers: {
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
    'x-rapidapi-key': '4ac5e3352fmshe6ac515ca3b8ccap1f0045jsnf0a504a87bbe'
  }
};

export const fetchLists = async (inputNumber = 0, searchValue = '') => {
    try {
        const res = await axios.request({ ...options, params: {...options.params, limit: inputNumber || '5', namePrefix: searchValue || 'del' }  })
        const data = res.data
        return data
    } catch(error) {
        return error
    }
}
export const fetchListsByName = async (name = '') => {
    try {
        const res = await axios.request({ ...options, params: {...options.params, namePrefix: name}  })
        const data = res.data
        return data
    } catch(error) {
        return error
    }
}