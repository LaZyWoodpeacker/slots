import OneSpin from "../OneSpin";
import Partition from "./Partition";

export default function SpinLine({
  set = [1, 3, 5],
  rounds = 5,
  firstAnimationTime = 1000,
  timesBetween = 500,
}) {
  return (
    <group>
      <Partition position="-1.62" thickens={0.05} />
      <OneSpin
        set={[set[0], rounds]}
        animationSpeed={firstAnimationTime}
        position={[0, 1.05, 0]}
      />
      <Partition position="0.53" thickens={0.045} />
      <OneSpin
        set={[set[1], rounds]}
        position={[0, 0, 0]}
        animationSpeed={firstAnimationTime + timesBetween}
      />
      <Partition position="-0.53" thickens={0.045} />
      <OneSpin
        set={[set[2], rounds]}
        position={[0, -1.05, 0]}
        animationSpeed={firstAnimationTime + timesBetween * 2}
      />
      <Partition position="1.62" thickens={0.05} />
    </group>
  );
}
