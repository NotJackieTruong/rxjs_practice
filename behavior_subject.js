const Rx = require('rxjs/Rx')

// behavior subject emits the current value of an observable to an observer when they subscribe to.
const subject = new Rx.BehaviorSubject(0)

subject.subscribe({
    next: (v) => console.log('observerA: ', v)
})

subject.next(1)
subject.next(2)

subject.subscribe({
    next: (v)=>console.log('observeB: ', v)
})

subject.next(3)

