import apiClient from "./axios"

export default {
    actions: {
        fetchLimitProducts(context, data) {
            apiClient.get('/products?', {
                params: {...data}
            })
                .then((res) => {
                    console.log(res)

                    context.commit('UPDATE_LIMIT_PRODUCTS', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        searchProducts(context, data) {
            apiClient.get('/products/search?q=' + data)
                .then((res) => {
                    console.log(res)

                    context.commit('UPDATE_SEARCH_PRODUCTS', res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    },
    mutations: {
        UPDATE_LIMIT_PRODUCTS(state, payload) {
            state.limitProducts = payload
        },
        UPDATE_SEARCH_PRODUCTS(state, payload) {
            state.searchProducts = payload
        },
    },
    state: {
        limitProducts: [],
        searchProducts: []
    },
    getters: {
        getLimitProductsList(state) {
            return state.limitProducts
        },
        getSearchProductsList(state) {
            return state.searchProducts
        }
    }
}
