
// import * as THREE from "/node_modules/three/src/Three.js";
import { GLTFLoader } from 'node_modules/three/examples/jsm/loaders/GLTFLoader.js';

// import {GLTFLoader} from './GLTFLoader.js';

// node_modules\three\examples\jsm\loaders\GLTFLoader.js
// function displayAnimation() {
//   // Get the word entered by the user
//   var word = document.getElementById('word-input').value;

//   // Check if the input matches the desired word
//   if (word.toLowerCase() === 'hello') {
//     // Load and play the glTF animation
//     var container = document.querySelector('.animation-window');
//     container.innerHTML = ''; // Clear the container
//     console.log("Hey: ",word)
//     var loader = new GLTFLoader();
//     loader.load("for_glTF/Helo_output.gltf", function (gltf) {
//       var model = gltf.scene;
//       var animations = gltf.animations;

//       // Create a mixer to play the animation
//       var mixer = new THREE.AnimationMixer(model);
//       var clipAction = mixer.clipAction(animations[0]); // Assuming there's only one animation
//       clipAction.play();

//       container.appendChild(model);
//     });
//   } else {
//     console.log('Invalid input. Please enter "hello".');
//   }
// }
// displayAnimation();


// Instantiate a loader
const loader = new GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
// loader.setDRACOLoader( dracoLoader );

// Load a glTF resource
loader.load(
	// resource URL
	// 'models/gltf/duck/duck.gltf',
	'/for_glTF/Helo_output.gltf',
	// called when the resource is loaded
	function (gltf) {

		scene.add(gltf.scene);

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object
		console.log("Today is what");

	},
	// called while loading is progressing
	function (xhr) {

		console.log((xhr.loaded / xhr.total * 100) + '% loaded');

	},
	// called when loading has errors
	function (error) {

		console.log('An error happened');

	}
);