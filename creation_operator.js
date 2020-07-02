// docs: https://rxjs-dev.firebaseapp.com/guide/operators
// tutorial: https://www.tiepphan.com/rxjs-reactive-programming/
const Rx = require('rxjs/Rx')
// of operator: return an observable that emits the arguments described above and then completes
const foo = Rx.Observable.of(100, 200, 300, 400)
foo.subscribe(x=> console.log('of: ', x))

const bar = Rx.Observable.of([100, 200, 300, 400])
bar.subscribe(x=> console.log('of: ', x))

// similar to of operator: interval, timer, throw, empty, never, formEvent(detailed ver of formEventPattern), formEventPattern

const interval = Rx.Observable.interval(500).take(6)
interval.subscribe(x=> console.log('interval: ', x))

const timer = Rx.Observable.timer(3000, 1000).take(7) // emits ascending numbs, one every 1 sec, starting after 3 secs
timer.subscribe(x=> console.log('timer: ', x))

const empty = Rx.Observable.empty()
empty.subscribe(x=> console.log('empty: ', x))

function getInfo(){
  return new Promise((resolve, reject)=>{
    resolve({
      site: 'something',
      post: 'something_else'
    })
  })
}

const source = Rx.Observable.fromPromise(getInfo())
source.subscribe(val => console.log(val))

// from operator to create new Observable from array, array-like object, promise, iterable object or Observable-like object
const array = [5, 10, 15, 20, 25, 30, 35]
const src = Rx.Observable.from(array)
src.subscribe({
  next: x=> console.log('from: ', x)
})

const src_repeat = Rx.Observable.from(array).repeat(2)
src_repeat.subscribe({
  next: x=> console.log('repeat: ', x)
})