const Rx = require('rxjs/Rx')

const subject = new Rx.AsyncSubject()
// asyncsubject only emits the last value of observable execution to observers and only when execution completes.
subject.subscribe({
    next: (v)=>{console.log('observerA: ', v)}
})

subject.next(1)
subject.next(2)
subject.next(3)
subject.next(4)

subject.subscribe({
    next: (v)=> console.log('observerB: ', v)
})

subject.next(5)
subject.complete()

