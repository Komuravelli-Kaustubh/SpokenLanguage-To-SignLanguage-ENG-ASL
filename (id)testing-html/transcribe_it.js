// Get the toggle button element
const toggleButton = document.getElementById('toggle-recording');

// Variable to keep track of the recording state
let isRecording = false;

// Initialize SpeechRecognition object
let recognition;

// Create a global variable for recorded transcriptions
window.recordedTranscriptions = [];

// Function to handle toggle button click
function toggleRecording() {
  if (isRecording) {
    stopRecording();
  } else {
    startRecording();
  }

  // Toggle the recording state
  isRecording = !isRecording;
}

// Function to start the recording
function startRecording() {
  // Check if recording is already in progress
  if (isRecording) {
    console.log("Recording is already in progress.");
    return;
  }

  // Initialize SpeechRecognition object
  recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition ||
    window.mozSpeechRecognition || window.msSpeechRecognition)();

  // Configure SpeechRecognition settings
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US"; // Set desired language

  // Start recognition
  recognition.start();

  // Handle recognition results
  recognition.onresult = function (event) {
    const result = event.results[event.results.length - 1];
    const transcription = result[0].transcript;

    // Display interim transcriptions
    document.getElementById("transcription-output").innerHTML = transcription;

    // Store final transcriptions in the global variable
    if (result.isFinal) {
      window.recordedTranscriptions.push(transcription);
    }
  };

  // Handle recognition errors
  recognition.onerror = function (event) {
    console.error("Speech recognition error: ", event.error);
  };
}

// Function to stop the recording
function stopRecording() {
  // Check if recording is in progress
  if (!isRecording) {
    console.log("No active recording to stop.");
    return;
  }

  // Stop recognition
  recognition.stop();
}

// Function to display animation
function displayAnimation() {
  // Add code to display animation
  // ...
}
