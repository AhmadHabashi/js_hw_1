
//1
// let name = 'Mary ';
// let activity = 'drink tea';
// let bio = 'Our guest ' + name + activity + '.';
// console.log(bio.length);

//2
//const str ='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
// const charnum = prompt("enter num of char in string");
// console.log(`char#${charnum}is: "${str.charAt(charnum)}"`);

//3
// const str1 = prompt("enter str");
// console.log("last char is "+str1.charAt(str1.length-1)+'. last char -1 is:'+ str1.charAt(str1.length-2)+'.');

//4
// const str2 = 'abcde';
// let strrev ='';

// for(let i=str2.length-1;i>=0;i--)
// {
// strrev+=str2.charAt(i)
// }
// console.log(strrev);

//5
// let str3 = 'js';
// console.log(str3.charAt(2), str3.toUpperCase);

//6
// const enter = prompt("Enter str")
// const str4 =
//   'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';
//   console.log(str4);
//   console.log(str4.includes(enter));

//7
// let str = '1-2-3-4-5';
// const char = '-';

// while (str.includes(char))
//   {
// 	str = str.replace(char, '.');
// }
// console.log(str);

//8
// const str5 = "1-2-3-4-5";
// const newStr = str5.replaceAll("-",".");

// console.log(newStr);

//9
// const str = 'sdfwe';
// console.log(str.substring(4,2));//fw

//10
const str = "I'm learning javascript!";
console.log(str.slice(4,12), str.slice(12, 24));
console.log(str.substring(4, 12), str.substring(12, 24));
console.log(str.substr(4, 8), str.substr(12, 24));
//11
if (str.indexOf('http://') === 0) {
  console.log("The string starts with 'http://'");
} else {
  console.log("The string does not start with 'http://'");
}

//12
const str = 'https://www.notion.html';

if (str.indexOf('.html') === str.length - 5) {
  console.log("The string ends with '.html'");
} else {
  console.log("The string does not end with '.html'");
}

//13
const str = 'ab cd cd cd ef';
console.log(str.lastIndexOf('cd'));//9
console.log(str.lastIndexOf('cd',8));//6

//14
const str = 'abcde';
console.log(str.startswith('abc'));//true
console.log(str.startswith('xxx'));//false
console.log(str.startswith('bc',1));//true

//15
const str = 'abcde';
console.log(str.endsWith('cde'));//true
console.log(str.endsWith('xxx'));//false
console.log(str.endsWith('bc',3));//true

//16
let str = 'ab-cd-ef';
console.log(str.split('-'));//["ab", "cd", "ef"]
console.log(str.split('-'.2));//["ab", "cd"]
console.log(str.split(''));//["a", "b", "-", "c", "d", "-", "e", "f"]
console.log(str.split('',3));//["a", "b", "-"]

let str2 ='12345';
console.log(str2.split(''))//["1", "2", "3", "4", "5"]
