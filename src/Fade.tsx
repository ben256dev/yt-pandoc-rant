import React from 'react';
import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from 'remotion';

export type FadeType = 'in' | 'out';

type FadeProps = {
  children: React.ReactNode;
  fadeOut?: boolean;
  startFrame?: number;
  endFrame?: number;
  effectDuration?: number,
  style?: React.CSSProperties;
};

export const Fade: React.FC<FadeProps> = ({
  children,
  fadeOut = false,
  startFrame = 0,
  endFrame = 60,
  effectDuration = endFrame - startFrame,
  style,
}) => {
    const { fps, durationInFrames, width, height } = useVideoConfig();
    const frame = useCurrentFrame();

    const opacity = interpolate(frame - startFrame, [0, effectDuration], fadeOut ? [1, 0] : [0, 1], { extrapolateRight: "clamp" });

    return (
        <div style={{ opacity, ...style, }}>{children}</div>
    );
};
