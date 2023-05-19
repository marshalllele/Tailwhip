var button = document.getElementById('clamSpots');
button.addEventListener('click', getClamList, false);

//gets content from XML
function getNodeValue(obj, tag) {
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

function getClamList() {
    //creare new XMLHttpRequest() object
    var xhr = new XMLHttpRequest();

    var container = document.getElementById('fishLists');
    container.innerHTML = '';

    //when response has loaded
    xhr.onload = function() {
        //check if the server status was okay
        if (xhr.status === 200) {
            
            //get XML from the server
            var response = xhr.responseXML;

            //find <spots> elements
            var spots = response.getElementsByTagName('spot');
            
            //loop through them
            for (var i = 0; i < spots.length; i++) {
                //declare variables
                var header, paragraph;

                //add a header
                header = document.createElement('h4');
                header.appendChild(document.createTextNode(getNodeValue(spots[i], 'name')));
                container.appendChild(header);

                //add paragraphs
                paragraph = document.createElement('p');
                paragraph.appendChild(document.createTextNode(getNodeValue(spots[i], 'public')));
                container.appendChild(paragraph);

                paragraph = document.createElement('p');
                paragraph.appendChild(document.createTextNode(getNodeValue(spots[i], 'output')));
                container.appendChild(paragraph);

                paragraph = document.createElement('p');
                paragraph.appendChild(document.createTextNode(getNodeValue(spots[i], 'description')));
                container.appendChild(paragraph);
            }
        }
    };

    //prepare the request
    xhr.open('GET', 'data/clamSpots.xml', true);
    
    //send the request
    xhr.send(null);
}