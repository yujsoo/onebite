// 1. 배열 생성
let arrA = new Array() // 배열 생성자
let arrB = [] // 배열 리터럴 (대부분 사용)

let arrC = [1,2,3,
    true, "hello", null, undefined
]
console.log(arrC)

// 2. 배열 요소 접근 방법
let item1 = arrC[0]
let item2 = arrC[1]

arrC[0] = "hello"

console.log(item1, item2)
console.log(arrC)

