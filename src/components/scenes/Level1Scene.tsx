import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import * as THREE from 'three';

export const Level1Scene = () => {
	// Refs
	const boxRef = useRef<THREE.Mesh | null>(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	// GSAP timeline
	useGSAP(
		() => {
			if (!boxRef.current) return;
			tl.current = gsap.timeline({ paused: true });

			tl.current.from(boxRef.current.scale, {
				x: 0.5,
				y: 0.5,
				z: 0.5,
				duration: 0.1,
				ease: 'power2.out',
			});
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
	return (
		<>
			<mesh
				ref={boxRef}
				onPointerDown={handleHover}
				onPointerUp={handleLeave}
				onPointerEnter={handleHover}
				onPointerLeave={handleLeave}>
				<boxGeometry />
				<meshNormalMaterial />
			</mesh>
		</>
	);
};
