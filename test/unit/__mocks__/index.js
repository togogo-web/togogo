/**
 * 功能描述： 自定义的mock函数
 * 
 * 在Jest中无法运行的某些对象可以在此处mock
 * 在测试用例中使用的mock函数在此文件export即可，在测试用例中使用时只需import XXX from 'jest-mock'即可引入
 */
import { mockAxios } from './axios';
import { mockRequest } from './mock-request';

export const get = mockAxios.get.mockImplementationOnce(mockRequest);
export const post = mockAxios.post.mockImplementationOnce(mockRequest);
export const put = mockAxios.put.mockImplementationOnce(mockRequest);
export const deletes = mockAxios.delete.mockImplementationOnce(mockRequest);