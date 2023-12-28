/**
 *
 * @param input
 * {ให้เขียนฟังก์ชั่นที่รับข้อมูลเป็น Array ของ number จากนั้น Return เป็น Array ที่ถูก +1
 * ตัวอย่าง
 * input [2,3] return [2,4]
 * input [9] return [1,0]
 * input [9,9,9] return [1,0,0,0]
 * input [7,8,8] return [7,8,9]}
 */
const atlasAssignment1 = (input) => {
  let number = num.toString();
  let numberArray = number.split("").map(Number);
  for (let i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] !== 9) {
      numberArray[i]++;
      break;
    } else {
      numberArray[i] = 0;
      if (i === 0) {
        numberArray.unshift(1);
      }
    }
  }
};
