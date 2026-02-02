export function createDoubleTapPreventer(timeout_ms: number = 500) {
	let dblTapTimer = 0;
	let dblTapPressed = false;

	return function (e: TouchEvent) {
		clearTimeout(dblTapTimer);
		if (dblTapPressed) {
			// prevent IOS magnifier by disabled second touch
			e.preventDefault();
			dblTapPressed = false;
		} else {
			// First touch
			dblTapPressed = true;
			dblTapTimer = setTimeout(() => {
				dblTapPressed = false;
			}, timeout_ms);
		}
	};
}
