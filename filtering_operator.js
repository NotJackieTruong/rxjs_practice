const Rx = require('rxjs/Rx')
const src = Rx.Observable.from([12, 11, 25, 63, -23, -50, 39, -70])

src.filter(num => num > 0).subscribe({
  next: (val) => {
    console.log('filter: ', val)
  }
})

src.take(3).subscribe({
  next: (val)=>{
    console.log('take: ', val)
  }
})

const timer = Rx.Observable.timer(1000)

src.takeUntil(timer).subscribe({
  next: val=>{
    console.log('take until: ', val)
  }
})

src.takeWhile(val=> val<25).subscribe({
  next: val=>{
    console.log('take while: ', val)
  }
})

src.skip(3).subscribe({
  next: val=>{
    console.log('skip: ', val)
  }
})

src.skipUntil(timer).subscribe({
  next: val=>{
    console.log('skip until: ', val)
  }
})

src.skipWhile(val=> val< 30).subscribe({
  next: val=>{
    console.log('skip while: ', val)
  }
})

src.first(val=> val>20).subscribe({
  next: val=>{
    console.log('first: ', val)
  }
})

src.last(val => val>20).subscribe({
  next: val=>{
    console.log('last: ', val)
  }
})

const timeSrc = Rx.Observable.interval(1000)
// throttleTime: emits first value, ignores for some amount of time, then emits again
timeSrc.throttleTime(5000).take(5).subscribe({
  next: val=>{
    console.log('throttle time: ', val)
  }
})

// timeSrc.debounceTime(5000).subscribe({
//   next: val=>{
//     console.log('debounce time: ', val)
//   }
// })

const duplicateSrc = Rx.Observable.from([1, 1, 3, 2, 3, 3, 2, 5])
duplicateSrc.distinctUntilChanged().subscribe({
  next: val=>{
    console.log('distinct until changed: ', val)
  }
})

duplicateSrc.distinctUntilChanged((prev, curr)=>{
  prev === curr
}).subscribe({
  next: val=>{
    console.log('distinct until changed with custom comparer: ', val)
  }
})