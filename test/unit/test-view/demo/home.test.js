/**
 * 功能描述：测试app main中的视图home.vue
 * 
 * 视图的测试只需专注action、事件等是否被触发，以及页面中的样式等
 */
import { shallowMount, createLocalVue} from '@vue/test-utils';
import Vuex from 'vuex';
import homeView from 'main/view/home/home';

describe("TestSuite : test home.vue", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  let store;

  /**
   * 视图对应的store的modules请自行mock
   * 只需mock getters、actions HTML事件等
   */
  const home = {
    namespaced: true,
    getters: {
      dateText: jest.fn()
    },
    actions: {
      getWelcomeText: jest.fn(),
      getSupportLinks: jest.fn()
    }
  };

  /**
   * 在每个test之前实例化store
   * 
   */
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        home
      }
    });
  });

  /**
   * 测试getters和actions是否在页面中触发
   */
  it(`Case 1: test getters and actions called`, () => {
    shallowMount(homeView, { store, localVue });// 挂载vue组件

    /**
     * 断言在页面中触发的getters
     */
    expect(home.getters.dateText).toHaveBeenCalled();
    /**
     * 断言在页面中触发的actions
     */
    expect(home.actions.getWelcomeText).toHaveBeenCalled();
    expect(home.actions.getSupportLinks).toHaveBeenCalled();
  });

  /**
   * 测试页面中的HTML
   * 
   * 【注意】
   *  使用shallowMount挂载的组件实际并未被渲染，所以动态生成的HTML是无法被获取的
   */
  it(`Case 2: test html style`, () => {
    let wrapper = shallowMount(homeView, { store, localVue });

    expect(wrapper.findAll('.index_info').length).toBe(2);
    expect(wrapper.find('.index_link').contains('a')).toBeFalsy();

  });

});

