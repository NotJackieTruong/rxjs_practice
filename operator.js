const Rx = require('rxjs/Rx')

// operator is a function which creates a new Observable based on the current one.
// pure operation: the previous Observable stays unmodified
function map(observable, fn){
    const output = Rx.Observable.create(observer=>{
        observable.subscribe({
            next: x=>observer.next(fn(x)),
            error: err=> observer.error(err),
            complete: ()=> observer.complete()
        })
    })
    return output
}

const foo = Rx.Observable.interval(500).take(5)

const amap = map(foo, val=> val*5)

const observerM = {
    next: x=> console.log('next: ', x),
    error: err=> console.log('error: ', err),
    complete: ()=> console.log('done')
}

amap.subscribe(observerM)
