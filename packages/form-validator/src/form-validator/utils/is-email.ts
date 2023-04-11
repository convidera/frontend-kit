const regExp = /\S+@\S+\.\S+/;

const isEmail = (value: string) => regExp.test(value);

export default isEmail;
