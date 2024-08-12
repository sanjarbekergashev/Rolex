// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin.
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

function findDisappearedNumbers(arr: number[]): number[] {
  if (arr.length === 0) return [];

  const maxNum = Math.max(...arr);

  const numSet = new Set(arr);

  const result: number[] = [];
  for (let i = 1; i <= maxNum; i++) {
    if (!numSet.has(i)) {
      result.push(i);
    }
  }

  return result;
}

const result = findDisappearedNumbers([1, 3, 4, 7, 9]);
console.log(result);

// ZG-TASK:

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin.
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

// function toSnakeCase(input: string): string {
//   return input
//     .split(" ")
//     .map((word) => word.toLowerCase())
//     .join("_");
// }

// console.log(toSnakeCase("name should be a string"));
// console.log(toSnakeCase("a a a a a aa  aa  a"));
// console.log(toSnakeCase("case snake camel paskal kebab"));

// ZF-TASK:

// Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// function capitalizeWords(str: string): string {
//   let words = str.split(" ");

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > 2) {
//       words[i] =
//         words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//     } else {
//       words[i] = words[i].toLowerCase();
//     }
//   }

//   return words.join(" ");
// }

// console.log(capitalizeWords("name should be a string"));
// console.log(capitalizeWords("salom hammaga"));
// console.log(capitalizeWords("i am  developer"));

// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'

// function removeDuplicate(input: string): string {
//   const uniqueChars = new Set<string>();

//   for (const char of input) {
//     uniqueChars.add(char);
//   }

//   return Array.from(uniqueChars).join("");
// }

// console.log(removeDuplicate("stringg"));
// console.log(removeDuplicate("hello"));
// console.log(removeDuplicate("aaaaa"));

// ZD-TASK:

// Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin
// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

// function changeNumberInArray(
//   index: number,
//   array: number[],
//   newValue: number
// ): number[] {
//   if (index < 0 || index >= array.length) {
//     throw new Error("error");
//   }

//   const updatedArray = [...array];

//   updatedArray[index] = newValue;

//   return updatedArray;
// }

// const result = changeNumberInArray(1, [1, 3, 7, 2], 2);
// console.log(result);

// ZC-TASK:

// Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32

// function celsiusToFahrenheit(celsius: number): number {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(celsiusToFahrenheit(0)); // 32
// console.log(celsiusToFahrenheit(100));

// ZB-TASK:

// Shunday function yozing, uni 2 ta number parametri bolsin va berilgan sonlar orasidan random raqam return qilsin
// MASALAN: randomBetween(30, 50) return 45

// function randomBetween(min: number, max: number): number {
//   if (min > max) {
//     throw new Error("Min qiymat max qiymatdan katta bo'lishi mumkin emas.");
//   }
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomNumber = randomBetween(30, 50);
// console.log(randomNumber);

// Z-TASK:

// Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2

// function sumEvens(numbers: number[]): number {
//   return numbers
//     .filter((num) => num % 2 === 0)
//     .reduce((sum, num) => sum + num, 0);
// }

// console.log(sumEvens([1, 2, 3]));
// console.log(sumEvens([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// console.log(sumEvens([10, 8]));

// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function findIntersection(arr1: number[], arr2: number[]): number[] {
//   let intersection: number[] = [];

//   for (let num of arr1) {
//     if (arr2.includes(num)) {
//       if (!intersection.includes(num)) {
//         intersection.push(num);
//       }
//     }
//   }

//   intersection.sort((a, b) => a - b);

//   return intersection;
// }
// console.log(findIntersection([1, 2, 3], [3, 2, 0]));
// console.log(findIntersection([1, 2, 3], [1, 2, 3]));
// console.log(findIntersection([1, 2, 3], [4, 5, 6]));
// X-TASK:

//  Shunday function yozing, uni object va string parapetrlari bolsin. Function string parametri object ichida necha marotaba takrorlanganligini qaytarsin (nested object bolsa ham sanasin)
//  MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// type AnyObject = {
//   [key: string]: any;
// };

// function countOccurrences(obj: AnyObject, key: string): number {
//   let count = 0;

//   function traverse(obj: AnyObject) {
//     for (let prop in obj) {
//       if (prop === key) {
//         count++;
//       }
//       if (typeof obj[prop] === "object") {
//         traverse(obj[prop]);
//       }
//     }
//   }

//   traverse(obj);

//   return count;
// }

// const obj1 = { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } };
// console.log(countOccurrences(obj1, "model"));

// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function chunkArray(arr: number[], size: number): number[][] {
//   let chunkedArray: number[][] = [];

//   for (let i = 0; i < arr.length; i += size) {
//     chunkedArray.push(arr.slice(i, i + size));
//   }

//   return chunkedArray;
// }

// const arrayToChunk = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkSize = 3;
// const result = chunkArray(arrayToChunk, chunkSize);
// console.log(result);

// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// function countChars(input: string): { [key: string]: number } {
//   const charCount: { [key: string]: number } = {};

//   for (let char of input) {
//     if (charCount[char]) {
//       charCount[char]++;
//     } else {
//       charCount[char] = 1;
//     }
//   }

//   return charCount;
// }

// console.log(countChars("hello"));
// console.log(countChars("akkkkaaaaakk"));
// console.log(countChars("aa"));
// console.log(countChars(""));

// U-TASK:

// Shunday function yozing, uni number parametri bolsin va 0 dan berilgan parametrgacha bolgan oraliqdagi faqat toq sonlar nechtaligini return qilsin
// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// function countOdds(n: number): number {
//   let count = 0;
//   for (let i = 1; i <= n; i += 2) {
//     count++;
//   }
//   return count;
// }

// console.log(countOdds(9));
// console.log(countOdds(11));

// T-TASK:

// Shunday function yozing, u sonlardan tashkil topgan 2 ta array qabul qilsin va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin
// MASALAN: mergeSortedArrays([0,3,4,31], [4,6,30]); return [0,3,4,4,6,30,31]

// function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
//   let i = 0,
//     j = 0;
//   const mergedArray: number[] = [];

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       mergedArray.push(arr1[i]);
//       i++;
//     } else {
//       mergedArray.push(arr2[j]);
//       j++;
//     }
//   }

//   while (i < arr1.length) {
//     mergedArray.push(arr1[i]);
//     i++;
//   }

//   while (j < arr2.length) {
//     mergedArray.push(arr2[j]);
//     j++;
//   }

//   return mergedArray;
// }

// const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
// console.log(result);

// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function missingNumber(nums: number[]): number {
//   const n = nums.length;
//   const totalSum = (n * (n + 1)) / 2;

//   const sum = nums.reduce((acc, num) => acc + num, 0);

//   return totalSum - sum;
// }

// console.log(missingNumber([3, 0, 2, 1, 5]));

// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// function calculate(strng: string): number {
//   const parts = strng.split("+");

//   const num = parts.reduce((total, part) => {
//     return total + parseInt(part, 10);
//   }, 0);

//   return num;
// }

// console.log(calculate("1+3"));
// console.log(calculate("4+7"));
// console.log(calculate("15+25"));
// console.log(calculate("100+202"));

// Q-TASK:

// Shunday function yozing, u 2 ta parametrgga ega bolib birinchisi object, ikkinchisi string. Agar string parametr objectni propertysi bolsa true bolmasa false qaytarsin.
// MASALAN: hasProperty({name: "BMW", model: "M3"}, "model") return true; hasProperty({name: "BMW", model: "M3"}, "year") return false

// function hasProperty(obj: any, prop: string): boolean {
//   return obj[prop] !== undefined;
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));
// console.log(hasProperty({ name: "BMW", model: "M3" }, "ok "));

// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objectToArray(object: { [key: string]: any }): [string, any][] {
//   let result: [string, any][] = [];

//   for (let key in object) {
//     if (object.hasOwnProperty(key)) {
//       result.push([key, object[key]]);
//     }
//   }

//   return result;
// }
// console.log(objectToArray({ a: 10, b: 20, name: "justin" }));

// O-TASK:

// Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && !isNaN(arr[i])) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(calculateSumOfNumbers([10, "10", 5, true, 200, 35]));

// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(str: string): boolean {
//   str = str.toLowerCase();

//   let reversedStr = str.split("").reverse().join("");

//   return str === reversedStr;
// }

// console.log(palindromCheck("ono"));

// M-TASK:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSquareNumbers(
//   numbers: number[]
// ): { number: number; square: number }[] {
//   const result: { number: number; square: number }[] = [];

//   numbers.forEach((num) => {
//     const square = num * num;
//     result.push({ number: num, square: square });
//   });

//   return result;
// }

// // Example usage:
// const squaredNumbers = getSquareNumbers([1, 2, 3]);
// console.log(squaredNumbers);

// L-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(sentence: string): string {
//   const words: string[] = sentence.split(" ");

//   const reversedWords: string[] = words.map((word) =>
//     word.split("").reverse().join("")
//   );

//   const reversedSentence: string = reversedWords.join(" ");

//   return reversedSentence;
// }

// console.log(reverseSentence("we like coding!"));

// K-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function countVowels(str: string | any[]) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// // Test
// console.log(countVowels("string")); // Output: 1

// J-TASK:
// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(str: string): string {
//   const words: string[] = str.split(" ");

//   let longestWord: string = "";
//   let maxLength: number = 0;

//   for (let i: number = 0; i < words.length; i++) {
//     const word: string = words[i].replace(/[^A-Za-z]/g, "");

//     if (word.length > maxLength) {
//       longestWord = word;
//       maxLength = word.length;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("I come from Uzbekistan"));

// // // I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function majorityElement(arr: number[]): number {
//   let countMap: { [key: number]: number } = {};

//   arr.forEach((num) => {
//     if (countMap[num]) {
//       countMap[num]++;
//     } else {
//       countMap[num] = 1;
//     }
//   });

//   let maxCount = 0;
//   let majorityElement = arr[0];

//   for (let num in countMap) {
//     if (countMap[num] > maxCount) {
//       maxCount = countMap[num];
//       majorityElement = parseInt(num);
//     }
//   }

//   return majorityElement;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// Priject Standards:
// -Logging Standarsds
// -Naming Standards
//   function, method, variable => CAMEL
//   class => Pascal
//   folder =>KEBAB
//   css => SNAKE
// -Error handling

// API turlari
// - Traditional Api,
// - Rest Api,
// - GraphQL Api
