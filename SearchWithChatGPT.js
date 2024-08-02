
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

// Configure SpeechRecognition settings
recognition.maxAlternatives = 10;  // Set maximum number of alternatives

// Function to start recognition
function startRecognition() {
  recognition.start();
}

// Event listener for recognition results
recognition.onresult = function(event) {
  if (event.results.length > 0) {
    var query = event.results[0][0].transcript;
    document.getElementById("q").value = query;  // Set the input field value to the recognized query
    document.getElementById("searchForm").submit();  // Submit the form
  }
};

// Error handling for recognition
recognition.onerror = function(event) {
  console.error('Speech recognition error detected: ' + event.error);
};

// Continuous recognition (optional)
recognition.continuous = false;  // Set to true if you want continuous recognition

// Handling end of recognition (optional)
recognition.onend = function() {
  console.log('Speech recognition ended.');
};

//  code to display what chat gtp have given me  on my screen



// window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
// var recognition = new SpeechRecognition();

// // Configure SpeechRecognition settings
// recognition.maxAlternatives = 10;  // Set maximum number of alternatives

// // Function to start recognition
// function startRecognition() {
//   recognition.start();
// }

// // Event listener for recognition results
// recognition.onresult = function(event) {
//   if (event.results.length > 0) {
//     var query = event.results[0][0].transcript;
//     document.getElementById("q").value = query;  // Set the input field value to the recognized query
//     document.getElementById("searchForm").submit();  // Submit the form

//     // Call function to fetch ChatGPT response
//     fetchChatGPTResponse(query);
//   }
// };

// // Error handling for recognition
// recognition.onerror = function(event) {
//   console.error('Speech recognition error detected: ' + event.error);
// };

// // Function to fetch response from ChatGPT
// function fetchChatGPTResponse(query) {
//   // Replace 'https://your-chatgpt-backend-endpoint' with your actual ChatGPT backend endpoint
//   var url = 'https://your-chatgpt-backend-endpoint';

//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ query: query }),
//   })
//   .then(response => response.json())
//   .then(data => {
//     // Display the ChatGPT response on the web page
//     document.getElementById('chatGPTResponse').innerText = data.response;
//   })
//   .catch(error => {
//     console.error('Error fetching ChatGPT response:', error);
//     // Handle errors if needed
//   });
// }

// // Handling end of recognition (optional)
// recognition.onend = function() {
//   console.log('Speech recognition ended.');
// };
