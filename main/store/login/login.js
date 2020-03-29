const login = {
	namespaced: true,
	state: {
		isLogin: false
	},
	getters: {
		isLogin: state => {
			return state.isLogin;
		}
	},
	mutations: {
		GET_IS_LOGIN (state, data) {
			state.isLogin = data;
		}
	},
	actions: {
		getIsLogin: ({ commit }, isLogin) => {
			commit('GET_IS_LOGIN', isLogin);
		}
	}
};

export default login;