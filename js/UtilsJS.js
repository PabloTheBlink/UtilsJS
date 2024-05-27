export function animateNumber(currentValue, newValue, callback, duration = 1000) {
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const increment = (newValue - currentValue) / totalFrames;
    let currentFrame = 0;

    const interval = setInterval(() => {
        currentFrame++;
        const currentValueToDisplay = Math.round(currentValue + increment * currentFrame);
        callback(currentFrame === totalFrames ? newValue : currentValueToDisplay);
        if (currentFrame === totalFrames) clearInterval(interval);
    }, frameDuration);
}
