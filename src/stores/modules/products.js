const state = {
	isLoading: true,
	productList: [
		{
			id: 1,
			title: 'macbook Retina 13.3" ME662 (2013)',
			thumbnail_url: 'http://media.bizwebmedia.net//sites/72783/data/images/2016/2/4713895macbook_pro_retina.png',
			price: 999.9,
			quantity: 10,
			category: "macbook",
			description: "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM"
		}
	]
}

const mutations = {
	'UPDATE_PRODUCT_LIST' (state, productList) {
		state.productList = productList;
		state.isLoading = false;
	}
}

const actions = {

}

const getters = {
	products: (state) => {
		return state.productList;
	},
	isProductLoading: (state) => {
		return state.isLoading;
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}