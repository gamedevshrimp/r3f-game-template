import { useSceneStore } from '../../stores/useSceneStore';
import { type SceneType } from '../../types/game';

interface MenuButtonUIType {
	id: SceneType;
	name: string;
}
export const MenuButtonUI = ({ id, name }: MenuButtonUIType) => {
	const setScene = useSceneStore((s) => s.setScene);
	return (
		<button className='p-2 rounded-xl bg-white' onClick={() => setScene(id)}>
			{name}
		</button>
	);
};
