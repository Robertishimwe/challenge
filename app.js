const express = require("express")
const app = express()


const families = [

{fatherName:"ishimwe", MotherName:"alice", ChildrenNumber:3},
{fatherName:"karangwa", MotherName:"kanyange", ChildrenNumber:-1},
{fatherName:"yves", MotherName:"aline", ChildrenNumber:2},
{fatherName:"karamuzi", MotherName:"yvone", ChildrenNumber:9},



]
ChildrenNumberArr =[]
for(i = 0;i<families.length;i++){
  
if(families[i].fatherName != "yves"){
  try{
  if(families[i].ChildrenNumber>0){
   
    try {
      AllChildren = families[i].ChildrenNumber
      ChildrenNumberArr.push(AllChildren)
      
    } catch (error) {
      console.log(error)
    }
  }
}catch{
  console.log("ysekjhuy")
}

}
}
let sumOfAllChildren = 0;
for(j=0;j<ChildrenNumberArr.length;j++){
sumOfAllChildren= sumOfAllChildren += ChildrenNumberArr[j]
NumberOfFamilies = ChildrenNumberArr.length;

}
averageChildrenPerFamily = sumOfAllChildren/NumberOfFamilies;
console.log(averageChildrenPerFamily)



app.listen(7400,()=>{
    console.log("server running")
})