const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setClearColor("#0b0c10")
document.body.appendChild( renderer.domElement )

var geometry = new THREE.BoxGeometry(1, 1, 1)
var material = new THREE.MeshStandardMaterial( { color: 0x45a29e })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )
renderer.render( scene, camera )

camera.position.z = 5

var geometry = new THREE.BoxGeometry(3, 3, 3)
var material = new THREE.MeshBasicMaterial({
 color: "#c5c6c7", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5 )
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

function animate() {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.04;
    cube.rotation.y += 0.04;
    wireframeCube.rotation.x -= 0.01;
    wireframeCube.rotation.y -= 0.01;
    renderer.render( scene, camera )
   }
   animate()
   