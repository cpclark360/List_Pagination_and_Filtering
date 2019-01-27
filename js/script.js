/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Cedric Clark
******************************************/
   


// Defined Global varibles

const unorderedList = document.getElementsByClassName('student-list')[0];
const studentList = unorderedList.children;
const pageLinks = document.getElementsByClassName('page')[0];


//  'showPage' function 

const showPage = (list, pageNumber) => {

  for(let i = 0; i < list.length; i += 1){
      if ( i < pageNumber * 10 || i >= ( pageNumber + 1 ) * 10 ){
        list[i].style.display = 'none';
      } else {
        list[i].style.display = 'block';
      }
  }
}


//

const appendPageLinks = () => {
	const studentNum = studentList.length;
	const pageAmount = Math.ceil( studentNum / 10 );
	const paginationLocationAfter = document.getElementsByClassName('student-list');
	

	const newDiv = document.createElement("div");
	newDiv.className = 'pagination';
	newDiv.textContent = '';
	pageLinks.appendChild(newDiv);
	const newUL = document.createElement('ul');
	const activeSelection = document.getElementsByClassName('.pagination').firstChild;
	newDiv.appendChild(newUL);
	const newLi = document.createElement('li');
	const newAnchor = document.createElement('a');

	for(let i = 0; i < pageAmount + 1; i += 1){
		
  		const newLi = document.createElement('li');
		const newAnchor = document.createElement('a');
		newUL.appendChild(newLi);
		newAnchor.className = '';
		newAnchor.href = '#';
		newAnchor.textContent = i+1;
		newLi.appendChild(newAnchor);
		
		// Cant figure out why the 6th button className isnt being changed after its been clicked.
		newAnchor.addEventListener("click", (e) => {
			const aList = document.getElementsByTagName('a');
			for( let i = 0; i < aList.length ; i += 1){
				if ( aList[i].className === '' ){
					e.target.className = 'active';
					console.log(i);
				} else {
					aList[i].className = '';
				}
			}
			showPage(studentList, i);
			
 		});
	}
}







showPage(studentList,0);
appendPageLinks();

const aList = document.getElementsByTagName('a');
aList[0].className = 'active'
aList[6].style.display = 'none';





// Remember to delete the comments that came with this file, and replace them with your own code comments

