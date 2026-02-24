function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
  // move buildings
  for (var i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];
    buildingInstance.x += buildingInstance.speedX + currentLevel.speed;

    // wrap to right when the instance has entirely left the screen
    if (buildingInstance.x + buildingInstance.width < 0) {
      buildingInstance.x = scenery.building.loopWidth;
    }
  }

  // move lamps
  for (var i = 0; i < scenery.lamp.instances.length; i++) {
    var lampInstance = scenery.lamp.instances[i];
    lampInstance.x += lampInstance.speedX + currentLevel.speed;

    if (lampInstance.x + lampInstance.width < 0) {
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
  for (var i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];
    create(currentObject);
    // uncomment the next line while verifying that every object is created
    // console.log(currentObject.type, currentObject.kind);
  }
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
  if (obj.type === "obstacle") {
    makeObstacle(obj);
  } else if (obj.type === "enemy") {
    makeEnemy(obj);
  } else if (obj.type === "powerup") {
    makePowerup(obj);
  } else if (obj.type === "goal") {
    makeGoal(obj);
  } else if (obj.type === "platform") {
    makePlatform(obj);
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  var matched = [];
  for (var i = 0; i < gameObjects.length; i++) {
    var obj = gameObjects[i];
    if (obj.type === type) {
      matched.push(obj);
    }
  }
  // console.log(matched); // uncomment while debugging
  return matched;
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];
    for (var j = 0; j < projectiles.length; j++) {
      var currentProjectile = projectiles[j];
      // note: helper's parameter order is (gameObject, projectile)
      if (
        isCollidingWithProjectile(currentObject, currentProjectile) === true
      ) {
        handleProjectileObjectCollision(i, j);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
}
