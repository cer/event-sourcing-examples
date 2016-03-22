/**
 * Created by andrew on 18/03/16.
 */
import T from '../../constants/ACTION_TYPES';

const optionsLoaderInitialState = {
  loading: false,
  options: [],
  value: ''
};

const initialState = {
  loading: false,
  form: {},
  errors: {},
  accountsDisabled: true,

  ownersLookup: {
    ...optionsLoaderInitialState
  },
  accountsLookup: {
    ...optionsLoaderInitialState
  }
};

const optionsLoaderReducer = (state = {...optionsLoaderInitialState}, action) => {
  switch (action.type) {
    case T.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_START:
    case T.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_START: {
      const value = action.payload;
      return {
        ...state,
        loading: true,
        value
      };
    }

    case T.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_COMPLETE:
    case T.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_COMPLETE: {
      const { payload } = action;
      return {
        ...state,
        loading: false,
        options: payload === null ? state.options : payload
      };
    }

    default:
      return state;
  }
};

export const bookmarkAccount = (state = {...initialState}, action) => {
  switch (action.type) {
    case T.ACCOUNTS.CREATE_REF_START: {
      return {
        ...state,
        loading: true
      };
    }
    case T.ACCOUNTS.CREATE_REF_COMPLETE:{
      return {
        ...initialState
      };
    }
    case T.ACCOUNTS.CREATE_REF_ERROR: {
      const { error } = action;
      return {
        ...state,
        loading: false,
        errors: error
      };
    }
    case T.ACCOUNTS.CREATE_REF_FORM_UPDATE:{
      const { key, value } = action;
      const isOwnerSetBlank = ((key == 'owner') && !value);
      const isOwnerSelected = ((key == 'owner') && value);
      const nextAccountsDisabled = isOwnerSelected ? false : state.accountsDisabled;

      const nextForm = isOwnerSetBlank ? {
        ...state.form,
        account: null,
        [key]: value
      } : {
        ...state.form,
        [key]: value
      };

      const nextErrors = {
        ...state.errors,
        [key]: null
      };
      return {
        ...state,
        accountsDisabled: nextAccountsDisabled,
        form: nextForm,
        errors: nextErrors
      };
    }
    case T.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_START:
    case T.ACCOUNTS.CREATE_REF_OWNER_LOOKUP_COMPLETE: {
      return {
        ...state,
        ownersLookup:
          optionsLoaderReducer(state.ownersLookup, action)
      };
    }
    case T.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_START:
    case T.ACCOUNTS.CREATE_REF_ACCOUNT_LOOKUP_COMPLETE: {
      return {
        ...state,
        accountsLookup:
          optionsLoaderReducer(state.accountsLookup, action)
      };
    }
    default:
      return state;
  }
};