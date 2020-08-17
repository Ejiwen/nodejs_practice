const logger = require('./logger');
const MyEvent = require('./logger');

const myevent = new MyEvent();
myevent.on("message", (data) => console.log('Event Fired', data));

myevent.log("message");
// Event Fired { id: '3a04e2ea-537d-4ccf-8096-7e6a13ebf858', msg: 'message' }