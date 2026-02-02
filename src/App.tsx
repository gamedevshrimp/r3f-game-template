import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls } from '@react-three/drei';
import Experience from './components/Experience';
import { MenuSceneUI } from './components/ui/MenuSceneUI';
import { useEffect } from 'react';
import { createDoubleTapPreventer } from './utils/doubleTapPreventer';

function App() {
	// handle IOS magnifier
	useEffect(() => {
		const preventDoubleTap = createDoubleTapPreventer(500);
		document.addEventListener('touchstart', preventDoubleTap, { passive: false });

		return () => {
			document.removeEventListener('touchstart', preventDoubleTap);
		};
	}, []);

	return (
		<div
			className='
      relative
      w-full 
      h-full 
      bg-radial from-slate-100 from-50% to-slate-300'>
			<MenuSceneUI />
			<Canvas className='absolute inset-0'>
				<Bounds>
					<OrbitControls />
					<Experience />
				</Bounds>
			</Canvas>
		</div>
	);
}

export default App;
