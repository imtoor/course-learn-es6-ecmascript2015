var createGreeting = function(message, name) {
    return message + name;
}

var arrowGreeting = message => "Hello";

var squared = x => x * x;

var deliveryBoy = {
    name: "Reynaldy",

    handleMessage: function(message, handler) {
        handler(message)
    },

    receive: function() {
        var that = this;

        this.handleMessage("Hello ", function(message) {
            that.name;

            console.log(message + that.name)

        })

    }
}

var deliveryBoy2 = {
    name: 'Reynaldy Rahmat',

    handleMessage: function(message, handler) {
        handler(message)
    },

    receive: function() {
        this.handleMessage('Hello ', message => console.log(message + this.name))
    }
}

deliveryBoy2.receive()