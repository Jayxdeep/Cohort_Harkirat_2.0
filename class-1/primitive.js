// const perArr=["Jaydeep","digger","nigger"];
// console.log(perArr[0]);
// const ages=[21,22,24,25,26];
// const temp=ages.length;
// for(let i=0;i<temp;i++){
//     if(ages[i]%2==0){
//         console.log(ages[i]);
//     }
// }


// const big=[12,11,134,12,42];
// let max=big[0];
// let tem=big.length;
// for(let i=0;i<tem;i++)
//     if(big[i]>max)
//         max=big[i];
// console.log(max);

// //object 
//  const user1={
//     firstname: "jaydeep",
//     gender:"male"
//  }
//  console.log(user1["gender"])

//its an array of an object 
 const Users=[{
    firstnme: "Jaydeep",
    gender:"male"
 },{
    firstnme:"sakuu",
    gender:"male"
 },{
    firstnme:"digger",
    gender:"female"
 }]
 let tmep=Users.length;
 for(let i=0;i<tmep;i++)
    if(Users[i]["gender"]=="male")
        console.log(Users[i]["firstnme"])