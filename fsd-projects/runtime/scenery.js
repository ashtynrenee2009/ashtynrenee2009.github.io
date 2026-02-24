// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [
      { x: 0, width: 100, height: 300, speedX: -2 },
      { x: 300, width: 120, height: 250, speedX: -2 },
      { x: 650, width: 80, height: 350, speedX: -3 },
      { x: 950, width: 150, height: 280, speedX: -1.5 },
      { x: 1250, width: 90, height: 320, speedX: -2.5 },
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 200, width: 50, height: 150, speedX: 0 },
      { x: 500, width: 40, height: 120, speedX: 0 },
      { x: 800, width: 60, height: 180, speedX: -0.5 },
      { x: 1100, width: 50, height: 150, speedX: 0 },
    ],
  },
};
