const StatusType = Object.freeze({
  ALIVE: "ALIVE",
  DEAD: "DEAD",
  UNKNOWN: "UNKNOWN",
});

const BadgeStyles = Object.freeze({
  ALIVE: "bg-green",
  DEAD: "bg-red",
  UNKNOWN: "bg-gray",
});

export { StatusType, BadgeStyles };
