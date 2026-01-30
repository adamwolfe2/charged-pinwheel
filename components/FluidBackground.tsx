"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const FluidShader = {
    uniforms: {
        uTime: { value: 0 },
        uColorStart: { value: new THREE.Color("#1e293b") }, // Slate 800
        uColorEnd: { value: new THREE.Color("#0f172a") },   // Slate 950
    },
    vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    fragmentShader: `
    uniform float uTime;
    uniform vec3 uColorStart;
    uniform vec3 uColorEnd;
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;
      
      // Create a slow moving noise field
      float noise = snoise(uv * 3.0 + uTime * 0.1);
      
      // Mix colors based on noise
      vec3 color = mix(uColorStart, uColorEnd, noise * 0.5 + 0.5);
      
      // Add subtle banding/waves
      float wave = sin(uv.y * 10.0 + uTime * 0.5 + noise * 5.0);
      color += wave * 0.02;

      gl_FragColor = vec4(color, 1.0);
    }
  `,
};

function FluidPlane() {
    const mesh = useRef<THREE.Mesh>(null);

    // Clone uniforms to avoid shared state issues
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColorStart: { value: new THREE.Color("#020617") },
            uColorEnd: { value: new THREE.Color("#1e293b") },
        }),
        []
    );

    useFrame((state) => {
        const { clock } = state;
        if (mesh.current) {
            (mesh.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={mesh} position={[0, 0, -1]}>
            <planeGeometry args={[20, 20]} />
            <shaderMaterial
                vertexShader={FluidShader.vertexShader}
                fragmentShader={FluidShader.fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
}

export function FluidBackground() {
    return (
        <div className="absolute inset-0 -z-20 opacity-30">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <FluidPlane />
            </Canvas>
        </div>
    );
}
