//  setInterval(())
// localStorage.method()
// const names='quyet'
// const key='quyetkey'
// localStorage.setItem(key,names)
// const getfromlc=localStorage.getItem(key)
// console.log(getfromlc)


// const student = [
//     {
//         id : 1,
//         name : 'Hieu',
//         age : 15,
//         gender : 'male'
//     },
//     {
//         id : 2,
//         name : 'Nguyen',
//         age : 16,
//         gender : 'male'
//     },
//     {
//         id : 3,
//         name : 'Quyet',
//         age : 16,
//         gender : 'male'
//     },
//     {
//         id : 4,
//         name : 'QDat',
//         age : 16,
//         gender : 'male'
//     }
// ]

// arrstd1=student.map(
//     (item,index)=>{
// return item.age+1
// }
// )
// console.log(arrstd1)

const student = [
    {
        id : 1,
        name : 'Hieu',
        age : 15,
        gender : 'male'
    },
    {
        id : 2,
        name : 'Nguyen',
        age : 16,
        gender : 'male'
    },
    {
        id : 3,
        name : 'Quyet',
        age : 16,
        gender : 'male'
    },
    {
        id : 4,
        name : 'QDat',
        age : 16,
        gender : 'male'
    },
    {
        id : 5,
        name : 'Thanh',
        age : 15,
        gender : 'female'
    },

]

arrfemale=student.filter(
    (item,index)=>{
         return  item.age%3==0
    }
)
console.log(arrfemale)