require('linqjs')

// link to tutorial (kind of tutorial): https://www.npmjs.com/package/linqjs

var myList = [
  { FirstName: "Chris", LastName: "Pearson", age: 12 },
  { FirstName: "Kate", LastName: "Johnson", age: 15 },
  { FirstName: "Josh", LastName: "Sutherland", age: 42 },
  { FirstName: "John", LastName: "Ronald", age: 56 },
  { FirstName: "Steve", LastName: "Pinkerton", age: 23 },
];

var myList2 = [
  { FirstName: "Chris", LastName: "Pearson", age: 12 },
  { FirstName: "Steve", LastName: "Roger", age: 37 },
  { FirstName: "Josh", LastName: "Weldon", age: 61 },
]

var myList3 = [
  { FirstName: "Chris", LastName: "Pearson", age: 12 },
  { FirstName: "Josh", LastName: "Sutherland", age: 42 },
  { FirstName: "Chris", LastName: "Pearson", age: 12 },
  { FirstName: "Steve", LastName: "Pinkerton", age: 23 },
  { FirstName: "Kate", LastName: "Johnson", age: 15 },
  { FirstName: "Josh", LastName: "Sutherland", age: 42 },
  { FirstName: "John", LastName: "Ronald", age: 56 },
]

var arr1 = [1, 2, 5, 3, 4, 5]
var arr2 = [3, 4, 5, 6, 7]
var arr3 = ["a", "b", "c"]

var arr4 = [{ Name: "A", Val: 1 }, { Name: "B", Val: 2 }, { Name: "C", Val: 3 }]
var arr5 = [{ Code: "A" }, { Code: "B" }, { Name: "C", Code: "C" }]

var arr6 = [{ Name: "A", Val: 1 }, { Name: "B", Val: 2 }, { Name: "C", Val: 3 }];
var arr7 = [{ Code: "A" }, { Code: "A" }, { Code: "B" }, { Code: "B" }, { Code: "C" }];

var arr8 = [{ Name: "A", Val: 1 }, { Name: "B", Val: 1 }, { Name: "C", Val: 2 }, { Name: "D", Val: 2 }];


// console.log('select: ', myList.select((item) => {
//   return { ...item, age: 50 }
// }))

// console.log('take: ', myList.take(2))

// console.log('skip: ', myList.skip(3))

// console.log('first: ', myList.first())

// console.log('first: ', myList.first(element=>{
//   return element.age>23
// }))

// console.log('last: ', myList.last())

// console.log('last: ', myList.last(element=>{
//   return element.age>23
// }))

// console.log('union: ', myList.union(myList2))

// console.log('intersect: ', myList.intersect(myList2))

// console.log('except: ', myList.except(myList2))

// console.log('distinct: ', myList3.distinct((a,b)=>{
//   return a.FirstName == b.FirstName && a.LastName == b.LastName
// }))

// console.log('zip: ', arr1.zip(arr3, (a, b)=>{
//   return {Num: a, Letter: b}
// }))

// console.log('index of (first index): ', myList.indexOf({ FirstName: "Kate", LastName: "Johnson", age: 15 }))

// console.log('last index of: ', arr1.indexOf(5))

// myList.remove({ FirstName: "Kate", LastName: "Johnson", age: 15 })
// console.log('remove: ', myList)

// arr1.removeAll(element=>{
//   return element>3
// })
// console.log('remove all: ', arr1)

// console.log('order by: ', myList.orderBy(element=>{
//   return element.age
// }))

// console.log('order by then by: ', myList3.orderBy(element => {
//   return element.FirstName
// }).thenBy(element => {
//   return element.LastName
// }))

// console.log('inner join: ', arr4.innerJoin(arr5,
//   arr4Selector => { return arr4Selector.Name },
//   arr5Selector => { return arr5Selector.Code },
//   (arr4Selector, arr5Selector) => { return { Name: arr4Selector.Name, Code: arr5Selector.Code, Val: arr4Selector.Val } }
// ))

// console.log('inner join with custom comparer: ',
//   arr4.innerJoin(arr5,
//   function (t) { return t.Name },                                    // arr1 selector
//   function (u) { return u.Code },                                    // arr2 selector
//   function (t, u) { return { Name: t.Name, Val: t.Val, Code: u.Code } },  // result selector
//   function (a, b) { return a.toUpperCase() == b.toUpperCase() }) // a: value of arr1 selector, b: value of arr2 selector)
// ) 

// console.log('group join: ', arr6.groupJoin(arr7,
//   t => { return t.Name },
//   u => { return u.Code },
//   (t, u) => { return { Item: t, Group: u } }
// ))

// console.log('group join with custom comparer: ', arr6.groupJoin(arr7,
//   t => { return t.Name },
//   u => { return u.Code },
//   (t, u) => { return { Item: t, Group: u } },
//   (a, b) => { return a.toUpperCase() == b.toUpperCase() }
// ))

// console.log('group by: ', arr8.groupBy(
//   t=> {return t.Val}
// ))

// console.log('to dictionary: ', arr1.toDictionary(t=>{return "Num"+t}, u=>{return u}))

// console.log('aggregate: ', arr1.aggregate((a,b)=>{return a+b},0))

// console.log('min: ', myList.min(t=> { return t.age}))

// console.log('max: ', myList.max(t=> { return t.LastName}))

// console.log('sum: ', myList.sum(t=>{return t.FirstName}))

console.log('where: ', myList.where(t => { return t.age > 30 }))

console.log('any: ', myList.any(t => { return t.age > 60 }))

console.log('all: ', myList.all(t => { return t.age > 10 }))

console.log('skipWhile: ', myList.skipWhile(t => {
  return t.FirstName != "Kate"
}))

console.log('contains: ', myList.contains({ FirstName: 'Kate', LastName: 'Johnson', age: 15 }, (a, b) => {
  return a.FirstName == b.FristName
}))

console.log('range: ', Array.range(1, 5))

console.log('for each: ', arr1.forEach(t => { if (t % 2 == 0) { return t } }))

console.log('default if empty: ', myList.where(t=>{
  return t.age> 60
}).defaultIfEmpty(60))