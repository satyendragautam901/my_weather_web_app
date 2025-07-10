export function getFullWindDirection(dir) {
  const map = {
    N: "North",
    S: "South",
    E: "East",
    W: "West",
    NE: "Northeast",
    NW: "Northwest",
    SE: "Southeast",
    SW: "Southwest",
    NNE: "North-Northeast",
    ENE: "East-Northeast",
    ESE: "East-Southeast",
    SSE: "South-Southeast",
    SSW: "South-Southwest",
    WSW: "West-Southwest",
    WNW: "West-Northwest",
    NNW: "North-Northwest",
  };

  // fallback to original string if unknown
  return map[dir] || dir;
}
