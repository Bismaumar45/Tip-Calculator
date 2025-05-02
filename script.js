let decreaseButton=document.getElementById("DereasePeople")
let totalPerPerson=document.getElementById("perPersonTotal")
let billInput=document.getElementById("billTotalInput")
let TipInput=document.getElementById("TipInput")
let numberOfPeople=document.getElementById("numberofPeople")
let increaseButton=document.getElementById("InreasePeople")
numberOfPeople=Number(numberofPeople.innerText)


const calculateBill=()=>{
  const bill= Number(billInput.value)
  perPersonTotal.innerText=`$${bill}`
  const tip=Number(TipInput.value)/100
  const tipAmount=tip*bill
  const total= tipAmount+bill
  console.log(total)
  perPersonTotal.innerText=`$${total}`
  const persons=Number(numberofPeople.innerText)
  let finalTotal=total/persons
  perPersonTotal.innerText=`$${finalTotal.toFixed(2).toLocaleString("en-US")}`


}
function DecreaseRestriction(){
  if(numberOfPeople=="1"){
    alert("Hey!!!You cannot have less than 1 people.....")
    return
  }
  numberOfPeople-=1
  numberofPeople.innerText=numberOfPeople
  calculateBill()

}
const Increement=()=>{
  numberOfPeople+=1
  numberofPeople.innerText=numberOfPeople
  calculateBill()
}
