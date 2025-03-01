import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const container = document.getElementById('three-container1');
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setClearColor(0x242424);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


container.appendChild(renderer.domElement);


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, container.clientWidth/container.clientHeight, 1, 1000);
camera.position.set(1, 1, 10);
camera.lookAt(0,0,0);

//const light1 = new THREE.SpotLight(0xffffff, 600, 100, 0.2, 0.3);
//light1.position.set(10, 25, 10)
//light1.castShadow = true;
//light1.shadow.bias = -0.0001;
//scene.add(light1)

//const light2 = new THREE.SpotLight(0xffffff, 600, 100, 0.2, 0.3);
//light2.position.set(-15, -15, -15)
//light2.castShadow = true;
//light2.shadow.bias = -0.0001;
//scene.add(light2)

const light = new THREE.AmbientLight(0xffffff, 3);
scene.add(light);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 0, 0);
controls.update()

//const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
//groundGeometry.rotateX(-Math.PI / 2);
//const groundMaterial = new THREE.MeshStandardMaterial({
//    color:0xffffff,
//    side: THREE.DoubleSide
//})
//const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
//groundMesh.castShadow = false;
//groundMesh.receiveShadow = true;
//scene.add(groundMesh);
let mesh1
const loader1 = new GLTFLoader().setPath("./models/");
loader1.load('face.gltf', (gltf) => {
    const mesh1 = gltf.scene;
    mesh1.traverse((child) => {
        child.castShadow = true;
        child.receiveShadow = true
    });
    mesh1.position.set(5, 0, 0); //x, z, y
    mesh1.rotation.set(3, 0, 0)
    scene.add(mesh1);
});
let mesh2
const loader2 = new GLTFLoader().setPath("./models/");
loader2.load('face.gltf', (gltf) => {
    const mesh2 = gltf.scene;
    mesh2.traverse((child) => {
        child.castShadow = true;
        child.receiveShadow = true
    });
    mesh2.position.set(-5, 0, 0);
    mesh2.rotation.set(3, 0, 0)
    scene.add(mesh2);
});



let mouseX = 0;
let mouseY = 0;

// Evento per catturare il movimento del mouse
document.addEventListener('mousemove', (event) => {
    // Normalizza le coordinate del mouse (-1 a 1)
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});


function animate() {
    requestAnimationFrame(animate);
    controls.update()
    mesh1.rotation.y = mouseX * Math.PI; // Rotazione orizzontale
    mesh1.rotation.x = -mouseY * Math.PI / 4

    mesh2.rotation.y = mouseX * Math.PI; // Rotazione orizzontale
    mesh2.rotation.x = -mouseY * Math.PI / 4
    renderer.render(scene, camera);
}
animate()

//const btn = document.getElementById('scroll-down-main');
//btn.addEventListener('click', () => {
//    document.documentElement.scrollTo({
//        to: document.getElementById(container2),
//        behavior: "smooth",
//    });
//});