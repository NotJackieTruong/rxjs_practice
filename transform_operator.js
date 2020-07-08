const Rx = require('rxjs/Rx')

const src = Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8])

src.subscribe({
  next: (data)=>{
    console.log('src: ', data)
  }
})

src.map(val => val + 10).subscribe({
  next: (data)=>{
    console.log('map: ', data)
  }
})


src.mapTo(10).subscribe({
  next: (data)=>{
    console.log('mapTo: ', data)
  }
})

// scan: like array reduce
src.scan((acc, current)=> acc + current, 0).subscribe({
  next: (data)=>{
    console.log('scan: ', data)
  }
})

