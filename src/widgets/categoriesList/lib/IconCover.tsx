import { Basketball } from '@/shared/ui/icons/Basketball';
import { Camera } from '@/shared/ui/icons/Camera';
import { MagicWand } from '@/shared/ui/icons/MagicWand';
import { MusicNotes } from '@/shared/ui/icons/MusicNotes';
import { PaintBrush } from '@/shared/ui/icons/PaintBrush';
import { Planet } from '@/shared/ui/icons/Planet';
import { Swatches } from '@/shared/ui/icons/Swatches';
import { VideoCamera } from '@/shared/ui/icons/VideoCamera';

export type TCovers = {
  basketball: string;
  camera: string;
  magicwand: string;
  musicnotes: string;
  paintbrush: string;
  planet: string;
  swatches: string;
  videocamera: string;
};

export const svgIconCover: Record<keyof TCovers, React.ReactNode> = {
  basketball: <Basketball />,
  camera: <Camera />,
  magicwand: <MagicWand />,
  musicnotes: <MusicNotes />,
  paintbrush: <PaintBrush />,
  planet: <Planet />,
  swatches: <Swatches />,
  videocamera: <VideoCamera />,
};
