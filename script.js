function calculateMinCost() {
	var inputData=document.getElementbyId('rope-lengths').value
	var inputArr=inputArr.split(',').map(Number);
	
  var n=inputArr.length
	inputArr.sort(function (a,b) return { a-b})
		
	
	while(n>1){
		var cost=0;
		var lengthofRope=inputArr[0]+inputArr[1];
		cost=cost+lengthofRope;
		inputArr.splice(0,2);
		inputArr.push(lengthofRope);
		inputArr.sort(function(a,b) return{a-b});
		
	}
	document.querySelector('#result').textContent=cost;
  
  
  
}  
