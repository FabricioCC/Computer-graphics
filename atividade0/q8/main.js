const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();

const material1 = new THREE.MeshBasicMaterial( { color: 0xEA11B9 } )
const material2 = new THREE.MeshBasicMaterial( { color: 0xF4F007 } )
const material3 = new THREE.MeshBasicMaterial( { color: 0x26E5EB} )

const cube1 = new THREE.Mesh( geometry,  material1);
cube1.position.x = 2;

const cube2 = new THREE.Mesh( geometry,  material2);
cube2.position.x = -2

const cube3 = new THREE.Mesh( geometry,  material3);


scene.add( cube1, cube2, cube3 );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
	cube1.rotation.x += 0.01;
	cube1.rotation.y += 0.01;

	cube2.rotation.x += 0.01;
	cube2.rotation.y += 0.01;

	cube3.rotation.x += 0.01;
	cube3.rotation.y += 0.01;


	renderer.render( scene, camera );
}
animate();