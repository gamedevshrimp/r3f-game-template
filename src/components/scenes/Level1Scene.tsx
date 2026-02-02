import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export const Level1Scene = () => {
	// Refs
	const boxRef = useRef<THREE.Mesh | null>(null);
	const htmlGroupRef = useRef<THREE.Group | null>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);
	const htmlDivRef = useRef<HTMLDivElement>(null);

	// State
	const [number, setNumber] = useState(0);

	// GSAP timeline
	useGSAP(
		() => {
			if (!htmlGroupRef.current) return;
			gsap.set(htmlGroupRef.current.scale, { x: 0, y: 0, z: 0 });
			tl.current = gsap.timeline({ paused: true });

			tl.current.to(
				htmlGroupRef.current.scale,
				{
					x: 1,
					y: 1,
					z: 1,
					duration: 0.2,
					ease: 'power2.out',
				},
				0, // start frame
			);

			tl.current.to(
				htmlGroupRef.current.position,
				{
					y: 2,
					duration: 0.2,
					ease: 'power2.out',
				},
				0, // start frame
			);
		},

		{ scope: boxRef },
	);

	// Handlers
	const handleHover = () => {
		tl.current?.play();
	};

	const handleLeave = () => {
		tl.current?.reverse();
	};

	const handleClick = () => {
		setNumber((prev) => prev + 1);
	};

	useFrame(({ camera }) => {
		htmlGroupRef.current?.quaternion.copy(camera.quaternion);
	});
	return (
		<>
			<mesh
				ref={boxRef}
				onPointerEnter={handleHover}
				onPointerLeave={handleLeave}
				onClick={handleClick}>
				<boxGeometry />
				<meshNormalMaterial />
				<group ref={htmlGroupRef} position={[0, 0, 0]}>
					<Html transform center>
						<div ref={htmlDivRef} className='rounded-xl bg-black/80 px-4 py-2 text-white shadow-lg'>
							{number}
						</div>
					</Html>
				</group>
			</mesh>
		</>
	);
};
