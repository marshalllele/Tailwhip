var button = document.getElementById('equipment');
button.addEventListener('click', getEquipData, false);

function getEquipData() {
    //create XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    //When readystate changes
    xhr.onload = function() {
        //check if the server status is ok
        if (xhr.status === 200) {

            //get JSON data from the server using XMLHttpRequest objects' responseText property
            responseObject = JSON.parse(xhr.responseText);

            //build up string with new content 
            var newContent = '';

            //loop through object
            for (var i = 0; i < responseObject.items.length; i++) {
                newContent += '<h4>' + responseObject.items[i].item + '</h4>';
                newContent += '<p>' + responseObject.items[i].price + '</p>';
                newContent += '<p>' + responseObject.items[i].brand + '</p>';

            } 

            //update the page with the new content
            document.getElementById('fishLists').innerHTML = newContent;
        }
    };

    //same as HTML but requests a JSON file instead
    //prepare the request
    xhr.open('GET', 'data/equipList.json', true);

    //send the request
    xhr.send(null);
}