import { animate } from "motion";

const animation = animate(
  ".box",
  { opacity: 1, rotate: 90 },
  { duration: 0.7 }
);

const rotate = () => {
  animation.complete();
  animation.play();
};

animate(
  ".box2",

  { rotate: 90 },

  { type: "spring", repeat: Infinity, repeatDelay: 0.2 }
);

window.rotate = rotate;
