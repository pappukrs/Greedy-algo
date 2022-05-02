function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let n=+(input[0]);
    let arr=input[1].trim().split(" ").map(Number).sort((a,b)=>{return a-b});
    console.log(solve(arr,n));
  }
   function solve(arr,n){
       let Q=[];
       for(let i=0;i<n;i++){
           if(i%2===0){
               Q.unshift(arr[i]);
           }
           else{
               Q.push(arr[i]);
           }
       }
       let diff=-100000;
       for(let i=0;i<Q.length-1;i++){
           diff=Math.max(Math.abs(Q[i]-Q[i+1]),diff);
       }
       return diff;
   }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }