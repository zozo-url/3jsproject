let container;
let camera;
let renderer;
let geometry;
let scene;
let mesh;
// color: 0x8000080
function init(){
    container = document.querySelector( '#scene-container')
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF)
    const fov = 35; 
    const aspect = container.clientWidth / container.clientHeight
    const near = 0.1; 
    const far = 100; 
    camera = new THREE.PerspectiveCamera( fov, aspect, near, far)
    camera.position.set( 0, 0, 10 );
    geometry = new THREE.IcosahedronBufferGeometry();
    var texture = new THREE.TextureLoader().load( "rainbw.jpg" );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set( 6, 6 );
    const material = new THREE.MeshStandardMaterial({map: texture, color: 0xFFFFFF});
    mesh = new THREE.Mesh (geometry, material);
    scene.add(mesh);
    const light = new THREE.DirectionalLight(0xFFFFFF, 3)
    light.position.set(10,10,10);
    scene.add(light);
    renderer = new THREE.WebGLRenderer({antialias: true})
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)
}

function animate() {
    requestAnimationFrame( animate );
    mesh.rotation.z += rotZ;
    mesh.rotation.x += rotX;
    mesh.rotation.y += rotY;
    mesh.scale.x = var1;
    mesh.scale.y = var2;
    mesh.scale.z = var3;
    mesh.position.x = posX;
    mesh.position.y = posY;
    mesh.position.z = posZ;
    renderer.render( scene, camera );
}

init();
animate();