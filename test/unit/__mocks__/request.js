/**
 * 功能描述：使用node request模块完成mock HTTP请求
 */
import request from 'request';

export class Request {

  constructor() {}

  request(option) {
    return new Promise((resolve, reject) => {
      request(option, function (err, res) {
        resolve({
          status: res.statusCode,
          data: JSON.parse(res.body)
        });
      });
    });
  }

};