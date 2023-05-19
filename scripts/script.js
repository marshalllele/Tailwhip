//Function to go through all elements of 'entries' (any element with the class "hidden") and applies/removes the 'show' class to the element
const observer = new IntersectionObserver((entries) => {
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    }
})

//Function to go through all elements of 'entries' (any element with the class "hidden-store") and applies/removes the 'show-store' class to the element
const storeItemObserver = new IntersectionObserver((entries) => {
    for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.isIntersecting) {
            entry.target.classList.add('show-store');
        } else {
            entry.target.classList.remove('show-store');
        }
    }
})

//Gets all elements with the 'hidden' class and adds them to a list. Passes that list into the 'observer' function
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//Gets all elements with the 'hidden-store' class and adds them to a list. Passes that list into the 'storeItemObserver' function
const hiddenStoreElements = document.querySelectorAll('.hidden-store');
hiddenStoreElements.forEach((el) => storeItemObserver.observe(el));

//Function to detect a click on the element with the id 'learnMore' and activates a function which removes the element with id 'infoButton' and adds some text in its place
function addTextNode () {
    $('#learnMore').on('click', function() { 
        var text = "Navigate to the 'FAQs' page for more info, or to the 'Contact' page to get in touch!";
        var newPara = document.createElement('p');
        var newText = document.createTextNode(text);
        newPara.appendChild(newText);
        newPara.style.innerHTML = 'bottom: 50px';
        document.getElementById('learnMore').appendChild(newPara);
        document.getElementById('infoButton').remove();
    })
}

//Function to detect a click on any element with class 'li' and decides if the element the user clicked on matches each element shown. If not, it is hidden. If it matches, then it is shown. 
//This is the filter function on the store page
$(document).ready(function(){
    $('.li').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.store-item').show('1000');
        } else {
            $('.store-item').not('.'+value).hide('1000');
            $('.store-item').filter('.'+value).show('1000');
        }
    });
});


$(document).ready(function() {
    $('.store-button').mouseover(function() {

        const id = $(this).attr('id');
        //const stock = <?php
        console.log("on");
        
        $(this).html(`<?= ${id}->checkStock();?>`); 
        
    }, function() {
        
        const id = $(this).attr('id');
        console.log("off");
        
        $(this).html(`<?= $${id}->price`);
    });
});





