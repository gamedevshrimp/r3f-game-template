import { create } from 'zustand';
import { type SceneType } from '../types/game';

type SceneState = {
	scene: SceneType;
	sceneVersion: number;
	setScene: (scene: SceneType) => void;
	resetScene: () => void;
};

export const useSceneStore = create<SceneState>((set) => ({
	scene: 'menu',
	sceneVersion: 0,

	setScene: (scene) =>
		set({
			scene,
			sceneVersion: 0,
		}),

	resetScene: () =>
		set((s) => ({
			sceneVersion: s.sceneVersion + 1,
		})),
}));
