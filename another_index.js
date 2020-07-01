const rxjs = require("rxjs")
const {from} = require("rxjs")

const observable$ = rxjs.Observable.create(function (observer) {
    // setInterval(() => {
    //     observer.next("something")
    // }, 1000)
    for(var i=0; i<10; i++){
        observer.next(i)
        if(i==9){
            observer.complete()
        }
    }

})

var subscription = observable$.subscribe({
    next: val=> console.log(val),
    error: null,
    complete: ()=> console.log('Done.')
})

setTimeout(()=>{
    subscription.unsubscribe()
}, 10000)


// var subscription = observable$.subscribe({
//     next: (val) => { console.log(val) },
//     error: null,
//     complete: ()=>{console.log("complete")}
// })

// setTimeout(()=>{
//     subscription.unsubscribe()
// }, 10000)

// console.log('Start: ')
// var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const observable3$ = from(array)

// observable3$.subscribe({
//     next: (val)=> {
//         setInterval(()=>{
//             console.log('val: ', val)

//         }, 10000)
//     },
//     error: null,
//     complete: ()=>{
//         console.log('Done observable 3')
//     }
// })
// console.log('End')
