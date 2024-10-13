(() => {
  // Get reference to the play button
  const playBtn = document.querySelector("body");

  // Declare the timeline variable
  let timeline;

  // Check if GSAP library is available
  if (!gsap) {
    console.error("GSAP not found. Make sure it is included before this script.");
    return;
  }

  /**
   * Function to perform the computer animation.
   */
  const computerAnimation = () => {
    // If the timeline exists, restart it
    if (timeline) {
      timeline.restart();
      return;
    }

    // Create a new GSAP timeline if not yet created
    timeline = gsap.timeline();

    // Animation sequence
    timeline.from("#stand", 0.5, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: "power2.out"
    })
    .from("#standBack", 0.5, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: "bounce.out"
    })
    .from("#monitorBottom", 0.7, {
      scaleX: 0,
      transformOrigin: "center",
      ease: "bounce.out"
    })
    .from("#screen", 0.6, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: "circ.out",
      delay: 0.4
    })
    .from("#yellowBox", 0.5, { scale: 0 })
    .staggerFrom(
      "#computer-svg > g:nth-child(1) > g path",
      0.2,
      { scaleX: 0 },
      -0.1
    );
  };

  // Handle the click event
  const handleClick = () => {
    computerAnimation();
  };

  // Add event listener for click on the play button
  playBtn.addEventListener("click", handleClick);

  // Run initial animation when the page loads
  computerAnimation();
})();
