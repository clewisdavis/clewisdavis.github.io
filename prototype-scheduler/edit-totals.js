console.log('it works');

// get ALL the inputs values of of each row
const courseRow1 = document.querySelectorAll('.courseRow1 td input');
const courseRow2 = document.querySelectorAll('.courseRow2 td input');
const courseRow3 = document.querySelectorAll('.courseRow3 td input');
const courseRow4 = document.querySelectorAll('.courseRow4 td input');
const courseRow5 = document.querySelectorAll('.courseRow5 td input');
const courseRow6 = document.querySelectorAll('.courseRow6 td input');

// row total
const totalCourseRow1 = document.querySelector('#totalsCourseRow1');
const totalCourseRow2 = document.querySelector('#totalsCourseRow2');
const totalCourseRow3 = document.querySelector('#totalsCourseRow3');
const totalCourseRow5 = document.querySelector('#totalsCourseRow5');
const totalCourseRow6 = document.querySelector('#totalsCourseRow6');

// needed total
const neededCourseRow1 = document.querySelector('#neededCourseRow1');
const neededCourseRow2 = document.querySelector('#neededCourseRow2');
const neededCourseRow3 = document.querySelector('#neededCourseRow3');
const neededCourseRow5 = document.querySelector('#neededCourseRow5');
const neededCourseRow6 = document.querySelector('#neededCourseRow6');

// course row tr for validation
const course1 = document.querySelector('.courseRow1');
const course2 = document.querySelector('.courseRow2');
const course3 = document.querySelector('.courseRow3');
const course5 = document.querySelector('.courseRow5');
const course6 = document.querySelector('.courseRow6');

// validation error message
const validationTotalErr = document.querySelector('.validation-error');

// get the days of week for totals from inputs
const sunday = document.querySelectorAll('#sun');
const monday = document.querySelectorAll('#mon');
const tuesday = document.querySelectorAll('#tues');
const wednesday = document.querySelectorAll('#wed');
const thursday = document.querySelectorAll('#thurs');
const friday = document.querySelectorAll('#fri');
const saturday = document.querySelectorAll('#sat');

// total display tfoot
const sundayTotal = document.querySelector('#sunTotal');
const mondayTotal = document.querySelector('#monTotal');
const tuesdayTotal = document.querySelector('#tuesTotal');
const wednesdayTotal = document.querySelector('#wedTotal');
const thursdayTotal = document.querySelector('#thursTotal');
const fridayTotal = document.querySelector('#friTotal');
const saturdayTotal = document.querySelector('#satTotal');


