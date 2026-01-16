import { useSceneStore } from '../../stores/useSceneStore';
import { Level1Scene } from '../scenes/Level1Scene';
import { Level2Scene } from '../scenes/Level2Scene';

export default function SceneManager() {
	const { scene, sceneVersion } = useSceneStore();

	return (
		<group key={scene + sceneVersion}>
			{scene === 'level1' && <Level1Scene />}
			{scene === 'level2' && <Level2Scene />}
		</group>
	);
}
