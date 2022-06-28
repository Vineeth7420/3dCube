const scene = new THREE.Scene()
const canvas = document.querySelector('.webgl')

// Red Cube

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'cyan'})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

//sizes

const sizes = {
    width: 1000,
    height: 1000
}

//camera

const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height )
camera.position.z = 3
scene.add(camera)

//renderer

console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

function animate(){
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}

animate()