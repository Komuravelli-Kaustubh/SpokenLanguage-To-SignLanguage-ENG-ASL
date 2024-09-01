// import WebSocket from "wss"
// const unrealSocket = new WebSocket('wss://gtg3p8yh66.execute-api.us-east-1.amazonaws.com/production')
// import axios from '/axios';

const unrealSocket = new WebSocket('ws://localhost:8080');


unrealSocket.addEventListener('open', e => {
  console.log('Unreal WebSocket is connected')

  const message = 'Hello Unreal!'
  unrealSocket.send(message)
  // unrealSocket.send(window.recordedTranscriptions[0]);
})

unrealSocket.addEventListener('close', e => console.log('Unreal WebSocket is closed'))

unrealSocket.addEventListener('error', e => console.error('Unreal WebSocket is in error', e))

unrealSocket.addEventListener('message', e => {
  console.log('Unreal WebSocket received a message:', e.data)
})

// Function to remove punctuation marks from a word
function removePunctuation(word) {
  return word.replace(/[^\w\s]|_/g, "");
}

const messageForm = document.getElementById("cnfrm")

messageForm.addEventListener("click", asdfg);

function asdfg() {
  const messageInput = document.getElementById("word-input");
  const message = messageInput.value;
  unrealSocket.send(removePunctuation(message.toLowerCase()));
  console.log(message);
  messageInput.value = "";
}


console.log(window.recordedTranscriptions);

let transcribe_array=window.recordedTranscriptions;
console.log("This is :",transcribe_array[0]);
// let transcribe_array=transcribe_message.split(" ");
const sendbutton=document.getElementById("send-recording-unreal");
sendbutton.addEventListener("click",gfdsa);

// function gfdsa() {
//   const transcribe_array = window.recordedTranscriptions;
//   const latestTranscription = transcribe_array[transcribe_array.length - 1];
//   console.log("This is latestTranscription: ",latestTranscription);
//   // const apiUrl = `http://ec2-3-111-42-115.ap-south-1.compute.amazonaws.com:2000/${encodeURIComponent(latestTranscription)}`;
//   // const apiUrl = `https://9a17-34-16-160-145.ngrok-free.app/translate?text=${encodeURIComponent(latestTranscription)}`;
//   const apiUrl = `https://9a17-34-16-160-145.ngrok-free.app/translate?text=${encodeURIComponent(latestTranscription)}`;
//   // ec2-3-111-42-115.ap-south-1.compute.amazonaws.com
//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       // const predict = data.predict.trim(); // Trim any leading/trailing spaces
//       // console.log("from api fetched: ",predict);
//       console.log("This is data: ",data);
//       const predict = data.predicted_translation.trim(); // Trim any leading/trailing spaces
//       console.log("from api fetched: ",predict);
//       const glosOutput = document.getElementById('gloss-output');
//       glosOutput.innerHTML = predict;
//       const wordsArray = predict.toLowerCase().split(' ');

//       let index = 0;
//       const sendWordWithDelay = () => {
//         if (index < wordsArray.length) {
//           const word = wordsArray[index];
//           unrealSocket.send(word);
//           console.log('Sent word to Unreal:', word);
//           index++;
//           setTimeout(sendWordWithDelay, 8000); // 8 seconds delay
//         }
//       };

//       sendWordWithDelay();

//       // Assign the trimmed gloss to the HTML element
//       // const glosOutput = document.getElementById('glos-output');
//       // glosOutput.textContent = predict;
//     })
//     .catch((error) => {
//       console.error('Error fetching prediction:', error);
//     });

//   //for sending to model translator below
//   // unrealSocket.send((latestTranscription.toLowerCase()));
// }
function gfdsa() {
  const transcribe_array = window.recordedTranscriptions;
  const latestTranscription = transcribe_array[transcribe_array.length - 1];
  console.log("This is latestTranscription: ", latestTranscription);

  const encodedText = encodeURIComponent(latestTranscription);
  const apiUrl = `https://9a17-34-16-160-145.ngrok-free.app/translate?text=${encodedText}`;

  fetch(apiUrl, {
    method: 'GET',
    headers: new Headers({
      'ngrok-skip-browser-warning': '69420', // Custom header to skip ngrok browser warning
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Predicted translation:", data.predicted_translation);

      const predict = data.predicted_translation.trim();
      const glosOutput = document.getElementById('gloss-output');
      if (glosOutput) {
        glosOutput.innerHTML = predict;
      }

      const wordsArray = predict.toLowerCase().split(' ');
      let index = 0;
      const sendWordWithDelay = () => {
        if (index < wordsArray.length) {
          const word = wordsArray[index];
          unrealSocket.send(word); // Assume unrealSocket is a WebSocket connection
          console.log('Sent word to Unreal:', word);
          index++;
          setTimeout(sendWordWithDelay, 8000); // 8 seconds delay
        }
      };

      sendWordWithDelay();
    })
    .catch((error) => {
      console.error('Error fetching prediction:', error);
    });
}




  
  // Convert to lowercase and remove punctuation signs
  // const processedTranscription = removePunctuation(latestTranscription.toLowerCase());

//   // Split the processed transcription into an array of words
  // const wordsArray = processedTranscription.split(" ");

//   // Iterate over each word with a delay of 8 seconds
  // wordsArray.forEach((word, index) => {
    // setTimeout(() => {
      // unrealSocket.send(word);
      // console.log(word);
    // }, index * 8000);
  // });
// }



// // Function to send each word to Unreal with a delay
// function sendWordsToUnreal() {
//   let index = 0;
//   const words = window.recordedTranscriptions; // Assuming recordedTranscriptions is globally accessible

//   // Define the timer function
//   function sendWordWithDelay() {
//     if (index < words.length) {
//       const word = removePunctuation(words[0]);
//       unrealSocket.send(word);
//       console.log("Sent word to Unreal:", word);
//       index++;
//       setTimeout(sendWordWithDelay, 8000); // 8 seconds delay
//     }
//   }

//   // Start the timer
//   sendWordWithDelay();
// }

// output_transcription=recordedTranscriptions[0];
