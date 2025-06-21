//NerdMacros.tsx
import React from 'react';
import { useCurrentFrame, useVideoConfig, Sequence, AbsoluteFill, Img, Video, OffthreadVideo } from 'remotion'

type NerdMacrosProps = {
  width: number;
}

const webcamWidthPer = .3;

export const NerdMacros: React.FC<NerdMacrosProps> = ({width}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill>
      <AbsoluteFill>
        <OffthreadVideo
          src="https://ben256.com/b/76bff3d837d133943794fdcb488444c4a617c2cb03503e4d028293a02b5a976e/primeagen_vimtutor.mp4"
          playbackRate={25}
          startFrom={2950}
          style={{
            position: 'absolute',
            objectFit: 'cover',
            width,
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill>
        <Video
          src="https://ben256.com/b/2272e768987aafd92be242a3122d4616813e0c2801bb6a6a7ac8e7427376962a/sweaty_gamer_meme.mp4"
          style={{
            width: width * webcamWidthPer,
            left: width * (1 - webcamWidthPer),
            top: width * .22,
            position: 'absolute',
            objectFit: 'cover',
          }}
        />
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

