


// CHOOSE START DATE PAGE
// start select radio
const dateRecommend = document.querySelector('#radio1');
const dateAdvanced = document.querySelector('#radio2');
const advancedTable = document.querySelector('.custom-dates');
const footerButtons = document.querySelector('.pin');

// recommended radio
dateRecommend.addEventListener('click', function(){
    advancedTable.classList.add("hide");
    footerButtons.classList.remove("pinned");
})

// advanced radio
dateAdvanced.addEventListener('click', function() {
    advancedTable.classList.remove("hide");
    footerButtons.classList.add("pinned");
})