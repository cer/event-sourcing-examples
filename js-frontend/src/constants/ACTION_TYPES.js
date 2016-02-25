import defineActionTypes from '../utils/defineActionTypes'

export default defineActionTypes({
  /*
   * View model
   */
  AUTH: `
    CONFIGURE_START
    CONFIGURE_COMPLETE
    CONFIGURE_ERROR
    AUTHENTICATE_START
    AUTHENTICATE_COMPLETE
    AUTHENTICATE_ERROR
    SIGN_IN_START
    SIGN_IN_COMPLETE
    SIGN_IN_ERROR
    SIGN_IN_FORM_UPDATE
    SIGN_OUT_START
    SIGN_OUT_COMPLETE
  `,

  DOCUMENT_LIST_VIEW: `
    SET_QUERY
  `,

  DOCUMENT_VIEW: `
    UPDATE_DATA
    SET_ERRORS
    REMOVE_STALE_ERRORS
    CLEAR
  `,


  /*
   * Data model
   */

  DOCUMENT_DATA: `
    UPDATE
  `,

  /*
   * Application
   */

  NAVIGATION: `
    START
    COMPLETE
  `
})
