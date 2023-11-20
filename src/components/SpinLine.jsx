import OneSpin from "./OneSpin";

export default function SpinLine({
  set = [1, 3, 5],
  rounds = 5,
  firstAnimationTime = 1000,
  timesBetween = 500,
  position,
}) {
  return (
    <group position={position}>
      <OneSpin
        set={[set[0], rounds]}
        animationSpeed={firstAnimationTime}
        position={[0, 1.05, 0]}
      />
      <OneSpin
        set={[set[1], rounds]}
        position={[0, 0, 0]}
        animationSpeed={firstAnimationTime + timesBetween}
      />
      <OneSpin
        set={[set[2], rounds]}
        position={[0, -1.05, 0]}
        animationSpeed={firstAnimationTime + timesBetween * 2}
      />
    </group>
  );
}
