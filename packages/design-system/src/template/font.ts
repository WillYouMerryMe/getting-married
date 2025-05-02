type FontStyle = {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;
};

type TemplateGlobal = {
  [section: string]: FontStyle;
};

type TemplateFonts = {
  [fontName: string]: {
    default?: FontStyle;
  };
};

type Templates = {
  [templateId: string]: {
    global: TemplateGlobal;
    fonts: TemplateFonts;
  };
};
