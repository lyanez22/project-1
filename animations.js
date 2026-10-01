/* GSAP typewriter text animation from https://gsapify.com/gsap-text-animations/ */
const storyLines = gsap.utils.toArray(".storyline h1, .storyline p");

storyLines.forEach((line, index) => {
    const textWidth = line.scrollWidth;

    gsap.set(line, {
        width: 0,
        display: "inline-block",
        opacity: 1
    });

    gsap.to(line, {
        width: textWidth,
        duration: 1.4 + index * 0.4,
        ease: "none",
        delay: index * 0.35
    });

    gsap.to(line, {
        borderRightColor: "rgba(255, 255, 255, 0)",
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "none",
        delay: index * 0.35
    });
});