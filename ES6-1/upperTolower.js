
    let arr = ["MA", "SA", "I", "SCH", "OOL"];

let upperTolowerCase = (arr) => {
  let ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let bag = "";
    for (let k = 0; k < arr[i].length; k++) {
      for (let j = 0; j < ABC.length; j++) {
        if (arr[i][k] == ABC[j]) {
          bag += abc[j];
        }
      }
    }

    newArr[i] = bag;
  }

  console.log(newArr)
}