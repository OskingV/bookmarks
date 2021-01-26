export default {
    retrieveList (state, list) {
        state.list = list
    },
    retrieveListMeta (state, listMeta) {
        listMeta.links.shift();
        listMeta.links.pop();
        state.listMeta = listMeta
    },
    retrieveItem (state, item) {
        state.item = item
    }
}