// WRAP EVERYTHING IN A DOM loading the document, run the total function so the numbers stay correct
document.addEventListener('DOMContentLoaded', function () {
    console.log('document loaded');
    // run the functions when DOM is loaded to calculate on page load
    findTotal();
    findTotal2();
    findTotal3();
    findTotal5();
    findTotal6();

    // a function for minimum required
    // border around the row, and another message at bottom
    function minimumLessonsValidation(your, needed, row) {
        if (Number(your) >= Number(needed)) { 
            row.style.border = "none";
            validationTotalErr.classList.add('hide');
        } else {
            row.style.border = '3px red solid';
            validationTotalErr.classList.remove('hide');
            console.log('fix it');
        }
    }

    // Store all the value to run validation
    // row 1
    let row1YourTotal;
    let row1NeededTotal;
    // row 2
    let row2YourTotal;
    let row2NeededTotal;
    // row 3
    let row3YourTotal;
    let row3NeededTotal;
    // row 5
    let row5YourTotal;
    let row5NeededTotal;
    // row 6
    let row6YourTotal;
    let row6NeededTotal;

    // run this function in each event listener to update the values
    function storeValues() {
        // row 1
        row1YourTotal = totalCourseRow1.innerText;
        row1NeededTotal = neededCourseRow1.innerText;
        // row 2
        row2YourTotal = totalCourseRow2.innerText;
        row2NeededTotal = neededCourseRow2.innerText;
        // row 3
        row3YourTotal = totalCourseRow3.innerText;
        row3NeededTotal = neededCourseRow3.innerText;
        // row 5
        row5YourTotal = totalCourseRow5.innerText;
        row5NeededTotal = neededCourseRow5.innerText;
        // row 6
        row6YourTotal = totalCourseRow6.innerText;
        row6NeededTotal = neededCourseRow6.innerText;

        // console.log(row1YourTotal, row1NeededTotal);
    }
    storeValues();
    
    // Calculate the days of the week totals
    function daysOfWeekTotal(day, displayTotal){
        let total = 0;
        for(let i = 0; i < day.length; i++) {
            console.log(day[i].value);
            total += parseInt(day[i].value);
        }
        displayTotal.textContent = total;
        console.log(total);
    }
    // daysOfWeekTotal();

    // FUNCTIONS 

    // Calculate Total Course Row 1
    function findTotal() {
        let total = 0;
        // let neededTotal = neededCourseRow1.textContent;
        // console.log('needed total: ' + neededTotal + ' your total: ' + total);
        // loop through the node list and get value of each
        for(let i =0; i < courseRow1.length; i++) {
            // console.log(courseRow1[i].value);
            // add up the value of all
            if (parseInt(courseRow1[i].value)){
                total += parseInt(courseRow1[i].value);
            } 
            // add them to the DOM
            totalCourseRow1.textContent = total;
        }
    }

    // Calculate Total Course Row 2
    function findTotal2() {
        let total = 0;
        // loop through the node list and get value of each
        for (let i = 0; i < courseRow2.length; i++) {
            // console.log(courseRow2[i].value);
            // add up the value of all
            if (parseInt(courseRow2[i].value)) {
                total += parseInt(courseRow2[i].value);
            }
            // add them to the DOM
            totalCourseRow2.textContent = total;
        }
    }

    // Calculate Total Course Row 3
    function findTotal3() {
        let total = 0;
        // loop through the node list and get value of each
        for (let i = 0; i < courseRow3.length; i++) {
            // console.log(courseRow3[i].value);
            // add up the value of all
            if (parseInt(courseRow3[i].value)) {
                total += parseInt(courseRow3[i].value);
            }
            // add them to the DOM
            totalCourseRow3.textContent = total;
        }
    }

    // Calculate Total Course Row 5
    function findTotal5() {
        let total = 0;
        // loop through the node list and get value of each
        for (let i = 0; i < courseRow5.length; i++) {
            // console.log(courseRow5[i].value);
            // add up the value of all
            if (parseInt(courseRow5[i].value)) {
                total += parseInt(courseRow5[i].value);
            }
            // add them to the DOM
            totalCourseRow5.textContent = total;
        }
    }

    // Calculate Total Course Row 6
    function findTotal6() {
        let total = 0;
        // loop through the node list and get value of each
        for (let i = 0; i < courseRow6.length; i++) {
            // console.log(courseRow6[i].value);
            // add up the value of all
            if (parseInt(courseRow6[i].value)) {
                total += parseInt(courseRow6[i].value);
            }
            // add them to the DOM
            totalCourseRow6.textContent = total;
        }
    }

    // EVENT LISTENERS

    // Listener Course Row 1
    courseRow1.forEach(
        function(e) {
            // console.log(e);

            // run this event listener every time a change is detected
            e.addEventListener('change', function () {
                // Run the total function
                findTotal();
                storeValues();
                minimumLessonsValidation(row1YourTotal, row1NeededTotal, course1);
                // console.log(e.attributes.id.textContent);
                
                // Switch statement to update the daily lesson totals by day in the table footer
                day = e.attributes.id.textContent;
                console.log(day);
                switch (day) {
                    case 'sun':
                        console.log('its sunday');
                        daysOfWeekTotal(sunday, sundayTotal);
                    break;
                    case 'mon':
                        console.log('its monday');
                        daysOfWeekTotal(monday, mondayTotal);
                    break;
                    case 'tues':
                        console.log('its tuesday');
                        daysOfWeekTotal(tuesday, tuesdayTotal);
                    break;
                    case 'wed':
                        console.log('its wednesday');
                        daysOfWeekTotal(wednesday, wednesdayTotal);
                    break;
                    case 'thurs':
                        console.log('its thursday');
                        daysOfWeekTotal(thursday, thursdayTotal);
                    break;
                    case 'fri':
                        console.log('its friday');
                        daysOfWeekTotal(friday, fridayTotal);
                    break;
                    case 'sat':
                        console.log('its saturday');
                        daysOfWeekTotal(saturday, saturdayTotal);
                    break;
                    default:
                        console.log('no day of the week')
                }
            })
        }
    )

    // Listener Course Row 2
    courseRow2.forEach(
        function (e) {
            // console.log(e);
            // run this event listener every time a change is detected
            e.addEventListener('change', function () {
                // Run the total function
                findTotal2();
                storeValues();
                minimumLessonsValidation(row2YourTotal, row2NeededTotal, course2);

                // Switch statement to update the daily lesson totals by day in the table footer
                day = e.attributes.id.textContent;
                console.log(day);
                switch (day) {
                    case 'sun':
                        console.log('its sunday');
                        daysOfWeekTotal(sunday, sundayTotal);
                    break;
                    case 'mon':
                        console.log('its monday');
                        daysOfWeekTotal(monday, mondayTotal);
                    break;
                    case 'tues':
                        console.log('its tuesday');
                        daysOfWeekTotal(tuesday, tuesdayTotal);
                    break;
                    case 'wed':
                        console.log('its wednesday');
                        daysOfWeekTotal(wednesday, wednesdayTotal);
                    break;
                    case 'thurs':
                        console.log('its thursday');
                        daysOfWeekTotal(thursday, thursdayTotal);
                    break;
                    case 'fri':
                        console.log('its friday');
                        daysOfWeekTotal(friday, fridayTotal);
                    break;
                    case 'sat':
                        console.log('its saturday');
                        daysOfWeekTotal(saturday, saturdayTotal);
                    break;
                    default:
                        console.log('no day of the week')
                }
            })
        }
    )

    // Listener Course Row 3
    courseRow3.forEach(
        function (e) {
            // console.log(e);
            // run this event listener every time a change is detected
            e.addEventListener('change', function () {
                // Run the total function
                findTotal3();
                storeValues();
                minimumLessonsValidation(row3YourTotal, row3NeededTotal, course3);

                // Switch statement to update the daily lesson totals by day in the table footer
                day = e.attributes.id.textContent;
                console.log(day);
                switch (day) {
                    case 'sun':
                        console.log('its sunday');
                        daysOfWeekTotal(sunday, sundayTotal);
                    break;
                    case 'mon':
                        console.log('its monday');
                        daysOfWeekTotal(monday, mondayTotal);
                    break;
                    case 'tues':
                        console.log('its tuesday');
                        daysOfWeekTotal(tuesday, tuesdayTotal);
                    break;
                    case 'wed':
                        console.log('its wednesday');
                        daysOfWeekTotal(wednesday, wednesdayTotal);
                    break;
                    case 'thurs':
                        console.log('its thursday');
                        daysOfWeekTotal(thursday, thursdayTotal);
                    break;
                    case 'fri':
                        console.log('its friday');
                        daysOfWeekTotal(friday, fridayTotal);
                    break;
                    case 'sat':
                        console.log('its saturday');
                        daysOfWeekTotal(saturday, saturdayTotal);
                    break;
                    default:
                        console.log('no day of the week')
                }
            })
        }
    )

    // Listener Course Row 5
    courseRow5.forEach(
        function (e) {
            // console.log(e);
            // run this event listener every time a change is detected
            e.addEventListener('change', function () {
                // Run the total function
                findTotal5();
                storeValues();
                minimumLessonsValidation(row5YourTotal, row5NeededTotal, course5);

                // Switch statement to update the daily lesson totals by day in the table footer
                day = e.attributes.id.textContent;
                console.log(day);
                switch (day) {
                    case 'sun':
                        console.log('its sunday');
                        daysOfWeekTotal(sunday, sundayTotal);
                    break;
                    case 'mon':
                        console.log('its monday');
                        daysOfWeekTotal(monday, mondayTotal);
                    break;
                    case 'tues':
                        console.log('its tuesday');
                        daysOfWeekTotal(tuesday, tuesdayTotal);
                    break;
                    case 'wed':
                        console.log('its wednesday');
                        daysOfWeekTotal(wednesday, wednesdayTotal);
                    break;
                    case 'thurs':
                        console.log('its thursday');
                        daysOfWeekTotal(thursday, thursdayTotal);
                    break;
                    case 'fri':
                        console.log('its friday');
                        daysOfWeekTotal(friday, fridayTotal);
                    break;
                    case 'sat':
                        console.log('its saturday');
                        daysOfWeekTotal(saturday, saturdayTotal);
                    break;
                    default:
                        console.log('no day of the week')
                }
            })
        }
    )

    // Listener Course Row 6
    courseRow6.forEach(
        function (e) {
            // console.log(e);
            // run this event listener every time a change is detected
            e.addEventListener('change', function () {
                // Run the total function
                findTotal6();
                storeValues();
                minimumLessonsValidation(row6YourTotal, row6NeededTotal, course6);

                // Switch statement to update the daily lesson totals by day in the table footer
                day = e.attributes.id.textContent;
                console.log(day);
                switch (day) {
                    case 'sun':
                        console.log('its sunday');
                        daysOfWeekTotal(sunday, sundayTotal);
                    break;
                    case 'mon':
                        console.log('its monday');
                        daysOfWeekTotal(monday, mondayTotal);
                    break;
                    case 'tues':
                        console.log('its tuesday');
                        daysOfWeekTotal(tuesday, tuesdayTotal);
                    break;
                    case 'wed':
                        console.log('its wednesday');
                        daysOfWeekTotal(wednesday, wednesdayTotal);
                    break;
                    case 'thurs':
                        console.log('its thursday');
                        daysOfWeekTotal(thursday, thursdayTotal);
                    break;
                    case 'fri':
                        console.log('its friday');
                        daysOfWeekTotal(friday, fridayTotal);
                    break;
                    case 'sat':
                        console.log('its saturday');
                        daysOfWeekTotal(saturday, saturdayTotal);
                    break;
                    default:
                        console.log('no day of the week')
                }
            })
        }
    )
// end DOM Loading
})

// needed per week how many lesson you need to do to finish

// reference to calculate rows
// https://stackoverflow.com/questions/13540751/how-get-total-sum-from-input-box-values-using-javascript