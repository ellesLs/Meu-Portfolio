export const containerVariants = {
  hidden: {
    width: '100%',
    opacity: 0,
  },
  visible: {
    width: '100%',
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    x: window.innerWidth,
    opacity: 0,
    transition: { ease: 'backIn', duration: 0.4 },
  },
};
