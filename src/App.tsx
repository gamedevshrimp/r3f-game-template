import { Canvas } from '@react-three/fiber';
import { Bounds } from '@react-three/drei';
import Experience from './components/Experience';
import { MenuSceneUI } from './components/ui/MenuSceneUI';

function App() {
	return (
		<>
			<MenuSceneUI />
			<Canvas>
				<Bounds>
					<Experience />
				</Bounds>
			</Canvas>
		</>
	);
}

export default App;
