// Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

// Loop through all dropdown elements
dropdowns.forEach((dropdown) => {

    // Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // We are using this method in order to have 
    // multiple dropdown menus on the page work


    // Add a click event to the select element
    select.addEventListener('click', () => {
        // Add the clicked select styles to the select element 
        select.classList.toggle('select-clicked');
        // add the rotate styles to th caret element 
        caret.classList.toggle('caret-rotate');
        // add the open styles to the menu element 
        menu.classList.toggle('menu-open');
    });

    // Loop through all option elements 
    options.forEach((option) => {
       // Add a click event to the option element
      option.addEventListener('click', () => {
          // Change selected inner text to clicked options inner text
        selected.innerText = option.innerText;
         // Add the clicked selsect styles to the select element
          select.classList.add('select-clicked');
          // Add the rotate styles to the caret element
         caret.classList.add('caret-rotate');
         // Add the open styles to the menu element
           menu.classList.add('menu-open');
          // remove active class from all option elemaents
         options.forEach(option1 => {
              option1.classList.remove('active');
           });
       //add active class to clicked option element
            option.classList.add('active');
       });
    });
});























