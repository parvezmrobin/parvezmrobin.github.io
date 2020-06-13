/**
 * Parvez M Robin
 * this@parvezmrobin.com
 * Jun 09, 2020
 */

const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();

// Debug Logger
const castDebugLogger = cast.debug.CastDebugLogger.getInstance();
const LOG_TAG = 'OC.LOG';

// Enable debug logger and show a 'DEBUG MODE' overlay at top left corner.
castDebugLogger.setEnabled(true);
context.setLoggerLevel(cast.framework.LoggerLevel.DEBUG);

playerManager.setMessageInterceptor(
  cast.framework.messages.MessageType.LOAD, loadRequestData => {
    const error = new cast.framework.messages.ErrorData(
      cast.framework.messages.ErrorType.LOAD_FAILED);
    if (!loadRequestData.media) {
      error.reason = cast.framework.messages.ErrorReason.INVALID_PARAM;
      return error;
    }

    /** @type {HTMLIFrameElement} */
    const iframe = document.getElementById('placeholder')
    iframe.setAttribute(
      'src',
      loadRequestData.media.contentId,
    );

    castDebugLogger.info(LOG_TAG, loadRequestData.media);
    console.log(LOG_TAG, loadRequestData.media);

    return loadRequestData;
  });

context.start({ disableIdleTimeout: true });
