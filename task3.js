export class Player {
  constructor(n,l) {
    this.name= n
    this.level = l
  } info(){
     console.log(`${this.name} has reached Level ${this.level}!`)
  }
  }
