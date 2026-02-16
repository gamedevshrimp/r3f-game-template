import { useMemo } from 'react';
import * as THREE from 'three';

/**
 * React hook that replaces a {@link THREE.MeshStandardMaterial}
 * on a given mesh with a {@link THREE.MeshBasicMaterial}.
 *
 * This is useful when you want a mesh to:
 * - Render without being affected by scene lighting
 * - Behave like a UI element or icon in 3D space
 * - Maintain its texture map but ignore physically-based lighting
 *
 * The hook preserves the original material's `map` (texture) if it exists.
 *
 * @param mesh - A THREE.Mesh instance whose material should be replaced.
 * If undefined, the hook safely returns `undefined`.
 *
 * @returns An object containing:
 * - `basicMaterial`: A THREE.MeshBasicMaterial instance,
 *   or `undefined` if:
 *   - mesh is undefined
 *   - mesh material is not an instance of THREE.MeshStandardMaterial
 *
 * @remarks
 * - The material is memoized using React's `useMemo`.
 * - A new material instance is created only when the `mesh` reference changes.
 * - The original material is NOT disposed automatically.
 *   You are responsible for proper cleanup if needed.
 *
 * @example
 * Basic usage inside a React Three Fiber component:
 *
 * ```tsx
 * const { nodes } = useGLTF('/model.glb') as GLTFResult;
 *
 * const mesh = nodes.myMesh as THREE.Mesh;
 *
 * const { basicMaterial } = useMaterialReplacer(mesh);
 *
 * return (
 *   <mesh
 *     geometry={mesh.geometry}
 *     material={basicMaterial}
 *   />
 * );
 * ```
 *
 * @example
 * Safe usage with optional chaining:
 *
 * ```tsx
 * const mesh = nodes?.myMesh as THREE.Mesh | undefined;
 * const { basicMaterial } = useMaterialReplacer(mesh);
 *
 * if (!basicMaterial) return null;
 *
 * return <mesh geometry={mesh!.geometry} material={basicMaterial} />;
 * ```
 */

export const useMaterialReplacer = (
	mesh: THREE.Mesh | undefined,
): { basicMaterial: THREE.MeshBasicMaterial | undefined } => {
	const basicMaterial = useMemo(() => {
		if (!mesh) return undefined;
		const originalMaterial = mesh.material;

		if (!(originalMaterial instanceof THREE.MeshStandardMaterial)) {
			console.warn('Material is not MeshStandardMaterial');
			return undefined;
		}

		return new THREE.MeshBasicMaterial({
			map: originalMaterial.map ?? null,
		});
	}, [mesh]);
	return { basicMaterial };
};
