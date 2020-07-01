const Rx = require('rxjs/Rx')

// observables| producer
const foo = Rx.Observable.interval(1000).take(5)

// observer|consumer
const observerB = {
    observers: [],
    addObserver: function (observer) {
        this.observers.push(observer)
    },
    next: function (x) {
        this.observers.forEach(observer => {
            observer.next(x)
        });
    },
    error: function (err) {
        this.observers.forEach(observer => {
            observer.error(err)
        });
    },
    complete: function () {
        this.observers.forEach(observer => {
            observer.complete()

        });
    }
}


// observer
const observerBaz = {
    next: x => console.log("first next: ", x),
    error: err => console.log("first error: ", err),
    complete: () => console.log("first done")
}

const observerBar = {
    next: x => console.log("second next: ", x),
    error: err => console.log("second error: ", err),
    complete: () => console.log("second done")
}
observerB.addObserver(observerBaz)

foo.subscribe(observerB)

setTimeout(() => {
    observerB.addObserver(observerBar)
}, 1500)