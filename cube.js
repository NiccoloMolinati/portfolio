import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const container = document.getElementById('scene-container');
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Funzione per creare una texture con testo
function createTextTexture(text) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 256;
    canvas.height = 256;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'black';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

// Creazione delle 6 facce con testo diverso
const materials = [
    new THREE.MeshBasicMaterial({ map: createTextTexture("UX DESIGN") }),
    new THREE.MeshBasicMaterial({ map: createTextTexture("ML") }),
    new THREE.MeshBasicMaterial({ map: createTextTexture("INFORMATION VISUALIZATION") }),
    new THREE.MeshBasicMaterial({ map: createTextTexture("LOD") }),
    new THREE.MeshBasicMaterial({ map: createTextTexture("DA") }),
    new THREE.MeshBasicMaterial({ map: createTextTexture("BOH") })
];

// Creazione del cubo
const geometry = new THREE.BoxGeometry(2, 2, 2);
const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

// Posizione della camera
camera.position.z = 5;

// Animazione
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();