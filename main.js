

console.log('hello world')

const _ = require('lodash');

let fakePeople = [
  {
  "id": 1,
  "first_name": "Xerxes",
  "last_name": "Bousquet",
  "email": "xbousquet0@dion.ne.jp",
  "gender": "Genderfluid"
}, {
  "id": 2,
  "first_name": "Sayre",
  "last_name": "Searston",
  "email": "ssearston1@imdb.com",
  "gender": "Genderfluid"
}, {
  "id": 3,
  "first_name": "Salli",
  "last_name": "Duchatel",
  "email": "sduchatel2@mail.ru",
  "gender": "Agender"
}, {
  "id": 4,
  "first_name": "Thaddus",
  "last_name": "Menaul",
  "email": "tmenaul3@wikipedia.org",
  "gender": "Agender"
}, {
  "id": 5,
  "first_name": "Nickolas",
  "last_name": "Jouannisson",
  "email": "njouannisson4@ycombinator.com",
  "gender": "Polygender"
}
]

let myArray = [1,14,44,30,2,4,76,10]

console.log('chunk',_.chunk(myArray, [size=3]))
console.log('chunk',_.chunk(fakePeople, [size=4]))

console.log('without',_.without(myArray, 30, 14))
console.log('without',_.without(fakePeople, fakePeople[0]))


console.log('shuffle',_.shuffle(myArray))
console.log('shuffle',_.shuffle(fakePeople))

console.log('nth',_.nth(myArray, [n=5]))
console.log('nth',_.nth(fakePeople, [n=2]))

console.log('reverse',_.reverse(myArray))
console.log('reverse',_.reverse(fakePeople))

