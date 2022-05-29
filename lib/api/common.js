import Base from './base.js';

export default class Common extends Base {
  /**
   * returns gasPrice
   *
   * @returns {Promise}
   */
  gasPrice() {
    return this.requestNode({
      url: 'api/v1/gasPrice',
      method: 'get',
    }).then((data) => data.price);
  }
  /**
   * returns bscscanApiKey
   *
   * @returns {Promise}
   */
  getBscscanApiKey() {
    return this.requestNode({
      url: 'api/v1/bscscanApiKey',
      method: 'get',
    }).then((data) => data.apiKey);
  }
}
