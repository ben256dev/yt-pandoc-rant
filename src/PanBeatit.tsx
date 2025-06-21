//PanBeatit.tsx
import React from 'react';
import { useCurrentFrame, useVideoConfig, Sequence, AbsoluteFill, Img, Video } from 'remotion'
import { getKeyframed } from './keyframes'
import { NerdMacros } from './NerdMacros';

const SWEATY_FRAME = 80;
const SWEATY_DUR = 140;

const beatitPositions: Keyframe<number[]>[] = [
  {frame: 0,  value: [0, 0]},
  {frame: SWEATY_FRAME, value: [25, 7.5]},
  {frame: SWEATY_FRAME+SWEATY_DUR, value: [25, 7.5]},
  {frame: 330, value: [0, 55]},
  {frame: 400, value: [28, 55]},
];

export const PanBeatit: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const [x, y] = getKeyframed(frame, beatitPositions);

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      <AbsoluteFill>
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
      <Sequence from={SWEATY_FRAME} durationInFrames={SWEATY_DUR}>
        <div
          style={{
            position: 'absolute',
            left: '25%',
            top: '51%',
          }}
        >
          <NerdMacros width={880}/>
        </div>
      </Sequence>

    </AbsoluteFill>
  );
};

