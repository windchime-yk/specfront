export interface SpecfrontOptions {
  sitename?: string;
  description?: string;
  lang: string;
  basepath?: string;
  disabledLanding?: boolean;
  spec: {
    title?: string;
    description?: string;
    path?: string;
    url: string;
  };
}

export interface CommonOptions {
  lang: string;
  url: string;
  base: string;
  disabledLanding?: boolean;
}
