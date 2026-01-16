import { Canvas } from '@react-three/fiber';
import { Bounds, OrbitControls } from '@react-three/drei';
import Experience from './components/Experience';
import { MenuSceneUI } from './components/ui/MenuSceneUI';

function App() {
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
