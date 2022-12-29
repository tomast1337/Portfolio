import * as React from "react";
import { AppThemeContextType } from "../context/AppContext";
import styled, { css, ThemeContext } from "styled-components";
import * as THREE from "three";

type Mouse = {
  x: number;
  y: number;
};

const CanvasBG = () => {
  const { isDarkMode } = React.useContext(ThemeContext) as AppThemeContextType;
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [scene, setScene] = React.useState<Scene | null>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      const scene = new Scene(canvasRef.current);
      setScene(scene);
      window.addEventListener("resize", () => scene.handleResize());
    }
  }, []);

  React.useEffect(() => {
    if (scene) {
      const animate = () => {
        requestAnimationFrame(animate);
        scene.renderer.render(scene.scene, scene.camera);
      };
      animate();
    }
  }, [scene]);

  React.useEffect(() => {
    if (scene) {
      const animate = () => {
        requestAnimationFrame(animate);
        scene.update();
      };
      animate();
    }
  }, [scene]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    ></canvas>
  );
};

export default CanvasBG;

class Particle {
  public object: THREE.Mesh;
  public scene: Scene;
  public velocity: THREE.Vector3;
  public acceleration: THREE.Vector3;
  public mass: number;
  public position: THREE.Vector3;
  public radius: number;
  public color: THREE.Color;
  constructor(scene: Scene) {
    this.scene = scene;
    this.velocity = new THREE.Vector3();
    this.acceleration = new THREE.Vector3();
    this.mass = 1;
    this.position = new THREE.Vector3();
    this.radius = 1;
    this.color = new THREE.Color();
  }
  update(delta: number) {
    this.velocity.add(this.acceleration.clone().multiplyScalar(delta));
    this.position.add(this.velocity.clone().multiplyScalar(delta));
    this.acceleration.multiplyScalar(0);
  }
  applyForce(force: THREE.Vector3) {
    this.acceleration.add(force.clone().divideScalar(this.mass));
  }
  addToScene() {
    this.scene.add(this.object);
  }
  removeFromScene() {
    this.scene.remove(this.object);
  }
}

class Scene {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public mouse: Mouse = { x: 0, y: 0 };
  public renderer: THREE.WebGLRenderer;
  public canvas: HTMLCanvasElement;
  public width: number;
  public height: number;
  public aspect: number;
  public fov: number;
  public near: number;
  public far: number;
  private delta: number;
  private lastTime: number;
  private particles: Particle[] = [];
  constructor(canvas: HTMLCanvasElement) {
    this.lastTime = Date.now();
    this.delta = 0;
    this.canvas = canvas;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspect = this.width / this.height;
    this.fov = 75;
    this.near = 0.1;
    this.far = 1000;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      this.aspect,
      this.near,
      this.far
    );
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setSize(this.width, this.height);
    this.camera.position.z = 5;

    // set up mouse listener
    window.addEventListener("mousemove", (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    // set up Giro scope listener
    window.addEventListener("deviceorientation", (e) => {
      this.mouse.x = e.gamma || 0;
      this.mouse.y = e.beta || 0;
    });

    // add particles
    for (let i = 0; i < 800; i++) {
      const particle = new Particle(this);
      particle.position.x = Math.random() * 2 - 1;
      particle.position.y = Math.random() * 2 - 1;
      particle.position.z = Math.random() * 2 - 1;
      particle.position.normalize();
      particle.position.multiplyScalar(Math.random() * 10 + 450);
      particle.velocity.multiplyScalar(0.1);
      particle.acceleration.multiplyScalar(0.1);
      particle.radius = Math.random() * 0.5 + 1.5;
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
      });
      particle.object = new THREE.Mesh(geometry, material);
      particle.object.position.copy(particle.position);
      particle.addToScene();
      this.particles.push(particle);
    }
  }

  handleResize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.aspect = this.width / this.height;
    this.camera.aspect = this.aspect;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.width, this.height);
  }
  updateDelta() {
    const time = Date.now();
    this.delta = time - this.lastTime;
    this.lastTime = time;
  }
  update() {
    this.updateDelta();
    this.particles.forEach((particle) => {
      particle.update(this.delta / 1000);
      particle.object.position.copy(particle.position);
    });
    // orbitante camera around center based on mouse position

    this.camera.position.x = Math.cos(this.mouse.x / 1000) * 5;
    this.camera.position.z = Math.sin(this.mouse.x / 1000) * 5;
    this.camera.position.y = -Math.sin(this.mouse.y / 1000) * 5;
    this.camera.lookAt(0, 0, 0);
  }
  add(object: THREE.Object3D) {
    this.scene.add(object);
  }
  remove(object: THREE.Object3D) {
    this.scene.remove(object);
  }
}
