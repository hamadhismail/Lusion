// Test procedural cross geometry generator
function createCrossGeometry() {
  // We can construct a 6-pronged cross by combining cylinders along X, Y, and Z
  // with smooth end-bevels and center core
  const numSegments = 24;
  const armRadius = 0.35;
  const armLength = 1.6; // from -0.8 to +0.8
  const bevelRadius = 0.08;
  const holeRadius = 0.12;
  const holeDepth = 0.25;

  console.log('Cross dimensions configured: radius =', armRadius, 'length =', armLength);
}
createCrossGeometry();
