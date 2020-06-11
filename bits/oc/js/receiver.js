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

    document.removeEventListener('DOMContentLoaded')

    /** @type {HTMLVideoElement} */
    const hostEl = document.querySelector('#host')
    /** @type {HTMLVideoElement} */
    // const classEl = document.querySelector('#class')
    /** @type {HTMLVideoElement} */
    const guestEl = document.querySelector('#guest')

    const spanishRoad = 'https://www.googleapis.com/drive/v3/files/1xO-X2yYyWL0Zm2rGU59Ui0Z0SIeXi9vV?alt=media&key=AIzaSyBYxeBC0UK1bLVbkY73pLMI8ce0gd65jMM';
    hostEl.setAttribute(
      'src',
      spanishRoad,
    );

    // guestEl.setAttribute(
    //   'src',
    //   spanishRoad,
    // );

    // classEl.setAttribute(
    //   'src',
    //   'https://www.googleapis.com/drive/v3/files/15kbxcGQKvhtHljyy5r_6_T2hqw8vW-U2?alt=media&key=AIzaSyBYxeBC0UK1bLVbkY73pLMI8ce0gd65jMM',
    // );

    const metadata = new cast.framework.messages.MovieMediaMetadata();
    metadata.title = 'Oiti - Bonolota Sen';
    metadata.subtitle = 'Jibanananda Das';
    const oiti = 'https://www.googleapis.com/drive/v3/files/15kbxcGQKvhtHljyy5r_6_T2hqw8vW-U2?alt=media&key=AIzaSyBYxeBC0UK1bLVbkY73pLMI8ce0gd65jMM';
    loadRequestData.media.contentUrl = oiti;
    loadRequestData.media.metadata = metadata;

    castDebugLogger.info(LOG_TAG, document.body.innerHTML);

    console.log(LOG_TAG, document.body.innerHTML);

    return loadRequestData;
  });

context.start();
