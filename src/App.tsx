import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as THREE from 'three';
import { OrbitControls } from '@three-ts/orbit-controls';
const getCube = () => {
  const geometry = new THREE.BoxGeometry(5, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 'red' });
  const cube = new THREE.Mesh(geometry, material);

  return cube
}

type InitParams = {
  target: HTMLElement
}
const init = ({
  target
}: InitParams) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  const controls = new OrbitControls(camera, renderer.domElement);

  renderer.setSize(500, 500)
  console.log('append child')
  target.appendChild(renderer.domElement);

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  return {
    scene,
    camera,
    start: animate,
    controls
  }
}


function App() {
  const a = ''

  useEffect(() => {
    console.log('effect')
    const { scene, camera, start } = init({
      target: document.body
    })

    const cube = getCube()
    scene.add(cube);
    camera.position.z = 100;
    start()

  }, [])

  return (
    <div className="App">
      cocou
    </div>
  );
}

export default App;
