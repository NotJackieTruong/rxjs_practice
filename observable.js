const rxjs = require('rxjs')

// creating observable by using create() operator
// observable is a producer of multiple values
const observable = rxjs.Observable.create(function(observer){
    setInterval(()=>{
        observer.next('Something')
    }, 1000)
})

// or creating observable by using constructor
// const observable = new rxjs.Observable(function(observer){
//     setInterval(()=>{
//         observer.next('Something')
//     })
// })

// subscribe
// observer is a consumer of values delivered by an observable
var subscription = observable.subscribe({// observer 
    next: (val)=>{
        console.log('val: ', val)
    },
    error: null,
    complete: ()=>{console.log('Complete')}
})

// disposing|unsubscribe
setTimeout(()=>{
    subscription.unsubscribe()
}, 5000)