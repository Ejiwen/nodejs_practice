const event = require('events');
const uuid = require('uuid');

class MyEvent extends event {
    log(msg) {
        this.emit("message", {id: uuid.v4(), msg});
    }
}

module.exports = MyEvent;