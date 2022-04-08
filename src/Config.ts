
/** @todo descriptions */
export interface Config {
  /** Component's name, *in pascal case* */
  name: string,
  /** Component's name in kebab case */
  kebabName: string

  componentOptions: {
    exportType: 'named' | 'default';
    declaration: 'const' | 'function';
  }

  environment: 'react' | 'solidjs' | 'preact' | 'react-native' | 'custom';
  reactOptions?: {
    importReact: boolean;
  },
  solidjsOptions?: {},
  preactOptions?: {},
  reactNativeOptions?: {},

  typescript: boolean;
  typescriptOptions?: {};

  styling: string;
  styleFileOptions: {
    extension: string;
    module: boolean;
  }

  baseDir: string;
  destination: string;
  allowOutsideBase: boolean;

  pure: boolean;
}