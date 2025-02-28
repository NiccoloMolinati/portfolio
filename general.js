import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const container = document.getElementById('three-container1');
const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


container.appendChild(renderer.domElement);


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 1000);
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

//const light = new THREE.AmbientLight(0xffffff, 1);
//light.castShadow = true;
//scene.add(light);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = true;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = true;
controls.autoRotateSpeed = 3.0
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

//const loader = new GLTFLoader().setPath("./");
//loader.load('random.glb', (gltf) => {
//    const mesh = gltf.scene;
//    mesh.traverse((child) => {
//        child.castShadow = true;
//        child.receiveShadow = true
//    });
//    mesh.position.set(0, 1.05, 0);
//    scene.add(mesh);
//});

const loader = new GLTFLoader().setPath('./');
loader.load('face.glb', glft => {
    const mesh = glft.scene;
    mesh.position.set(0,0,0);
    scene.add(mesh)
})

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