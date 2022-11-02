import * as THREE from "/node_modules/three/build/three.module.js";
import texture from "/app/assets/textures/5.jpg";
//import * as dat from "/node_modules/lil-gui/dist/lil-gui.esm.js";

export function BgCanvas() {
  /**
   * Debug
   */
  //const gui = new dat.GUI();

  const parameters = {
    materialColor: "#2E89FF",
  };

  /*gui.addColor(parameters, "materialColor").onChange(() => {
    material.color.set(parameters.materialColor);
    particles.material.color.set(parameters.materialColor);
  });*/

  // Escena
  const scene = new THREE.Scene();

  // Texture loader
  const textureLoader = new THREE.TextureLoader();
  const gradientTexture = textureLoader.load(texture);
  gradientTexture.magFilter = THREE.NearestFilter;

  /**
   * Objetos
   */
  const objectDistance = 3;
  const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture,
  });
  const material2 = new THREE.MeshToonMaterial({
    color: "#FF2E93",
    gradientMap: gradientTexture,
  });
  const material3 = new THREE.MeshToonMaterial({
    color: "#0A6665",
    gradientMap: gradientTexture,
  });

  const toro1 = new THREE.Mesh(
    new THREE.TorusGeometry(1.5, 1, 20, 30),
    material
  );
  const toro2 = new THREE.Mesh(
    new THREE.TorusGeometry(0.5, 0.3, 8, 25),
    material2
  );
  const toro3 = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.15, 8, 20),
    material3
  );

  toro1.position.set(0, -3, 0);
  toro2.position.set(-objectDistance * 1, 0.7, 0);
  toro3.position.set(objectDistance, 0.5, 0);

  const toros = [toro1, toro2, toro3];
  scene.add(...toros);

  /**
   * Particulas
   */
  const particlesCount = 100;
  const position = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    position[i * 3] = (Math.random() - 0.5) * 8;
    position[i * 3 + 1] =
      objectDistance * 0.5 - Math.random() * objectDistance * 3;
    position[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(position, 3)
  );

  const particlesMaterial = new THREE.PointsMaterial({
    color: parameters.materialColor,
    sizeAttenuation: true,
    size: 0.07,
  });

  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  /**
   * Luces
   */
  const luz = new THREE.DirectionalLight("#ffffff", 1);
  const luzAmbiental = new THREE.AmbientLight("#6BBFFF", 0.2);
  luz.position.set(0, 10, 0);
  luzAmbiental.position.set(5, -5, 0);
  scene.add(luz, luzAmbiental);
  /* gui.addColor(luz, "color").name("color");
  gui.add(luz, "intensity").name("intensidad").min(0).max(10); */

  /**
   * Dimensiones
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height - 82);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Cursor
   */
  const cursor = { x: 0, y: 0 };

  window.addEventListener("mousemove", (e) => {
    cursor.x = e.clientX / sizes.width - 0.5;
    cursor.y = e.clientY / sizes.height - 0.5;
  });

  /**
   * Camara
   */
  const groupCamera = new THREE.Group();
  scene.add(groupCamera);

  // Base camera
  const camera = new THREE.PerspectiveCamera(
    35,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 15;
  groupCamera.add(camera);

  /**
   * Renderizador
   */
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: false,
  });
  //renderer.setClearColor(new THREE.Color("rgb(27, 8, 42)"), 1);
  renderer.setSize(sizes.width, sizes.height - 82);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Animacion
   */
  const clock = new THREE.Clock();
  let previouTime = 0;

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previouTime;
    previouTime = elapsedTime;

    const parallaxX = cursor.x;
    const parallaxY = -cursor.y;
    groupCamera.position.x +=
      (parallaxX - groupCamera.position.x) * 5 * deltaTime;
    groupCamera.position.y +=
      (parallaxY - groupCamera.position.y) * 5 * deltaTime;

    // rotacion esferas
    for (let i = 0; i < toros.length; i++) {
      toros[i].rotation.x += deltaTime * 0.5 * i + 0.01;
      toros[i].rotation.y += deltaTime * 0.2 * i + 0.01;
    }

    // Render
    renderer.render(scene, camera);
    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();

  return renderer.domElement;
}
