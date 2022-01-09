module.exports = function toReadable (number) {
  let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  let teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  if (number < 10){
    return num[number];
} 
  let string = number + '';
  let array = string.split('');
  if (number > 10 && number < 20){
    let index = +array[1] - 1;
    return teens[index];
}
  if (array.length === 2 && array[1] === '0'){
      let index = +array[0] - 1;
      return tens[index];
  } else if (array.length === 2){
      let arrayResult = [];
      let index = +array[0] - 1;
      arrayResult.push(tens[index]);
      let i = +array[1];
      arrayResult.push(num[i]);
      let strRes = arrayResult.join(' ');
      return strRes;
  } 
  if (array.length === 3 && array[1] === '0' && array[2] === '0'){
      let index = +array[0] - 1;
      return hundreds[index];
  } else if (array.length === 3 && array[1] ==='0'){
      let arrayResult = [];
      let index = +array[0] - 1;
      arrayResult.push(hundreds[index]);
      let i = +array[2];
      arrayResult.push(num[i]);
      let strRes = arrayResult.join(' ');
      return strRes; 
  } else if (array.length === 3 && array[2] ==='0'){
    let arrayResult = [];
    let index = +array[0] - 1;
    arrayResult.push(hundreds[index]);
    let ind = +array[1] - 1;
    arrayResult.push(tens[ind]);
    let strRes = arrayResult.join(' ');
    return strRes; 
 } else if (array.length === 3 && array[1] ==='1'){
    let arrayResult = [];
    let index = +array[0] - 1;
    arrayResult.push(hundreds[index]);
    array.shift();
    let ind = +array[1] - 1;
    arrayResult.push(teens[ind]);
    let strRes = arrayResult.join(' ');
    return strRes; 
 } else {
    let arrayResult = [];
    let index = +array[0] - 1;
    arrayResult.push(hundreds[index]);
    let ind = +array[1] - 1;
    arrayResult.push(tens[ind]);
    let i = +array[2];
    arrayResult.push(num[i]);
    let strRes = arrayResult.join(' ');
    return strRes; 
  }


}
