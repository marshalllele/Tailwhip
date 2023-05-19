//get the button using its unique id
var button = document.getElementById('fishSpots');

//add an event listener to this button so that when clicked we call the getlists() function
button.addEventListener('click', getLists, false);

function getLists() {
    //create new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    //when response has loaded
    xhr.onload = function() {
        //will only work on an online server, not locally
        //if the server status was ok
        if (xhr.status === 200) {
            //update
            document.getElementById('fishLists').innerHTML = xhr.responseText;
        }
    };
    
    //prepare the request
    xhr.open('GET', 'data/fishSpots.html', true);
    
    //send the request
    xhr.send(null);
}
