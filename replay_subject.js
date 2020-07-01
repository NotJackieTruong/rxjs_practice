const Rx = require('rxjs/Rx')

// replay subject emits all the values which are stored in buffer to observers
// replay subject with buffer
// const subject = new Rx.ReplaySubject(4) // buffer 3 values for new subscribers

// subject.subscribe({
//     next: (v) => console.log('observerA: ', v)

// })

// subject.next(1)
// subject.next(2)
// subject.next(3)
// subject.next(4)

// subject.subscribe({
//     next: (v) =>console.log('observerB: ', v)
// })

// subject.next(5)

const subject = new Rx.ReplaySubject(1, 500) // 500: windowTime(ms), 1: buffer
subject.subscribe({
    next: (v) => console.log('observerA: ', v)
})
let i = 1
const id = setInterval(()=> subject.next(i++), 200)

setTimeout(()=>{
    subject.subscribe({
        next: (v)=>{console.log('observerB: ', v)}
    })
}, 1000)

setTimeout(()=>{
    subject.complete()
    clearInterval(id)
}, 2000)