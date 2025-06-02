//Comp.tsx
import React from 'react';
import { AbsoluteFill, Img, Video, useCurrentFrame, useVideoConfig, Sequence} from 'remotion';
import { sin, PI } from 'mathjs';
import { PanBeatit } from './PanBeatit';
import { Fade } from './Fade';

export const Comp: React.FC = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={240}>
        <PanBeatit />
      </Sequence>
    </AbsoluteFill>
  );
};

