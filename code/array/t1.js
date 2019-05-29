export default (str) => {
  //键盘号码映射
  let map=['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
  // 输入转数组 234 => [2,3,4]
  let num = str.split('')
  // 键盘映射后的字母内容 eg:23 => [abc,def]
  let code = [];
  num.forEach(item => {
    if(map[item]){
      code.push(map[item])
    }
  });
  let comb = (arr) => {
    let temp=[]
    for(let i=0,iL = arr[0].length;i<iL;i++){
      for(let j=0,jL = arr[1].length;j<jL;j++){
        temp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0,2,temp);
    if(arr.length>1){
      comb(arr)
    }else{
      return temp
    }
    return arr[0]
  }
  return comb(code)
}