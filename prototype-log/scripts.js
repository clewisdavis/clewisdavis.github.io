console.log('it works');


$('.checkbox').change(function() {
  if (this.checked) {
    $(this).closest('tr').addClass("strikeout");
  } else {
    $(this).closest('tr').removeClass("strikeout");
  }
});

$('#session-list tr').click(function() {
    var href = $(this).find("a").attr("href");
    if(href) {
        window.location = href;
    }
});


// section / location functionality

// get the select menu
const sectionLocation = document.querySelector('#sectionLocation');

// you will have to get all of these, and then change the value for each node
const studentSectionAll = document.querySelectorAll('.studentSection');
// console.log(studentSectionAll);

  // store the select menu
  const selectMenu = `<select size="1" id="type1" class="field" id="standard-select">
              <option selected>Select section/location</option>
            	<option>Earth Science A/MyCA</option>
              <option>Math A/MyCA</option>
              <option>Music Theory C/MyCA</option>
            </select>`;

// load the DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM is loaded');
  // loop through this on page load and set all the sections with select drop down
  for (let i = 0; i < studentSectionAll.length; i++) {
    // console.log(studentSectionAll[i]);
    studentSectionAll[i].textContent = '';
    studentSectionAll[i].insertAdjacentHTML('afterbegin', selectMenu);
  }
})

// add event listener for change on the Section/Location select at top of page
sectionLocation.addEventListener('change', function() {

  // store the value of the select menu section/location
  const selectValue = sectionLocation.value;

  // loop through and change the text content for each item
  for (let i = 0; i < studentSectionAll.length; i++) {
    // console.log(studentSectionAll[i]);
    if(selectValue === 'No Applicable Section' || selectValue === 'Select Section/Location') {
      studentSectionAll[i].textContent = '';
      studentSectionAll[i].insertAdjacentHTML('afterbegin', selectMenu);
    } else {
      studentSectionAll[i].textContent = selectValue;
    }
  }
});
