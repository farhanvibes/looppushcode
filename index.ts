// write a program sum off all numbers between 1 to 100
let plus:number=0
let list:number[]=[]
for(let index = 1; index <= 100; index++){
  if (index % 2==0){
    plus+=index;
    list.push(index);
  }





}
console.log(`sum`, plus, list);
//create a function that
let factNum:number=10;

const factorial=(factNum:number)=>{
    if (factNum > 0) {
        let result=1;
        let index = 1;
        while (index <= factNum) {
            result *=index;
            index ++;
        }
        return result;
    }else{
        throw new Error("Please enter a positive number");

    }
}
let factResult:number=factorial(factNum);
console.log(factResult);