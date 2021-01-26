import FileSaver from 'file-saver'

export default {
    store ({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.post('/api/bookmarks/', payload)
                .then((response) => {
                    commit('retrieveItem', response.data.data);
                    resolve(response)
                })
                .catch((error) => { reject(error) })
        })
    },
    show ({ commit }, payload) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/bookmarks/${payload.id}`)
                .then((response) => {
                    commit('retrieveItem', response.data.data);
                    resolve(response)
                })
                .catch((error) => { reject(error) })
        })
    },
    index ({ commit }, payload) {
        const queryString = Object.keys(payload).map(key => key + '=' + payload[key]).join('&');
        return new Promise((resolve, reject) => {
            axios.get(`/api/bookmarks/?${queryString}`)
                .then((response) => {
                    commit('retrieveList', response.data.data);
                    commit('retrieveListMeta', response.data.meta);
                    resolve(response)
                })
                .catch((error) => { reject(error) })
        })
    },
    downloadExcelFile () {
        return new Promise((resolve, reject) => {
            axios.get('/api/bookmarks/excel', {
                responseType: 'blob'
            })
                .then((response) => {
                    FileSaver.saveAs(response.data, 'bookmarks.xlsx')
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
}
