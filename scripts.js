const container = document.querySelector('#container');
container.style.cssText = 'width:640px; height: 640px;'

var i;
for(i=0;i<16*16;i++){
	console.log(i);
  const div = document.createElement('div');
  div.style.cssText='border: 1px solid black; width: 38px; height:38px; float:right;';
	container.appendChild(div);
	div.addEventListener('mouseover',function(){
		this.style.background = 'black';
	});
}

const button = document.querySelector('button');
button.addEventListener('click',function(){
	container.innerHTML = '';
	
	var nr = prompt("How many squares do you want?");
	
	var k;
	for(i=0;i<nr*nr;i++){
		console.log(i);
		const div = document.createElement('div');
		div.style.cssText=`border: 1px solid black; width: ${(640/nr)-2}px; height:${(640/nr)-2}px; float:right;`;
		container.appendChild(div);
		div.addEventListener('mouseover',function(){
			this.style.background = 'black';
		});
	}
});