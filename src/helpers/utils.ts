const bcrypt = require('bcrypt');

const saltRounds = 10;

export const hasPasswordHelper = async (plainPassword: string) => {
  try {
    const res: any = await bcrypt.hash(plainPassword, saltRounds);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const comparePasswordHelper = async (
  plainPassword: string,
  hashPassword: string,
) => {
  try {
    return await bcrypt.compare(plainPassword, hashPassword);
  } catch (error) {
    console.log(error);
  }
};
