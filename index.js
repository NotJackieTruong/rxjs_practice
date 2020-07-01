const rxjs = require('rxjs')

function getDetail(){
    console.log('something here')
    return 100
}

// create observalbe by using rxjs operator
const observable = rxjs.Observable.create(function(observer){
    console.log('Rxjs and Reactive programming')
    observer.next(1)
    observer.next(2)
    setTimeout(()=>{
        observer.next(3)
        observer.complete()
    }, 3000)
})

// create observable by using constructor
const observable2 = new rxjs.Observable(function(observer){
    console.log('Rxjs and Reactive programming')
    observer.next(1)
    observer.next(5)
    setTimeout(()=>{
        observer.next(3)
        observer.complete()
    }, 3000)
})

const ret = getDetail()
console.log(ret)

console.log('before subscribe')
// invoke observable function by subscribing to it
// observer: {next:..., error:..., complete:...}
observable2.subscribe({
    next: val=> console.log('next: ', val),
    error: err => console.error('error: ', err),
    complete: ()=> console.log('done.')
})
console.log('after subscribe')