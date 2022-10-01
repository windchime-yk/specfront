export interface SpecfrontOptions {
  sitename?: string;
  description?: string;
  basepath?: string;
  spec: {
    title?: string;
    description?: string;
    path: string;
    url: string;
  };
}
