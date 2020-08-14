const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));
myEmitter.on('event2', () => console.log('Event2 Fired!'));
myEmitter.on('event3', () => console.log('Event3 Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event2');
myEmitter.emit('event3');