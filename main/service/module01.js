/**
 * 模块ajax数据服务
 */
import axios from 'main/common/ajax';

/**
* @name getList
* @params null
*/
export const getList = () => {
	return axios.ajax('list', 'get', null);
};

/**
 * @name getDetail
 * @params id
 */
export const getDetail = (params) => {
	return axios.ajax('detail', 'get', params);
};
