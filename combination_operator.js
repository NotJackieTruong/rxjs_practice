const Rx = require('rxjs/Rx')

const s1 = Rx.Observable.interval(1000).take(5).map(x=> `s1: ${x}`)

const s2 = Rx.Observable.interval(2000).take(5).map(x=> `s2: ${x}`)

const s3 = Rx.Observable.interval(3000).take(5).map(x=> `s3: ${x}`)

// turn multiple observavbles into a single observable
// Rx.Observable.merge(s1, s2, s3, 2).subscribe({
//   next: val=>{
//     console.log('merge: ', val)
//   }
// })

// subscribe to observables in order as previous completes
// Rx.Observable.concat(s1, s2, s3).subscribe({
//   next: val=>{
//     console.log('concat: ', val)
//   }
// })

// Rx.Observable.from([1, 2, 3]).startWith(5).subscribe({
//   next: val=>{
//     console.log('start with: ', val)
//   }
// })


// when any observable emits avalue, emit the last emitted value from each
// Rx.Observable.combineLatest(s1, s2, s3).subscribe({
//   next: val=>{
//     console.log(val)
//   }
// })

// provide the last value from another observable
// s1.withLatestFrom(s3).subscribe({
//   next: val=>{
//     console.log(val)
//   }
// })

// when all observables complete, emit the last emitted value from each
// if an inner observables does not complete, forkjoin will never emit a value
Rx.Observable.forkJoin(s1, s2, s3).subscribe({
  next: val=>{
    console.log(val)
  }
})

Rx.Observable.zip(s1, s2, s3).subscribe({
  next: val=>{
    console.log(val)
  }
})