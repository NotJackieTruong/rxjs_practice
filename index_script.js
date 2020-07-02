// const Rx = require('rxjs/Rx')

var btn = document.querySelector('button[class="counter-btn"]')
var counter = document.querySelector('p[class="counter"]')
var formBtn = document.querySelector('button[class="form-btn"')
var formInput = document.querySelector('input[class="name"]')
var formOutput = document.querySelector('div[class="form-output"]')
var output = document.querySelector('p[class="output"]')

const data = Rx.Observable.create(observer => {
  fetch('https://api.github.com/users?per_page=5')
  .then(res=> res.json())
  .then(data=>{
    observer.next(data)
    observer.complete()
  })
  .catch(err=> observer.error(err))

})

Rx.Observable.fromEvent(btn, 'click').subscribe({
  next: () => {
    console.log('inner text: ', counter.innerText)
    counter.innerText = parseInt(counter.innerHTML) + 1
  },
  error: null,
  complete: () => { console.log('Done') }
})
Rx.Observable.fromEvent(formInput, 'input').subscribe({
  next: () => {
    console.log('text entered: ', formInput.value)

  },
  error: null,
  complete: () => { console.log('Done.') }
})


Rx.Observable.fromEvent(formBtn, 'click').subscribe({
  next: () => {
    formOutput.style.visibility = 'visible'
    output.innerText = formInput.value
    data.subscribe({
      next: data => console.log(data),
      complete: () => console.log('done')
    })
  }
})