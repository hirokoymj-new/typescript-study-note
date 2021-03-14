class A {
  private x: number;
  protected y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  get getX() {
    return this.x;
  }

  set setX(value: number) {
    this.x = value;
  }

  get getY() {
    return this.y;
  }

  set setY(value: number) {
    this.y = value;
  }
}

const myNewClass = new A(1, 2);

console.log(myNewClass.getX);
console.log(myNewClass.getY);
console.log("---------");

myNewClass.setX = 10;
myNewClass.setY = 20;
console.log(myNewClass.getX);
console.log(myNewClass.getY);

// class B extends A {
//   multiply(): number {
//     // return this.x * this.y;
//   }
// }

class Base {
  //   public k = 4; //OK
  //   private k = 4; //ERROR k is private and only accessible within class Base
  protected k = 4; //OK
}

class Derived extends Base {
  constructor() {
    super();
    console.log(this.k);
  }
}

// const DerivedClass = new Derived();

class MyInfo {
  // private name: string;
  // private id: number;

  constructor(private name: string, private id: number) {
    this.name = name;
    this.id = id;
  }
}
