function calculateMinCost() {
	var inputData=document.getElementById('rope-lengths').value;
	var inputArr=inputData.split(',').map(Number);
	alert(inputArr);
	
  var n=inputArr.length;
	inputArr.sort(function (a,b) return { a-b})
		
	var cost=0;
	while(n>1){
		//var cost=0;
		var lengthofRope=inputArr[0]+inputArr[1];
		cost=cost+lengthofRope;
		inputArr.splice(0,2);
		inputArr.push(lengthofRope);
		inputArr.sort(function(a,b) return{a-b});
		
	}
	document.getElementById('result').textContent=cost;
  
  
  
}  
