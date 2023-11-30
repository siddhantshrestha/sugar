// Basic Datatype

let id:number = 5
let Name:string = 'sid'
let isBoy: boolean = true
let x:any ='Hello world'

let numbers: number[] = [1,2,3,4,5]

let arr: any[] = [1, 'wis',3, true]
 
//Tuple
//should be in same order as assigned
let person: [number, string , boolean] = [ 1, 'sid', true]

//Tuple array
let product: [number,string][]

product =[
    [1,'apple'],
    [2,'bag'],
    [2,'rack'],
]

//Union
// if you have to assign two diff value

let pid: string | number
pid = 'apple'

// Enum
enum Keys1{
    up,
    down,
    left,
    right
}

console.log(Keys1.left);
enum Keys2{
    up= 'up',
    down = 'down',
    left='left',
    right='right'
}

console.log(Keys2.right);

//Objects

type User = {
    id: number
    name:string
}

const user: User={
    id:1,
    name:'Sid'
}

//Type assertion

let nid:number=1
// let cid= <number>nid
let cid= nid as number

cid = 2

//function

 function addNum(x: number, y: number){
    return x + y
 }

 console.log(addNum(10,2));

 function smth(msg: string|number):void{
    console.log(msg);
 }

 smth('This is null')