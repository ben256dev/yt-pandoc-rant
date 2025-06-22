//PanBeatit.tsx
import React from 'react';
import { useCurrentFrame, useVideoConfig, Sequence, AbsoluteFill, Audio, Img, Video } from 'remotion'
import { getKeyframed } from './keyframes'
import { NerdMacros } from './NerdMacros';

const SWEATY_FRAME = 0;
const SWEATY_END = 550;

const beatitPositions: Keyframe<number[]>[] = [
  {frame: SWEATY_FRAME, value: [25, 7.5]},
  {frame: SWEATY_END, value: [25, 7.5]},
  {frame: SWEATY_END+90, value: [0, 0]},
  {frame: 1000, value: [0, 0]},
  {frame: 1001, value: [-10, -10]},
  {frame: 1150, value: [-10, -10]},
  {frame: 1151, value: [15, 15]},
  {frame: 1320, value: [15, 15]},
  {frame: 1321, value: [-30, 62]},
  {frame: 1620, value: [40, 55]},
  {frame: 1621, value: [40, 55]},
  {frame: 1720, value: [40, 55]},
  {frame: 1721, value: [-30, 62]},
];

const beatitZoom: Keyframe<number[]>[] = [
  {frame: 0, value: 1},
  {frame: 1000, value: 1},
  {frame: 1001, value: 1.5},
  {frame: 1150, value: 1.5},
  {frame: 1151, value: 1.3},
  {frame: 1320, value: 1.3},
  {frame: 1321, value: 1.3},
  {frame: 1720, value: 1},
  {frame: 1721, value: 1.5},
];

export const PanBeatit: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const [x, y] = getKeyframed(frame, beatitPositions);
  const zoom = getKeyframed(frame, beatitZoom);

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      <Audio src="https://ben256.com/b/81f8d7043bf6812bbf89f06db2f5f3de262b7567e07b57085591e7506a2e6631/he-just-a-vim-user.mp3"/>
      <AbsoluteFill>
        <Img
          src="https://ben256.com/b/db897f976b4aa4fbdd830b6eef8121e65ea40d77454cba7296f4b250c99a1862/beatit.png"
          style={{
            width: width * 1.4,
            height: width * 1.4,
            position: 'absolute',
            transform: `translate(${-x}%, ${-y}%) scale(${zoom})`,
          }}
        />
      </AbsoluteFill>
      <Sequence from={SWEATY_FRAME} durationInFrames={180}>
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

