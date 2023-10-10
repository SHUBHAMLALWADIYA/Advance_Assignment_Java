class MyArr{

    constructor(...ele){
        this.size=ele.length;

        for(let i=0;i<ele.length;i++){
            this[i]=ele[i];
        }
        console.log(this);
    }

    push(ele){
        this[this.size]=ele;
        this.size++;
        console.log(this);
    }

    pop(){
       
        delete this[this.size-1];
        this.size--;
        console.log(this)
    }

    top() {
        
         this[this.size - 1];
         console.log(this)
      }

      print() {
        let ele = [];
        for (let i = 0; i < this.size; i++) {
          ele.push(this[i]);
        }
        console.log(`[${ele.join(',')}]`);
      }

      printReverse() {
        const elements = [];
        for (let i = this.size - 1; i >= 0; i--) {
          elements.push(this[i]);
        }
        console.log(`[${elements.join(',')}]`);
      }


}



const newMyArr = new MyArr(10, 20, 30, 40);
console.log(newMyArr.size); // 4
newMyArr.push(15);
newMyArr.print(); 
newMyArr.printReverse(); 
newMyArr.pop();
newMyArr.print();