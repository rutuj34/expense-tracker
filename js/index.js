var insert=document.querySelector('.amt-btn');
var amt=document.querySelector('.amt');
var cred=document.querySelector('.cred');
var debt=document.querySelector('.debt')
var bal=document.querySelector('.balance');





var tran=[]

 insert.addEventListener('click',function(){
	 let balance=Number(bal.value);
	 let amount=Number(amt.value);
	 console.log(balance);
	 console.log(amount);
	 tran=[0];
	 if(amt.value>=0){
		  tran.push(amt.value);
		  cred.innerHTML+="<h4>"+amt.value+"</  h4>";
	  }
	  else{
		  debt.innerHTML+="<h4>"+amt.value+"</h4>";
	 }
	(bal.value)=balance+amount;
	
 });

