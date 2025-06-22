//Comp.tsx
import React from 'react';
import { AbsoluteFill, Audio, Img, Video, useCurrentFrame, useVideoConfig, Sequence} from 'remotion';
import { sin, PI } from 'mathjs';
import { PanBeatit } from './PanBeatit';
import { Fade } from './Fade';

export const Comp: React.FC = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={1900}>
        <PanBeatit />
      </Sequence>
      <Sequence from={1900} durationInFrames={600}>
        <Audio src="https://ben256.com/b/a4df5254da5bed93ccc3347251cae0800c15281acba35543953d3fd3571a5091/vim-git-md-safe.mp3"/>
      </Sequence>
      <Sequence from={2500} durationInFrames={17900}>
        <Video startFrom={850} src="https://ben256.com/b/02668ccc9ecc09234baa392d1f15ef0d033f51724faf213d37aafd0117773705/pandoc_demo_loud.mp4"/>
      </Sequence>
      <Sequence from={20400}>
        <Audio src="https://ben256.com/b/ae808dfa50e3cca4fb8ed3b0fc282848a5c1eb53bdd3367d53182284496776d3/md_rant_final_safe.mp3"/>
      </Sequence>
    </AbsoluteFill>
  );
};

