export type ProjectProps = {
  id: string;
  title: string;
  images: {
    desktopImg: string;
    mobileImg?: string;
  };
  description: string;
  toolsUsed: string[];
  liveUrl: string;
  gitHubUrl: string;
  modal?: boolean;
};
