import { MenuButtonUI } from './MenuButtonUI';

export const MenuSceneUI = () => {
	return (
		<div className='absolute top-0 left-0 z-10 pointer-events-auto'>
			<MenuButtonUI id={'level2'} name={'Level 2'} />
			<MenuButtonUI id={'level1'} name={'Level 1'} />
		</div>
	);
};
