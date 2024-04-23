interface SkillPlateData {
  TableBlock: Hex;
  TitleText: Hex;
  TitleBackground: string;
}

const themeToCSS: Record<ThemePlate, SkillPlateData> = {
  Silver: {
    TableBlock: "#858d8f",
    TitleText: "#657373",
    TitleBackground: "@/assets/Table/SilverBack.webp",
  },
  Bronze: {
    TableBlock: "#8b7467",
    TitleText: "#a7613e",
    TitleBackground: "@/assets/Table/BronzeBack.webp",
  },
  Gold: {
    TableBlock: "#8d8166",
    TitleText: "#d1a52f",
    TitleBackground: "@/assets/Table/GoldBack.webp",
  },
  Rust: {
    TableBlock: "#a7793e",
    TitleText: "#a7793e",
    TitleBackground: "@/assets/Title-field.webp",
  },
};

export default themeToCSS;
