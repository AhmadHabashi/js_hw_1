
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
