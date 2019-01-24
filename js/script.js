/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const unorderedList = document.getElementsByClassName('student-list')[0];
const studentList = unorderedList.children;
const pageLinks = document.getElementsByClassName('page')[0];







/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/


const showPage = (list, pageNumber) => {

  for(let i = 0; i < list.length; i += 1){
      if ( i < pageNumber * 10 || i >= ( pageNumber + 1 ) * 10 ){
        list[i].style.display = 'none';
      } else {
        list[i].style.display = 'block';
      }
  }
}


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = () => {
	const studentNum = studentList.length;
	const pageAmount = Math.ceil( studentNum / 10 );
	const paginationLocationAfter = document.getElementsByClassName('student-list');
	
	const newDiv = document.createElement("div");
	newDiv.className = 'pagination';
	newDiv.textContent = '';
	pageLinks.appendChild(newDiv);
	const newUL = document.createElement('ul');
	newDiv.appendChild(newUL);


	for(let i = 0; i < pageAmount; i += 1){
		
		console.log(i);

		newLi = document.createElement('li');
		newUL.appendChild(newLi);

		newAnchor = document.createElement('a');
		
		newAnchor.href ='#';
		newAnchor.textContent = i+1;
		newLi.appendChild(newAnchor);
	}





}

// Remember to delete the comments that came with this file, and replace them with your own code comments.