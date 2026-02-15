import { useCallback } from 'react';
import * as THREE from 'three';

type ActionsMap = Record<string, THREE.AnimationAction | undefined>;

const FADE_DURATION = 0.1;

export const use3Danimation = (actions: ActionsMap | undefined) => {
	const fadeOutAllAnimations = useCallback(() => {
		if (!actions) return;
		Object.values(actions).forEach((action) => {
			action?.fadeOut(FADE_DURATION);
		});
	}, [actions]);

	const playSingleAction = useCallback(
		(name: string) => {
			if (!actions) return;
			const action = actions[name];
			if (!action) return;

			fadeOutAllAnimations();

			action.reset();

			action.setLoop(THREE.LoopOnce, 1);
			action.clampWhenFinished = true;

			action.play();
			return action;
		},
		[actions, fadeOutAllAnimations],
	);

	const playLoopAction = useCallback(
		(name: string) => {
			if (!actions) return;
			const action = actions[name];
			if (!action) return;

			fadeOutAllAnimations();

			action.reset();

			action.loop = THREE.LoopRepeat;
			action.repetitions = Infinity;
			action.clampWhenFinished = false;

			action.play();
			return action;
		},
		[actions, fadeOutAllAnimations],
	);

	const stopAllActions = useCallback(() => {
		if (!actions) return;

		Object.values(actions).forEach((action) => {
			action?.stop();
		});
	}, [actions]);
	return { playLoopAction, playSingleAction, stopAllActions };
};
