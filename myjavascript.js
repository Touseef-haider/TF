<<<<<<< HEAD
window.onscroll=()=>{
	if (document.documentElement.scrollTop < 155) {
		console.log(document.documentElement.scrollTop)
		document.querySelector('#logo-main').style.display = 'inline-block';
		document.querySelector('#logo-scrl').style.display = 'none';
	}
	
	else{
		document.querySelector('#logo-main').style.display = 'none';
		document.querySelector('#logo-scrl').style.display = 'inline-block';
	}
}
document.querySelector('.main-service').addEventListener('mouseover',()=>{
	var x = window.matchMedia("(max-width: 991px)")
	var y = window.matchMedia("(max-width: 1076px)")
	
	 if (x.matches) {
		document.querySelector('#services-section').style.display='none'
		document.querySelector('.serviceD').style.display='none'
		document.querySelector('.serviceM').style.display='block'
	}
	else{
		document.querySelector('.serviceM').style.display='none'
		document.querySelector('#services-section').style.display='block'
		document.querySelector('#services-section').style.left='55%';
		document.querySelector('#services-section').style.transition='left 1s'
	}

	})
		document.querySelector('.main-service').addEventListener('mouseout',()=>{
		document.querySelector('#services-section').style.display='none'
	})

	document.querySelector('#services-section').addEventListener('mouseover',()=>{
	document.querySelector('#services-section').style.display='block'
	})
	document.querySelector('#services-section').addEventListener('mouseleave',()=>{
	document.querySelector('#services-section').style.display='none'
})




var count = 0; 
function myFun() {
	if (count == 0) {
		
		var x = window.matchMedia("(max-width: 500px)")
		if (x.matches) {
			// document.querySelector('welcome-text span').style.marginTop = '50px'
			document.querySelector('.divToShow').classList.add('openDiv')
			document.querySelector('.divToShow').style.width = '250px'
			document.querySelector('.divToShow').style.animation = 'grow1 0.5s forwards'
			document.querySelector('.outer-show').style.left = '250px'
			document.querySelector('.outer-show').style.transition = 'left 1s'
			document.querySelector('.outer-show').style.zindex = 2;
			document.querySelector('.divToShow').style.display = 'block'
			setTimeout(() => {
				document.querySelector('.btn-3').style.display='block';						
				document.querySelector('.close-icon').style.display='block';
			}, 500);
			count = count + 1;
			
		} else {
			document.querySelector('.divToShow').classList.add('openDiv')
			document.querySelector('.divToShow').style.width = '400px';
			document.querySelector('.divToShow').style.animation = 'grow0 0.3s forwards'
			document.querySelector('.outer-show').style.left = '400px';
			document.querySelector('.outer-show').style.transition = 'left 1s';
			document.querySelector('.outer-show').style.zindex = 2;
			document.querySelector('.divToShow').style.display = 'block'
			setTimeout(() => {
				document.querySelector('.btn-3').style.display='block';
				// document.querySelector('.msg-btn').style.display='block';
				document.querySelector('.close-icon').style.display='block';
			}, 500);
			count = count + 1;
			
		}
	}
	else{
		count=0
		document.querySelector('.divToShow').style.display = 'none'
		document.querySelector('.outer-show').style.left = '0px'
		document.querySelector('.outer-show').style.transition = 'left 1s'
		
		document.querySelector('.btn-3').style.display='none'
		document.querySelector('.close-icon').style.display='none';

	}
}
function closeForm() {
	if (count==1) {
		document.querySelector('.divToShow').style.display = 'none';
		document.querySelector('.outer-show').style.left = '0px'
		document.querySelector('.outer-show').style.transition = 'left 1s';
		document.querySelector('.close-icon').style.display='none';
		document.querySelector('.btn-3').style.display='none'
		count=0
	}

}
	
var industry='';
var	logo='';
var designType='';
var elements='';
var art='';
var color='';
var time = '';
var ins = '';
var helpUS = '';
var slogan = '';
var reviews = '';
var perspective = '';
var email = '';
var num = null;
var check = null;
var finalobj;
var total;

