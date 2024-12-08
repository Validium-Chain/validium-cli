import kleur from "kleur";

export const log = {
  info: (message: string) => console.log(kleur.blue(`[INFO]: ${message}`)),
  success: (message: string) =>
    console.log(kleur.green(`[SUCCESS]: ${message}`)),
  warning: (message: string) =>
    console.log(kleur.yellow(`[WARNING]: ${message}`)),
  error: (message: string) => console.log(kleur.red(`[ERROR]: ${message}`)),
};
