import _email from './email';
import _url from './url';
import _min from './min';
import _required from './required';
import _max from './max';
import _confirmed from './confirmed';
import _includesNumber from './includes-number';
import _regex from './regex';
import _includesUpperCase from './includes-upper-case';
import _includesLowerCase from './includes-lower-case';
import _hexCode from './hex-code';

export default function useRules(
  translation?: (key: string, params?: Record<string, any>) => string,
) {
  function displayMessage(message?: string) {
    if (!message) {
      console.warn("Warning! You didn't provide validation message for the field!");
    }
    return message || '';
  }

  function min(minLength: number, message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(
        translation('formValidation.messages.min', {
          length: minLength,
        }),
      );
    }

    return _min(minLength, displayMessage(text));
  }

  function required(message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(translation('formValidation.messages.required'));
    }
    return _required(displayMessage(text));
  }

  function email(message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(translation('formValidation.messages.email'));
    }
    return _email(displayMessage(text));
  }

  function max(maxLength: number, message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(
        translation('formValidation.messages.max', {
          length: maxLength,
        }),
      );
    }
    return _max(maxLength, displayMessage(text));
  }

  function confirmed(confirmValue: unknown, message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(translation('formValidation.messages.confirmed'));
    }
    return _confirmed(confirmValue, displayMessage(text));
  }

  function includesNumber(message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(translation('formValidation.messages.includesNumber'));
    }

    return _includesNumber(displayMessage(text));
  }

  function includesUpperCase(message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(translation('formValidation.messages.includesUpperCase'));
    }

    return _includesUpperCase(displayMessage(text));
  }

  function includesLowerCase(message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(translation('formValidation.messages.includesLowerCase'));
    }

    return _includesLowerCase(displayMessage(text));
  }

  function regex(regexp: RegExp, message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(translation('formValidation.messages.regex'));
    }

    return _regex(regexp, displayMessage(text));
  }

  function hexCode(message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(translation('formValidation.messages.hexCode'));
    }

    return _hexCode(displayMessage(text));
  }

  function url(message?: string) {
    let text = message;
    if (!text && translation) {
      text = String(translation('formValidation.messages.url'));
    }

    return _url(displayMessage(text));
  }

  return {
    min,
    required,
    email,
    max,
    confirmed,
    includesNumber,
    regex,
    includesUpperCase,
    includesLowerCase,
    hexCode,
    url,
  };
}
