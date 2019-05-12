/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Cedric Clark
******************************************/
   
// Defined Global varibles
const unorderedList = document.getElementsByClassName('student-list')[0];
const studentList = unorderedList.children;
const pageLinks = document.getElementsByClassName('page')[0];

//  'showPage' function displays 10 items per page until its fewer than 10 and hides the remaining list items.
const showPage = (list, pageNumber) => {
  for(let i = 0; i < list.length; i += 1){
      if ( i < pageNumber * 10 || i >= ( pageNumber + 1 ) * 10 ){
        list[i].style.display = 'none';
      } else {
        list[i].style.display = 'block';
      }
  }
}
// 'appendPageLinks' function dynamically creates and loads the HTML
//  eventListener on anchor tags 0-5  listens for the anchor clicked and changes the 'className' value to 'active' */
const appendPageLinks = () => {
	const studentNum = studentList.length;
	const pageAmount = Math.ceil( studentNum / 10 );
	
	const newDiv = document.createElement("div");
	newDiv.className = 'pagination';
	newDiv.textContent = '';
	pageLinks.appendChild(newDiv);
	
	const newUL = document.createElement('ul');
	const activeSelection = document.getElementsByClassName('.pagination').firstChild;
	newDiv.appendChild(newUL);
	

	// pageAmount + 1 is to end event target on the 7th anchor
	for(let i = 0; i < pageAmount + 1; i += 1){ 
  		const newLi = document.createElement('li');
		const newAnchor = document.createElement('a');
		newUL.appendChild(newLi);
		
		newAnchor.className = '';
		newAnchor.href = '#';
		newAnchor.textContent = i+1; // to change anchor text from 0-5 to 1-7
		newLi.appendChild(newAnchor);
	
		newAnchor.addEventListener("click", (e) => {
			const aList = document.getElementsByTagName('a');
			for( let i = 0; i < aList.length ; i += 1){
				if ( aList[i].className === '' ){
					e.target.className = 'active';				
				} else {
					aList[i].className = '';
				}
			}
			showPage(studentList, i);		
 		});
	}

	// starts with first anchor  'className' value as 'active'
	// Hides the last child anchor tag

	const aList = document.getElementsByTagName('a');
	aList[0].className = 'active';
	newUL.lastChild.style.display = 'none';
}

// 'showPage' starts on the first page
showPage(studentList,0);
appendPageLinks();


