var width = 1280;
var height = 720;
var streamName = "my-stream";
var streamingUrl = "http://localhost:";

function startStreaming() {
  var streamingElement = document.createElement("iframe");
  streamingElement.src = streamingUrl;
  streamingElement.width = width;
  streamingElement.height = height;
  document.getElementById("animation-container").appendChild(streamingElement);
}

window.addEventListener("load", function() {
  startStreaming();
});