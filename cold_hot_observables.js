const rxjs = require('rxjs')
let x = 5

const observable = rxjs.Observable.create(observer=>{
    observer.next(x)
    x+=10
    setTimeout(()=>{
        observer.next(x)
        observer.complete()
    }, 1000)
})

const observer = {
    next: value => console.log(value),
    complete: ()=> console.log('done')
}

observable.subscribe(observer)

setTimeout(()=>{
    observable.subscribe(observer)
}, 1000)