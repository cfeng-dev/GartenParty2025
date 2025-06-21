/**
 * @file scroll_animations.js
 * @description Animates elements as they enter the viewport on scroll
 * @date Created on: 22.06.2025
 * @author C.Feng
 */

document.addEventListener("DOMContentLoaded", function () {
    // Register the GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate each highlight-item when it enters the viewport
    gsap.utils.toArray(".highlight-item").forEach((item, i) => {
        gsap.from(item, {
            opacity: 0,
            y: 60,
            duration: 1.2,
            delay: i * 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "restart none restart none",
            },
        });
    });
});
