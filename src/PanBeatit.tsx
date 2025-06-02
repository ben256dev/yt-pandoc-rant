//PanBeatit.tsx
import React from 'react';
import { useCurrentFrame, useVideoConfig, AbsoluteFill, Img } from 'remotion'
import { getKeyframed } from './keyframes'

const beatitPositions: Keyframe<number[]>[] = [
  {frame: 0,  value: [0, 0]},
  {frame: 20, value: [25, 7.5]},
  {frame: 40, value: [0, 55]},
  {frame: 60, value: [28, 55]},
];

export const PanBeatit: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const [x, y] = getKeyframed(frame, beatitPositions);

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      <Img
        src="https://ben256.com/b/db897f976b4aa4fbdd830b6eef8121e65ea40d77454cba7296f4b250c99a1862/beatit.png"
        style={{
          width: width * 1.4,
          height: width * 1.4,
          position: 'absolute',
          transform: `translate(${-x}%, ${-y}%)`,
        }}
      />
    </AbsoluteFill>
  );
};

