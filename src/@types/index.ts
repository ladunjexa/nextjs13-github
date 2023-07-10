import { ImageProps } from "next/image";
import { securityData } from "@/data";

export interface Controllerable {
  controller: boolean[] | boolean | any;
  handleController: (value: boolean, index: number) => void;
}

export interface Styleable {
  className?: string;
}

export interface Mouseable {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export interface Indexable {
  index: number;
}

export interface StickyState {
  isSticky: boolean;
  isFixed: boolean;
}

export interface InteractionState {
  hovered: string;
  showMobileNav: boolean;
}

export type EarthProps = {
  offset?: [number, number];
};

export type NavListItemProps = {
  main: string;
  sub?: string;
  path?: string;
  path2?: string;
  href?: string;
};

export type PictureProps = {
  size: number[];
  src: string;
  alt?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "auto" | "sync";
} & Styleable &
  Omit<ImageProps, "alt">;

export type CopilotBlockProps = {
  container: any;
  item: any;
  count: any;
  drawId?: number;
};

export type BranchPictureProps = {
  branch: "collaboration" | "productivity" | "security";
  src?: string;
};

export type BlockDataProps = {
  block: (typeof securityData.blocks)[0];
} & Controllerable &
  Indexable;

export type AnimatedUnderlineProps = Pick<Controllerable, "controller">;

export type AnimatedAnchorProps = {
  title: string;
  href?: string;
  isUnderline?: boolean;
  isBlack?: boolean;
  iconSize?: number;
} & Styleable &
  Pick<Controllerable, "controller"> &
  Mouseable;

export type CollabDialogProps = {
  title: string;
  desc: string;
  text?: string;
} & Styleable &
  Controllerable &
  Indexable;

export type GlobeAnchorProps = {
  header: string;
  isBlack?: boolean;
  href?: string;
} & Styleable &
  Controllerable &
  Indexable;

export type InteractiveCardProps = {
  children: React.ReactNode;
  backgroundColor: string;
  direction: string;
  left: string;
};
