const Rx = require('rxjs/Rx')
const src = Rx.Observable.from([12, 11, 25, 63, -23, -50, 39, -70])

src.filter(num => num>0).subscribe({
  next: (val)=>{
    console.log('filter: ', val)
  }
})