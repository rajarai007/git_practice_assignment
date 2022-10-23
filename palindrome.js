let str="naman";
let n_str="";
  for (let i =str.length-1;i>=0;i--){
      n_str+=str[i];
  }
  if(n_str===str){
      console.log("Palindrome");
  }else{
      console.log("Not Palindrome");
  }