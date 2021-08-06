export default class Base {
  constructor({ apiNode, apiHistory, request }) {
    this.apiNode = apiNode;
    this.apiHistory = apiHistory;
    this.request = request;
  }

  requestNode(config) {
    return this.request({
      ...config,
      baseURL: this.apiNode,
      disableDefaultCatch: true,
      seed: 'public',
    }).catch((err) => {
      console.error(err);
      throw new Error('cs-node-error');
    });
  }

  requestHistory(config) {
    return this.request({
      ...config,
      baseURL: this.apiHistory,
      disableDefaultCatch: true,
    }).catch((err) => {
      console.error(err);
      throw new Error('cs-node-error');
    });
  }
}