// Question 1
document.querySelector('#industry').addEventListener('change',(e)=>{
  industry  = e.target.value
})
document.querySelector('#logo').addEventListener('change',(e)=>{
  logo = e.target.value
})

document.querySelector("#question1btn").addEventListener('click',()=>{

	if (industry == '' || logo == '') {
		document.querySelector('#message1').textContent = 'Please fill the fields first'
	}else{
		console.log({industry,logo})
		document.querySelector('.question1').style.display='none'
		document.querySelector('.question2').style.display='block'
	}
})

// End of question 1


// Question 2
document.querySelector('#designType').addEventListener('change',(e)=>{
	designType = e.target.value
	console.log(designType)
})
  
document.querySelector('#Elements').addEventListener('change',(e)=>{
	elements = e.target.value
	console.log(elements)
})
  
document.querySelector('#art').addEventListener('change',(e)=>{
	art = e.target.value
	console.log(art)
})
  
document.querySelector('#color').addEventListener('change',(e)=>{
	color = e.target.value
	console.log(color)
})
  
document.querySelector("#question2btn").addEventListener('click',()=>{

	if (designType == '' || elements == '' || art == '' || color == '') {
		document.querySelector('#message2').textContent = 'Please fill the fields first'
	}else{
		console.log({designType,elements,art,color})
		document.querySelector('.question2').style.display='none'
		document.querySelector('.question3').style.display='block'
	}
})

// End of Question 2

// Question 3
document.querySelector('#time').addEventListener('change',(e)=>{
	time = e.target.value
	console.log(time)
})
  
document.querySelector('#insp').addEventListener('change',(e)=>{
	ins = e.target.value
	console.log(ins)
})
  
document.querySelector('#helpUs').addEventListener('change',(e)=>{
	helpUS = e.target.value
	console.log(art)
})
  
document.querySelector('#slogan').addEventListener('change',(e)=>{
	slogan = e.target.value
	console.log(color)
})
  
document.querySelector("#question3btn").addEventListener('click',()=>{

	if (time == '' || ins == '' || helpUS == '' || slogan == '') {
		document.querySelector('#message3').textContent = 'Please fill the fields first'
	}else{
		console.log({time,ins,helpUS,slogan})
		document.querySelector('.question3').style.display='none'
		document.querySelector('.question4').style.display='block'
	}
})

// End of question 3


// Question 4
document.querySelector('#reviews').addEventListener('change',(e)=>{
	reviews  = e.target.value
  })
  document.querySelector('#perspective').addEventListener('change',(e)=>{
	perspective = e.target.value
  })
  
  document.querySelector("#question4btn").addEventListener('click',()=>{
	  if (reviews == '' || perspective == '') {
		  document.querySelector('#message4').textContent = 'Please fill the fields first'
	  }else{
		  console.log({reviews,perspective})
		  document.querySelector('.question4').style.display='none'
		  document.querySelector('.question5').style.display='block'
	  }
  })


//   End of Question 4



// Question 5
document.querySelector('#form_email').addEventListener('change',(e)=>{
	email  = e.target.value
  })
  document.querySelector('#form_subject').addEventListener('change',(e)=>{
	num = e.target.value
  })
  
  document.querySelector('#flexCheckDefault').addEventListener('change',(e)=>{
	check = e.target.checked
	console.log(check)
  })
  


  document.querySelector("#question5btn").addEventListener('click',()=>{
	  if (email == '' || num == null || check == false) {
		  document.querySelector('#message5').textContent = 'Please fill the fields first'
	  }else{
		document.querySelector("#question5btn").textContent = 'Sending...'
		finalobj = {			  
			industry ,
			logo,
			designType:{price:designType.split('$')[1].split(')')[0],designType},
			elements:{price:elements.split('$')[1].split(')')[0],elements},
			art:{price:art.split('$')[1].split(')')[0],art},
			color : { price: color.split('$')[1].split(')')[0] ,color},
			time,
			ins,
			helpUS,
			slogan,
			reviews:{price:reviews.split('$')[1].split(')')[0],reviews},
			perspective:{price:perspective.split('$')[1].split(')')[0],perspective},
			email,
			num,
			check,
		  };
		  
		console.log("EMAIL",email)
	    total = Number(finalobj.designType.price) + Number(finalobj.elements.price) + Number(finalobj.art.price) + Number(finalobj.color.price) + Number(finalobj.reviews.price) + Number(finalobj.perspective.price)
		const tempParams = {
			from_name:"support@trulyfuture.com",
			to_name:email,
			message:`
			Thanks for Choosing Us
			Your
			total bill is  
			$${total} 
			`
		}
		emailjs.send('service_tx9okob','template_wxoxolt',tempParams).then(res=>{
			alert("mail sent succesfully")
			document.querySelector("#question5btn").textContent = 'Send Email Again'
				
		})
		console.log(finalobj)
	  }
  })


