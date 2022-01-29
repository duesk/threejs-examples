

//creando escena
const scene = new THREE.Scene();
scene.background= new THREE.Color(0x2a3b4c)

//crear camara
const camera = new THREE.PerspectiveCamera( 75, 
    window.innerWidth / window.innerHeight
);

//crear el renderer
const renderer =new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

// agregar una geometria 
let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial({
                                            color:0x00fff0,
                                            wireframe:true
                                        });
let cube = new THREE.Mesh(geometry,material);

//agregamos objeto a scene
scene.add( cube );


camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    camera.position.z += 0.001;
    renderer.render( scene, camera );
}
animate();

