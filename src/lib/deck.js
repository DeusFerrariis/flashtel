export const handleSwipe = (event, onSwipe) => {
	if (event.detail.direction == "right") {
		onSwipe("next");
	}
	else if (event.detail.direction == "left") {
		onSwipe("previous");
	}
}
