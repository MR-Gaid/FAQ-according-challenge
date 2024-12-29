// select the paragrph and toggle icon for section 1 
const paragraphsection1 = document.querySelector("#section1 p"); 
const toggoleicon1 = document.querySelector("#toggle-icon1")
const section1h4 = document.querySelector("#section1-header h4" )

// Function to toggle the paragraph and icon
toggoleicon1.addEventListener("click", () => {
    // Toggle the 'hidden' class on the paragraph
    paragraphsection1.classList.toggle("hidden");

// change the icon
if (paragraphsection1.classList.contains('hidden')) {
    toggoleicon1.src = './assets/images/icon-plus.svg';
    toggoleicon1.alt = 'plus icon';
}else {
    toggoleicon1.src = './assets/images/icon-minus.svg';
    toggoleicon1.alt = 'minus icon'
}
});

// Or add a click event listener to the h4 text
 section1h4.addEventListener("click", () =>{
    paragraphsection1.classList.toggle("hidden")

if (paragraphsection1.classList.contains('hidden')) {
    toggoleicon1.src = './assets/images/icon-plus.svg';
    toggoleicon1.alt = 'plus icon';
}else {
    toggoleicon1.src = './assets/images/icon-minus.svg';
    toggoleicon1.alt = 'minus icon'
    }
 });

// select the paragrph and toggle icon for section 2 
const paragraphsection2 = document.querySelector("#section2 p")
const toggoleicon2 = document.querySelector("#toggle-icon2")
const section2h4 = document.querySelector("#section2-header h4" )

// Add a click event listener to the icon
toggoleicon2.addEventListener("click", () => {
    // Toggle the 'hidden' class on the paragraph
    paragraphsection2.classList.toggle("hidden");

// change the icon
if (paragraphsection2.classList.contains('hidden')) {
    toggoleicon2.src = './assets/images/icon-plus.svg';
    toggoleicon2.alt = 'plus icon';
}else {
    toggoleicon2.src = './assets/images/icon-minus.svg';
    toggoleicon2.alt = 'minus icon'
}
  });
// Or add a click event listener to the h4 text
section2h4.addEventListener("click", () =>{
    paragraphsection2.classList.toggle("hidden")

if (paragraphsection2.classList.contains('hidden')) {
    toggoleicon2.src = './assets/images/icon-plus.svg';
    toggoleicon2.alt = 'plus icon';
}else {
    toggoleicon2.src = './assets/images/icon-minus.svg';
    toggoleicon3.alt = 'minus icon'
    }
 });
// select the paragrph and toggle icon for section 3 
const paragraphsection3 = document.querySelector("#section3 p")
const toggoleicon3 = document.querySelector("#toggle-icon3") 
const section3h4 = document.querySelector("#section3-header h4" )

// Add a click event listener to the icon
toggoleicon3.addEventListener("click", () => {
    // Toggle the 'hidden' class on the paragraph
    paragraphsection3.classList.toggle("hidden");

// change the icon
if (paragraphsection3.classList.contains('hidden')) {
    toggoleicon3.src = './assets/images/icon-plus.svg';
    toggoleicon3.alt = 'plus icon';
}else {
    toggoleicon3.src = './assets/images/icon-minus.svg';
    toggoleicon3.alt = 'minus icon'
}    
  });

// Or add a click event listener to the h4 text
section3h4.addEventListener("click", () =>{
    paragraphsection3.classList.toggle("hidden")

if (paragraphsection3.classList.contains('hidden')) {
    toggoleicon3.src = './assets/images/icon-plus.svg';
    toggoleicon3.alt = 'plus icon';
}else {
    toggoleicon3.src = './assets/images/icon-minus.svg';
    toggoleicon3.alt = 'minus icon'
    }
 });

// select the paragrph and toggle icon for section 4 
const paragraphsection4 = document.querySelector("#section4 p")
const toggoleicon4 = document.querySelector("#toggle-icon4")
const section4h4 = document.querySelector("#section4-header h4" ) 

// Add a click event listener to the icon
toggoleicon4.addEventListener("click", () => {
    // Toggle the 'hidden' class on the paragraph
    paragraphsection4.classList.toggle("hidden");

// change the icon
if (paragraphsection4.classList.contains('hidden')) {
    toggoleicon4.src = './assets/images/icon-plus.svg';
    toggoleicon4.alt = 'plus icon';
}else {
    toggoleicon4.src = './assets/images/icon-minus.svg';
    toggoleicon4.alt = 'minus icon'
}
  });

// Or add a click event listener to the h4 text
section4h4.addEventListener("click", () =>{
    paragraphsection4.classList.toggle("hidden")

if (paragraphsection4.classList.contains('hidden')) {
    toggoleicon4.src = './assets/images/icon-plus.svg';
    toggoleicon4.alt = 'plus icon';
}else {
    toggoleicon4.src = './assets/images/icon-minus.svg';
    toggoleicon4.alt = 'minus icon'
    }
 });
