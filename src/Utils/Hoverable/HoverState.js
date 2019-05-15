import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

/**
 * Touch devices emulate mouse events. This functions makes it possible to know
 * if the current modality supports hover (including for multi-modality
 * devices).
 */
const createHoverMonitor = () => {
  let isHoverEnabled = false;
  let lastTouchTime = 0;

  function enableHover() {
    if (isHoverEnabled || Date.now() - lastTouchTime < 500) {
      return;
    }
    isHoverEnabled = true;
  }

  function disableHover() {
    lastTouchTime = new Date();
    if (isHoverEnabled) {
      isHoverEnabled = false;
    }
  }

  if (canUseDOM) {
    document.addEventListener('touchstart', disableHover, true);
    document.addEventListener('mousemove', enableHover, true);
  }

  return {
    get isEnabled() {
      return isHoverEnabled;
    },
  };
};

export default createHoverMonitor;
