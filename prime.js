let num=17;
    for(let i=0;i<=num;i++){
        let count=0;
	if(num%i===0){
          count++;
        }
    } if (count===2) {
	console.log("PRIME");
    } else {
	console.log("NOT PRIME");
    }