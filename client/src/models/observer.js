class Observer {
  constructor() {
    this.list = {};
  }

  subscribe(name, context, func) {
    // name: eventName, context: this, func: callback
    if (!this.list[name]) {
      // this.list = { isLogin: [] }
      this.list[name] = [];
    }
    this.list[name].push({
      context,
      func,
    });
    // console.log(`somebody subscribed for '${name}' event`);
    // console.log(this.list);
  }

  // eventName, context, callback을 받아서 등록

  unsubscribe(name, context, func) {
    if (!this.list[name]) return;
    const index = this.list[name].findIndex(
      ele => ele.context === context && ele.func === func,
    );
    if (index === -1) return;
    this.list[name].splice(index, 1);
  }
  // 객체(context)의 구독을 해지한다.

  // TODO
  notify(name, data) {
    if (!this.list[name]) return;
    // console.log(`observer is notifying for '${name}' evnet`);
    this.list[name].forEach(ele => ele.func(data));
  }

  // 해당 event를 구독하고 있는 모든 context에 등록한 callback을 실행한다.
}

export default Observer;
