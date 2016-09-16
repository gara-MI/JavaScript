
function Fperf1(n){
	for(var i=0;i<n;++i){
		var dd = $("#listOfrabbitQueues .checkbox :checkbox");
	}
}

function Sperf1(n){
	var d = $("#listOfrabbitQueues");
	for(var i=0;i<n;++i){
		var dd = d.find(".checkbox :checkbox");
	}
}

var f0 = performance.now();
Fperf1(100000);
var f1 = performance.now();


var s0 = performance.now();
Sperf1(100000);
var s1 = performance.now();


console.log(f1-f0);

console.log(s1-s0);




