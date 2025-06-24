//Comp.tsx
import React from 'react';
import { AbsoluteFill, Audio, Img, Video, useCurrentFrame, useVideoConfig, Sequence} from 'remotion';
import { sin, PI } from 'mathjs';
import { PanBeatit } from './PanBeatit';
import { Fade } from './Fade';
import { VolumeFade } from './VolumeFade';

export const Comp: React.FC = () => {
  const { fps, durationInFrames, width, height } = useVideoConfig();

  const frame = useCurrentFrame();


  const volume =
    frame < 2500
      ? 0.5
      : frame < 2600
      ? 0.5 - ((frame - 2500) / 100) * (0.5 - 0.2)
      : frame < 56000
      ? 0.2
      : frame < 58130
      ? 0.5 - ((frame - 56000) / 2130) * 0.5
      : 0.2;

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
      <Sequence from={20965}>
        <Audio src="https://ben256.com/b/ae808dfa50e3cca4fb8ed3b0fc282848a5c1eb53bdd3367d53182284496776d3/md_rant_final_safe.mp3"/>
      </Sequence>

      <Sequence from={1900}>
        <Audio src="https://ben256.com/b/c8e2b66008c79de0dd5c83d71b82ffd4a387be779e160eafdfb791ce0c3dab43/01_Unnamed_Continents.mp3" volume={volume}/>
      </Sequence>
      <Sequence from={9455}>
        <Audio src="https://ben256.com/b/80fedaeddf9e7a86c484e5b3b0e2117afb312ec5e361f8fd1a1da23e68690e0e/13_Fresh_Air.mp3" volume={volume}/>
      </Sequence>
      <Sequence from={20400} durationInFrames={20965-20400}>
        <Audio src="https://ben256.com/b/a9d5fa93e75e54f980812277dc23b4e0dfb4fd7e1b229fdfa8d578300b87c1dc/jaleco-super-rom-classroom.mp3"/>
      </Sequence>
      <Sequence from={20965}>
        <Audio volume={volume} src="https://ben256.com/b/7f176e3d5118535329dcacf9b24a4e3772808b60f9c81c72ca0b17ea4f9acfb2/james-primate-outskirts.mp3"/>
      </Sequence>
      <Sequence from={32580}>
        <Audio volume={volume} src="https://ben256.com/b/42eb0931834e471ed5e87e3722f358cf7adeceade40b8d04b9c720259e9a5676/spore2005-homeworld-sweet-homeworld.mp3"/>
      </Sequence>
      <Sequence from={50134} durationInFrames={58130-50134}>
        <Audio volume={volume} src="https://ben256.com/b/1f90aba26352829bfb03071bb366deba5de14bf49dc043dc66f4ea509cacef8d/spore2005-editor-theme.mp3"/>
      </Sequence>
      <Sequence from={58130}>
        <Audio volume={volume} src="https://ben256.com/b/20c52eac4eff2beb22a3b6a70eed772aa8eefd699e419b95b4a9ca1d70983f4e/spore2005-another-big-rock.mp3"/>
      </Sequence>
      <Sequence from={77979}>
        <Audio volume={volume} src="https://ben256.com/b/339573bccde4694b736fc4c68b4478e54537e41b67e124d18d881266fc500bc4/halo-ce-cloaked-in-blackness.mp3"/>
      </Sequence>
      <Sequence from={91127}>
        <Audio volume={volume} src="https://ben256.com/b/34b410903073211485553bf5716376aa1769da8e921635f6f8a1327851bd3eec/halo-ce-arborea-above.mp3"/>
      </Sequence>
      <Sequence from={96450}>
        <Audio volume={volume} src="https://ben256.com/b/8342c1ec08a89b53065bcac00b171f1fe9bac842a2f31a77267c1480f8a1100d/halo-ce-perchance-to-dream.mp3"/>
      </Sequence>
      <Sequence from={100000}>
        <Audio volume={volume} src="https://ben256.com/b/29429a9837a29e72a326101e86f82cd304611b686f1a356c8b6610734b9df2c7/halo-ce-mission-music-loop.mp3"/>
      </Sequence>
      <Sequence from={108050}>
        <Audio volume={volume} src="https://ben256.com/b/2f963093df3a418e2bc98f658cbbf0d91776f38cc4250fb7efe969a7695c45c8/halo-ce-to-sleep.mp3"/>
      </Sequence>
      <Sequence from={111800}>
        <Audio volume={volume} src="https://ben256.com/b/d02e232762feee7786ce675f0bdab8c34eb2b8c9a7486992241a5f7be993fe7c/halo-ce-didactic-principal.mp3"/>
      </Sequence>
      <Sequence from={118230}>
        <Audio volume={volume} src="https://ben256.com/b/7b04363a090294df8012aa71fb552417808ad13ca8e7a33ae2989b70a0220b7f/james-primate-mud-pits.mp3"/>
      </Sequence>
    </AbsoluteFill>
  );
};

