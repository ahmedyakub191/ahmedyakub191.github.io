import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeStructuralScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let cleanup = () => {};
    if (!mountRef.current) return cleanup;

    const mountEl = mountRef.current;
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x05131b, 14, 54);

    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 140);
    camera.position.set(0, 9.5, 27);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    mountEl.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0x9fd6f8, 0x05121a, 0.7);
    scene.add(hemi);

    const key = new THREE.DirectionalLight(0x8ce8ff, 1.05);
    key.position.set(12, 18, 9);
    scene.add(key);

    const fill = new THREE.PointLight(0x58f6bf, 1.2, 60, 2);
    fill.position.set(-13, 10, -9);
    scene.add(fill);

    const rim = new THREE.PointLight(0x6fb4ff, 0.8, 70, 2);
    rim.position.set(0, 5, 18);
    scene.add(rim);

    const structure = new THREE.Group();
    scene.add(structure);

    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x8fd8f5,
      roughness: 0.31,
      metalness: 0.8,
      emissive: 0x06293a,
      emissiveIntensity: 0.35,
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: 0x8effc8,
      roughness: 0.2,
      metalness: 0.65,
      emissive: 0x0b3e33,
      emissiveIntensity: 0.7,
    });

    const cableMat = new THREE.MeshStandardMaterial({
      color: 0x6ec7e8,
      roughness: 0.44,
      metalness: 0.58,
      emissive: 0x082430,
      emissiveIntensity: 0.28,
    });

    const deckMat = new THREE.MeshStandardMaterial({
      color: 0x5aa8c8,
      roughness: 0.48,
      metalness: 0.62,
      emissive: 0x051f2c,
      emissiveIntensity: 0.24,
    });

    const river = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 36),
      new THREE.MeshStandardMaterial({
        color: 0x0a2433,
        roughness: 0.18,
        metalness: 0.7,
        emissive: 0x082636,
        emissiveIntensity: 0.45,
      })
    );
    river.rotation.x = -Math.PI / 2;
    river.position.y = -4.2;
    scene.add(river);

    const floorGrid = new THREE.GridHelper(80, 64, 0x2d7896, 0x123d51);
    floorGrid.position.y = -4.05;
    floorGrid.material.opacity = 0.35;
    floorGrid.material.transparent = true;
    scene.add(floorGrid);

    const bridgeLength = 42;
    const bridgeWidth = 4.8;
    const deckY = 0;
    const pylonHeight = 11.5;
    const pylonX = 10.5;

    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(bridgeLength, 0.75, bridgeWidth),
      deckMat
    );
    deck.position.y = deckY;
    structure.add(deck);

    const edgeBeam = new THREE.BoxGeometry(bridgeLength, 0.26, 0.22);
    const beamL = new THREE.Mesh(edgeBeam, steelMat);
    beamL.position.set(0, deckY + 0.52, bridgeWidth / 2 - 0.2);
    const beamR = beamL.clone();
    beamR.position.z = -bridgeWidth / 2 + 0.2;
    structure.add(beamL, beamR);

    const pylonGeo = new THREE.BoxGeometry(0.78, pylonHeight, 0.9);
    const pylon1A = new THREE.Mesh(pylonGeo, steelMat);
    const pylon1B = new THREE.Mesh(pylonGeo, steelMat);
    pylon1A.position.set(-pylonX, deckY + pylonHeight / 2, 1.2);
    pylon1B.position.set(-pylonX, deckY + pylonHeight / 2, -1.2);
    const pylon2A = pylon1A.clone();
    const pylon2B = pylon1B.clone();
    pylon2A.position.x = pylonX;
    pylon2B.position.x = pylonX;
    structure.add(pylon1A, pylon1B, pylon2A, pylon2B);

    const capGeo = new THREE.BoxGeometry(1.45, 0.34, 3.1);
    const cap1 = new THREE.Mesh(capGeo, accentMat);
    cap1.position.set(-pylonX, deckY + pylonHeight + 0.15, 0);
    const cap2 = cap1.clone();
    cap2.position.x = pylonX;
    structure.add(cap1, cap2);

    const pierGeo = new THREE.CylinderGeometry(0.68, 1.1, 4.4, 12);
    const pierXs = [-17.5, -8.5, 0, 8.5, 17.5];
    pierXs.forEach((xPos) => {
      const pier = new THREE.Mesh(pierGeo, steelMat);
      pier.position.set(xPos, -2.2, 0);
      structure.add(pier);
    });

    const beamBetween = (start, end, radius = 0.05, mat = steelMat) => {
      const direction = new THREE.Vector3().subVectors(end, start);
      const length = direction.length();
      const beam = new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, length, 10),
        mat
      );
      const midpoint = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      beam.position.copy(midpoint);
      beam.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        direction.normalize()
      );
      structure.add(beam);
    };

    const cableAnchors = [];
    for (let i = 0; i <= 6; i += 1) {
      const xLocal = 1.7 + i * 2.8;
      cableAnchors.push(xLocal);
    }

    cableAnchors.forEach((offset) => {
      const leftTop = new THREE.Vector3(-pylonX, deckY + pylonHeight, 1.2);
      const leftBot = new THREE.Vector3(-pylonX - offset, deckY + 0.35, bridgeWidth / 2 - 0.15);
      const leftBotBack = new THREE.Vector3(-pylonX - offset, deckY + 0.35, -bridgeWidth / 2 + 0.15);
      beamBetween(leftTop, leftBot, 0.03, cableMat);
      beamBetween(leftTop, leftBotBack, 0.03, cableMat);

      const rightTop = new THREE.Vector3(pylonX, deckY + pylonHeight, 1.2);
      const rightBot = new THREE.Vector3(pylonX + offset, deckY + 0.35, bridgeWidth / 2 - 0.15);
      const rightBotBack = new THREE.Vector3(pylonX + offset, deckY + 0.35, -bridgeWidth / 2 + 0.15);
      beamBetween(rightTop, rightBot, 0.03, cableMat);
      beamBetween(rightTop, rightBotBack, 0.03, cableMat);
    });

    for (let i = 0; i < 23; i += 1) {
      const xA = -bridgeLength / 2 + i * 1.85;
      const xB = xA + 1.85;
      const yTop = deckY - 0.1;
      const yBot = deckY - 1.9;
      beamBetween(new THREE.Vector3(xA, yTop, 0), new THREE.Vector3(xB, yBot, 0), 0.026, cableMat);
      beamBetween(new THREE.Vector3(xA, yBot, 0), new THREE.Vector3(xB, yTop, 0), 0.026, cableMat);
    }

    const makeArch = (startX, endX, archHeight, zPos) => {
      const midX = (startX + endX) / 2;
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(startX, deckY - 0.6, zPos),
        new THREE.Vector3(midX, deckY + archHeight, zPos),
        new THREE.Vector3(endX, deckY - 0.6, zPos)
      );
      const geom = new THREE.TubeGeometry(curve, 48, 0.1, 12, false);
      const arch = new THREE.Mesh(geom, accentMat);
      structure.add(arch);
      return curve;
    };

    const archFront = makeArch(-19.5, 19.5, 7.6, bridgeWidth / 2 + 0.9);
    const archBack = makeArch(-19.5, 19.5, 7.6, -bridgeWidth / 2 - 0.9);

    for (let i = 0; i <= 16; i += 1) {
      const t = i / 16;
      const pFront = archFront.getPoint(t);
      const pBack = archBack.getPoint(t);
      const tieFront = new THREE.Vector3(pFront.x, deckY + 0.34, bridgeWidth / 2 - 0.08);
      const tieBack = new THREE.Vector3(pBack.x, deckY + 0.34, -bridgeWidth / 2 + 0.08);
      beamBetween(pFront, tieFront, 0.023, cableMat);
      beamBetween(pBack, tieBack, 0.023, cableMat);
    }

    const nodePositions = [];
    for (let x = -20; x <= 20; x += 2.5) {
      nodePositions.push(x, deckY + 0.6, bridgeWidth / 2 - 0.18);
      nodePositions.push(x, deckY + 0.6, -bridgeWidth / 2 + 0.18);
    }

    const nodeGeom = new THREE.BufferGeometry();
    nodeGeom.setAttribute("position", new THREE.Float32BufferAttribute(nodePositions, 3));
    const nodeCloud = new THREE.Points(
      nodeGeom,
      new THREE.PointsMaterial({
        color: 0xb9ffe1,
        size: 0.12,
        transparent: true,
        opacity: 0.9,
      })
    );
    scene.add(nodeCloud);

    const movingLoads = [];
    for (let i = 0; i < 6; i += 1) {
      const load = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.34, 0.22), accentMat);
      load.position.set(-bridgeLength / 2 + i * 6.4, deckY + 0.65, 0);
      movingLoads.push({
        mesh: load,
        phase: Math.random() * Math.PI * 2,
        speed: 0.095 + Math.random() * 0.05,
      });
      scene.add(load);
    }

    const mouse = new THREE.Vector2(0, 0);
    const lookTarget = new THREE.Vector3(0, 1.1, 0);
    const orbitRadius = 28;
    const minPolar = 0.35;
    const maxPolar = Math.PI - 0.25;

    let isDragging = false;
    let activePointerId = null;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let dragAzimuth = 0;
    let dragPolar = 1.26;
    let cameraAzimuth = dragAzimuth;
    let cameraPolar = dragPolar;

    function updateMouseFromEvent(e) {
      const rect = mountEl.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouse.x = THREE.MathUtils.clamp(x * 2 - 1, -1, 1);
      mouse.y = THREE.MathUtils.clamp(-(y * 2 - 1), -1, 1);
    }

    function onPointerMove(e) {
      updateMouseFromEvent(e);

      if (!isDragging || e.pointerId !== activePointerId) return;
      const deltaX = e.clientX - lastPointerX;
      const deltaY = e.clientY - lastPointerY;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;

      dragAzimuth -= deltaX * 0.006;
      dragPolar = THREE.MathUtils.clamp(dragPolar - deltaY * 0.006, minPolar, maxPolar);
    }

    function onPointerDown(e) {
      if (e.pointerType === "touch") return;
      if (!(e.target instanceof Element)) return;
      if (e.target.closest("a, button, input, textarea, select, label, [role='button']")) {
        return;
      }
      updateMouseFromEvent(e);
      isDragging = true;
      activePointerId = e.pointerId;
      lastPointerX = e.clientX;
      lastPointerY = e.clientY;
      mountEl.style.cursor = "grabbing";
    }

    function onPointerUp(e) {
      if (e.pointerId !== activePointerId) return;
      isDragging = false;
      activePointerId = null;
      mountEl.style.cursor = "grab";
    }

    function onPointerLeave() {
      if (isDragging) return;
      mouse.set(0, 0);
    }

    function onResize() {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const heightValue = mountRef.current.clientHeight;
      renderer.setSize(width, heightValue);
      camera.aspect = width / heightValue;
      camera.updateProjectionMatrix();
    }

    onResize();
    window.addEventListener("resize", onResize);
    mountEl.style.cursor = "grab";
    renderer.domElement.style.touchAction = "none";
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    mountEl.addEventListener("pointerleave", onPointerLeave);

    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;

      structure.rotation.y = Math.sin(t * 0.22) * 0.05;
      structure.rotation.x = Math.sin(t * 0.13) * 0.03;
      nodeCloud.rotation.y = -t * 0.05;

      movingLoads.forEach((item, idx) => {
        const travel = ((t * item.speed + item.phase) % (Math.PI * 2)) / (Math.PI * 2);
        item.mesh.position.x = -bridgeLength / 2 + travel * bridgeLength;
        item.mesh.position.y = deckY + 0.67 + Math.sin(t * 2.8 + idx) * 0.03;
      });

      const hoverAzimuth = isDragging ? 0 : mouse.x * 0.65;
      const hoverPolar = isDragging ? 0 : mouse.y * 0.16;
      const targetAzimuth = dragAzimuth + hoverAzimuth;
      const targetPolar = THREE.MathUtils.clamp(
        dragPolar + hoverPolar,
        minPolar,
        maxPolar
      );

      cameraAzimuth += (targetAzimuth - cameraAzimuth) * 0.09;
      cameraPolar += (targetPolar - cameraPolar) * 0.09;

      const sinPolar = Math.sin(cameraPolar);
      camera.position.x = lookTarget.x + orbitRadius * sinPolar * Math.sin(cameraAzimuth);
      camera.position.y = lookTarget.y + orbitRadius * Math.cos(cameraPolar);
      camera.position.z = lookTarget.z + orbitRadius * sinPolar * Math.cos(cameraAzimuth);
      camera.lookAt(lookTarget);

      renderer.render(scene, camera);
    };

    animate();

    cleanup = () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      mountEl.removeEventListener("pointerleave", onPointerLeave);
      mountEl.style.cursor = "";
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj.geometry) {
          obj.geometry.dispose();
        }
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });

      if (mountEl.contains(renderer.domElement)) {
        mountEl.removeChild(renderer.domElement);
      }
    };

    return () => {
      cleanup();
    };
  }, []);

  return <div className="three-scene" ref={mountRef} aria-hidden="true" />;
};

export default ThreeStructuralScene;
