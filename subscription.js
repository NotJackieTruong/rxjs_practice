const rxjs = require('rxjs')
const {interval} = require('rxjs')
const foo = interval(1000)
const bar = interval(1500)

const subscription = foo.subscribe(x=> console.log('first: '+x))
const childSub = bar.subscribe(x=>console.log('second: '+x))

subscription.add(childSub)
setTimeout(()=>{
    subscription.unsubscribe()
}, 10000)
