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
}
