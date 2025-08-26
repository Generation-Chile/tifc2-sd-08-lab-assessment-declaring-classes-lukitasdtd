export class Player {
  constructor(n,l) {
    this.name= n
    this.level = l
    this.exp = 0
  } info(){
     console.log(`${this.name} has reached Level ${this.level}, your experiencie is ${exp}!`)
  } levelUp() {
    this.level +=1
  } experience (){
    if (this.acumulado%10 == 0){
      levelUp()
    }
  }
  }
  