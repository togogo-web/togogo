/**
 * 功能描述：测试home.js
 * 
 * home.js是app main中home模块下的store
 * 测试store时可以分别测试store中的state、getters、actions及mutations
 */
import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import { cloneDeep } from 'lodash';
import home from './home';

describe('TestSuite : test home.js', () => {

  let localVue;
  let store;

  /**
   * 在每个test开始之前创建Vue对象及vuex对象的store，以确保store的纯净
   */
  beforeEach(() => {
    localVue = createLocalVue(); // 创建Vue实例
    localVue.use(Vuex); //Vue中使用vuex
    store = new Vuex.Store(cloneDeep(home)); // 创建vuex的store
  });

  /**
   * 测试store中的state
   * 
   * 此处测试的是state的初始值
   */
  it(`Case 1: test state`, () => {
    expect(store.state.welcomeText).toEqual("");// 断言某个state的值是空字符串时使用 ""
    expect(store.state.dateText).toEqual("");
    expect(store.state.supportLinks).toEqual([]);// 断言某个state的值是空数组时使用 []
  });

  /**
   * 测试store中的getters
   * 
   * 【注意】
   *当被测试的源代码中有定时器时需要使用Jest的mock函数
   */
  it(`Case 2: test getters`, () => {
    jest.useFakeTimers();// 使用Jest模拟的定时器，此函数一定要放在被测试的定时器之前
    expect(store.getters.dateText).toEqual("");// 调用getters属性dateText（此时被测试代码中的定时器并未被执行）
    jest.runAllTimers();// 运行模拟的定时器

    jest.setTimeout(1000);// 此处的时间间隔和源代码中定时器的时间间隔一致(此处才会运行源代码中的定时器函数)
    jest.runAllTimers();// 模拟以上的定时器，即此处调用 jest.setTimeout(1000)
    expect(store.getters.dateText).not.toEqual("");// 断言执行定时器后的dateText的值不等于dateText的初始值
  });

  /**
   * 测试store中的actions和mutations
   * 
   * 【注意】
   * 因为action的触发是异步操作，测试actions时需要在test函数中使用async/await
   * 测试mutations是否执行成功，只需触发action，然后断言对应的state值是否发生变化即可，测试只需关心测试成功或失败
   */
  it(`Case 3: test actions and mutations`, async () => {
    expect(store.state.welcomeText).toEqual("");// 断言welcomeText的初始值
    await store.dispatch('getWelcomeText');// 触发action，此处需要同步action
    expect(store.state.welcomeText).not.toEqual("");//断言触发action后welcomeText的值不等于初始值时说明action提交mutations成功

    expect(store.state.supportLinks).toEqual([]);
    await store.dispatch('getSupportLinks');
    expect(store.state.supportLinks).not.toEqual([]);

  });

  /**
   * 清理或销毁测试用例中的某些状态
   */
  afterAll(() => {
    jest.clearAllTimers();// 使用Jest的mock定时器后记得清理定时器
  });

});