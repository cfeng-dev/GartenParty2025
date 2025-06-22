/**
 * @file scroll_smooth.js
 * @description Enables Apple-style smooth scrolling for desktop browsers
 * @date Created on: 22.06.2025
 * @author C.Feng
 */

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 0.9,
    effects: true,
});
