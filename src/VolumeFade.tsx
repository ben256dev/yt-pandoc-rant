import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';

type VolumeFadeProps = {
  children: (volume: number) => React.ReactNode;
  fadeOut?: boolean;
  startFrame?: number;
  endFrame?: number;
  effectDuration?: number;
};

export const VolumeFade: React.FC<VolumeFadeProps> = ({
  children,
  fadeOut = false,
  startFrame = 0,
  endFrame = 60,
  effectDuration = endFrame - startFrame,
}) => {
  const frame = useCurrentFrame();

  const volume = interpolate(
    frame - startFrame,
    [0, effectDuration],
    fadeOut ? [1, 0] : [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return <>{children(volume)}</>;
};

