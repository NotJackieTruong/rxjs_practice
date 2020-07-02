const Rx = require('rxjs/Rx')

const foo = Rx.Observable.interval(500).take(7)
Rx.Observable.prototype.something = function somethingelse(fn){
  const observable = this
  const output = Rx.Observable.create(observer =>{
    observable.subscribe({
      next: x=> observer.next(fn(x)),
      error: err=> observer.error(err),
      complete: ()=> observer.complete()
    })
  })
  return output
}

const amap = foo.something(val=>val*5)

amap.subscribe({
  next: x=> console.log('next: ', x),
  error: err=> console.log('error: ', err),
  complete: ()=>console.log('done')
})