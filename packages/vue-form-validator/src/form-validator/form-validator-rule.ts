import {
  UnwrapRef,
} from 'vue';

type TFormValidatorRule<T> = (value: UnwrapRef<T>) => boolean | string;

export default TFormValidatorRule;
