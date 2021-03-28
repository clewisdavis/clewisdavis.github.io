console.log('it works');

// section / location select functionality
// script written for UX designer to simulate functionality for user testing and stakeholder feedback
// demo's here: https://clewisdavis.github.io/prototypes.html

// get the select menu
const sectionLocation = document.querySelector('#sectionLocation');

// you will have to get all of these, and then change the value for each node
const studentSectionAll = document.querySelectorAll('.studentSection');
// console.log(studentSectionAll);

// store the select menu
const selectMenu = `
<select size="1" id="type1" class="field" id="standard-select">
    <option selected>Select section/location</option>
    <option>Earth Science A/MyCA</option>
    <option>Math A/MyCA</option>
    <option>Music Theory C/MyCA</option>
</select>`;

// load the DOM
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is loaded');
  // loop through this on page load and set all the sections with select drop down
  for (let i = 0; i < studentSectionAll.length; i++) {
    // console.log(studentSectionAll[i]);
    studentSectionAll[i].textContent = '';
    studentSectionAll[i].insertAdjacentHTML('afterbegin', selectMenu);
  }
});

// add event listener for change on the Section/Location select at top of page
sectionLocation.addEventListener('change', () => {
  // store the value of the select menu section/location
  const selectValue = sectionLocation.value;

  // loop through and change the text content for each item
  for (let i = 0; i < studentSectionAll.length; i++) {
    // console.log(studentSectionAll[i]);
    if (selectValue === 'No Applicable Section' || selectValue === 'Select Section/Location') {
      studentSectionAll[i].textContent = '';
      studentSectionAll[i].insertAdjacentHTML('afterbegin', selectMenu);
    } else {
      studentSectionAll[i].textContent = selectValue;
    }
  }
});
