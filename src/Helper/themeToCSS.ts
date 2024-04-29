import silverBack from "@/assets/Table/SilverBack.webp";
import bronzeBack from "@/assets/Table/BronzeBack.webp";
import goldBack from "@/assets/Table/GoldBack.webp";
import rustBack from "@/assets/Table/RustBack.webp";

interface SkillPlateData {
  tableBlock: Hex;
  titleText: Hex;
  titleBackground: string;
}

const themeToCSS: Record<ThemePlate, SkillPlateData> = {
  Silver: {
    tableBlock: "#858d8f",
    titleText: "#657373",
    titleBackground: silverBack,
  },
  Bronze: {
    tableBlock: "#8b7467",
    titleText: "#a7613e",
    titleBackground: bronzeBack,
  },
  Gold: {
    tableBlock: "#8d8166",
    titleText: "#d1a52f",
    titleBackground: goldBack,
  },
  Rust: {
    tableBlock: "#a7793e",
    titleText: "#a7793e",
    titleBackground: rustBack,
  },
};

export default themeToCSS;
