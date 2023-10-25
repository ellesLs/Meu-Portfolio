export const containerVariants = {
  hidden: {
    width: '100%',
    opacity: 0,
    // x: -window.innerWidth,
  },
  visible: {
    width: '100%',
    opacity: 1,
    // x: 0,
    // transition: { ease: 'backOut', duration: 0.4 },
  },
  exit: {
    opacity: 0,
    x: window.innerWidth,
    transition: { ease: 'backIn', duration: 0.4 },
  },
};
