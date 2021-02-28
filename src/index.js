module.exports = function reverse (n) {
  let a = n.toString().split('');
  let res = '';
for(let i = a.length-1; i>=0; i--){
 if(a[i]=='-'){
     continue;
 }
  res+=a[i];
}
return res;
}
