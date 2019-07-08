window.addEventListener("load", function() {
 console.log("I'm ready!")

 const submitButton = document.getElementById('submit-button');
 const responseContainer = document.getElementById('contents')
 let userName = '';

 submitButton.addEventListener('click', function() {
    event.preventDefault();
    userName = document.getElementById('username').value;
    let url = `https://api.github.com/users/${userName}`;

    fetch(url).then(function(response) {
      response.text().then(function(text) {
        textObject = JSON.parse(text);
        for(var key in textObject) {
          responseContainer.innerHTML += `<p>${key}: ${textObject[key]}</p>`;
        }
      // response.text().then(function(text) {
      //     // console.log( typeof text );
      //     // calling JSON.parse on this text we are turning the string (type of text) into an object
      //     textObject = JSON.parse(text);
        });
      });
      });
    });

// });
