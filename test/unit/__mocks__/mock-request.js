/**
 * 功能描述： 处理http请求的相关处理
 * 
 */
import { Request } from './request';

export const mockRequest = (url, methodType, params) => {
  let request = new Request();

  return new Promise(resolve => {
    let opts = {
      url: url,
      method: methodType,
      headers: { 'Content-Type': 'application/json' }
    };

    if(params && methodType.toUpperCase() !== 'GET') {
      opts['body'] = JSON.stringify(params);
    }

    request.request(opts).then(res => {
      resolve({
        data: res.data,
        status: res.status
      });
    });
  });

};