//Root.tsx
import React from 'react';
import {Composition, Sequence} from 'remotion';
import {Comp} from './Comp';

export const RemotionRoot: React.FC = () => {
  return (
      <Composition
        id="Comp"            // your composition’s unique ID
        durationInFrames={126540}
        fps={60}
        width={1920}
        height={1080}
        component={Comp}     // the React component that renders each frame
      >
      </Composition>
  );
};

