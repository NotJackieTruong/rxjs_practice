const Rx = require('rxjs/Rx')

const src = Rx.Observable.throw('This is an error')

// src.catch(val => Rx.Observable.of(`I caught: ${val}`)).subscribe({
//   next: val=>{
//     console.log(val)
//   }
// })

const anotherSrc = Rx.Observable.interval(1000)
// anotherSrc.mergeMap(val=>{
//   if(val>5){
//     return Rx.Observable.throw('Error!')
//   }
//   return Rx.Observable.of(val)
// }).retry(2).subscribe({
//   next: val=> console.log(val),
//   error: val=> console.log(`${val}: Retried 2 times then quit`)
// })

anotherSrc.map(val=>{
  if(val>5){
    throw val
  }
  return val
}).retryWhen(errors => errors.pipe(
  Rx.operators.tap(val=> console.log(`Value ${val} was too high. Wait ${val} to retry`)),
  Rx.operators.delayWhen(val => Rx.Observable.timer(val*1000))
)).subscribe({
  next: val=>{
    console.log(val)
  }
})