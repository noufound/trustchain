export interface ParamProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lang: { dict: any }; // 根据实际类型替换 `any`
  locale: { lang: string };
}

export interface PageProps {
   params: Promise<{
    lang: string;
  }>;
}