//   End of Question 5



=======
document.querySelector('.main-service').addEventListener('mouseover',()=>{
	var x = window.matchMedia("(max-width: 991px)")
	var y = window.matchMedia("(max-width: 1076px)")

	 if (x.matches) {
		document.querySelector('#services-section').style.display='none'
		document.querySelector('.serviceD').style.display='none'
		document.querySelector('.serviceM').style.display='block'
	}
	else{
		document.querySelector('.serviceM').style.display='none'
		document.querySelector('#services-section').style.display='block'
		document.querySelector('#services-section').style.left='55%';
		document.querySelector('#services-section').style.transition='left 1s'
	}

	})
		document.querySelector('.main-service').addEventListener('mouseout',()=>{
		document.querySelector('#services-section').style.display='none'
	})

	document.querySelector('#services-section').addEventListener('mouseover',()=>{
	document.querySelector('#services-section').style.display='block'
	})
	document.querySelector('#services-section').addEventListener('mouseleave',()=>{
	document.querySelector('#services-section').style.display='none'
})




var count = 0; 
function myFun() {
	if (count == 0) {

		var x = window.matchMedia("(max-width: 500px)")
		if (x.matches) {
			// document.querySelector('welcome-text span').style.marginTop = '50px'
			document.querySelector('.divToShow').classList.add('openDiv')
			document.querySelector('.divToShow').style.width = '250px'
			document.querySelector('.divToShow').style.animation = 'grow1 0.5s forwards'
			document.querySelector('.outer-show').style.left = '250px'
			document.querySelector('.outer-show').style.transition = 'left 1s'
			document.querySelector('.outer-show').style.zindex = 2;
			document.querySelector('.divToShow').style.display = 'block'
			setTimeout(() => {
				document.querySelector('.btn-3').style.display='block';						
				document.querySelector('.close-icon').style.display='block';
			}, 500);
			count = count + 1;

		} else {
			document.querySelector('.divToShow').classList.add('openDiv')
			document.querySelector('.divToShow').style.width = '400px';
			document.querySelector('.divToShow').style.animation = 'grow0 0.3s forwards'
			document.querySelector('.outer-show').style.left = '400px';
			document.querySelector('.outer-show').style.transition = 'left 1s';
			document.querySelector('.outer-show').style.zindex = 2;
			document.querySelector('.divToShow').style.display = 'block'
			setTimeout(() => {
				document.querySelector('.btn-3').style.display='block';
				// document.querySelector('.msg-btn').style.display='block';
				document.querySelector('.close-icon').style.display='block';
			}, 500);
			count = count + 1;

		}
	}
	else{
		count=0
		document.querySelector('.divToShow').style.display = 'none'
		document.querySelector('.outer-show').style.left = '0px'
		document.querySelector('.outer-show').style.transition = 'left 1s'

		document.querySelector('.btn-3').style.display='none'
		document.querySelector('.close-icon').style.display='none';

	}
}
function closeForm() {
	if (count==1) {
		document.querySelector('.divToShow').style.display = 'none';
		document.querySelector('.outer-show').style.left = '0px'
		document.querySelector('.outer-show').style.transition = 'left 1s';
		document.querySelector('.close-icon').style.display='none';
		document.querySelector('.btn-3').style.display='none'
		count=0
}

}
>>>>>>> a70f3020fcf2a1ea7e456b43bcf6f9b285619d9a
