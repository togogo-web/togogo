/**
 * 功能描述：覆写app main中store/home/home.js
 * 
 */

/**
 * Jest 测试使用注意事项：
 * 1.Jest中无法使用axios等ajax类库，需要替换为mock函数，只需从'jest-mock'引入get、post等函数
 * 2.Jest运行时无法获取定时器中运行的状态，需要在测试用例中mock定时器，具体见home.test.js 'Case 2: test getters'
 * 3.Jest中无法使用某些BOM、DOM对象，例如window、document、canvas、video等，所以在测试用例中不能使用这些对象
 * 
 */
import { get } from 'jest-mock';

const home = {
  namespaced: true,
  state: {
    welcomeText: '',
    dateText: '',
    supportLinks: []
  },
  getters: {
    dateText: state => {
      setTimeout(() => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
        let day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
        let hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
        let minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
        let seconds = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;
        state.dateText = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }, 1000);

      return state.dateText;
    }
  },
  mutations: {
    GET_WELCOME_TEXT(state, data) {
      state.welcomeText = data;
    },
    GET_SUPPORT_LINKS(state, data) {
      state.supportLinks = data;
    }
  },
  actions: {
    getWelcomeText: ({ commit }) => {
      let data = '欢迎使用kfront-base！';
      commit('GET_WELCOME_TEXT', data);
    },
    /**
     * jest测试actions时需要注意：
     * 有ajax等异步操作时，请在actions函数外使用async/await
     */
    getSupportLinks: async ({ commit }) => {
      await get(`http://localhost:8080/main/static/link.json`).then(res => {
        commit('GET_SUPPORT_LINKS', res.data.links);
      });
    }
  }
};

export default home;