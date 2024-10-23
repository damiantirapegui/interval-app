import "./TextClock.css";

interface TextClockProps {
  minute: number;
  seconds: number;
}

const swedishNumber: { [key: number]: string } = {
  0: "NOLL",
  1: "ETT",
  2: "TVÅ",
  3: "TRE",
  4: "FYRA",
  5: "FEM",
  6: "SEX",
  7: "SJU",
  8: "ÅTTA",
  9: "NIO",
  10: "TIO",
  11: "ELVA",
  12: "TWELVE",
  13: "TRETTON",
  14: "FJORTON",
  15: "FEMTON",
  16: "SEXTON",
  17: "SJUTTON",
  18: "ARTON",
  19: "NITTON",
  20: "TJUGO",
  21: "TJUGOETT",
  22: "TJUGOTVÅ",
  23: "TJUGOTRE",
  24: "TJUGOFYRA",
  25: "TJUGOFEM",
  26: "TJUGOSEX",
  27: "TJUGOSJU",
  28: "TJUGOÅTTA",
  29: "TJUGONIO",
  30: "TRETTIO",
  31: "TRETTIOETT",
  32: "TRETTIOTVÅ",
  33: "TRETTIOTRE",
  34: "TRETTIOFYRA",
  35: "TRETTIOFEM",
  36: "TRETTIOSEX",
  37: "TRETTIOSJU",
  38: "TRETTIOÅTTA",
  39: "TRETTIONIO",
  40: "FJORTIO",
  41: "FJORTIOETT",
  42: "FJORTIOTVÅ",
  43: "FJORTIOTRE",
  44: "FJORTIOFYRA",
  45: "FJORTIOFEM",
  46: "FJORTIOSEX",
  47: "FJORTIOSJU",
  48: "FJORTIOÅTTA",
  49: "FJORTIONIO",
  50: "FEMTIO",
  51: "FEMTIOETT",
  52: "FEMTIOTVÅ",
  53: "FEMTIOTRE",
  54: "FEMTIOFYRA",
  55: "FEMTIOFEM",
  56: "FEMTIOSEX",
  57: "FEMTIOSJU",
  58: "FEMTIOÅTTA",
  59: "FEMTIOFEM",
  60: "SEXTIO",
};

export const TextClock: React.FC<TextClockProps> = ({ minute, seconds }) => {
  const minuteText = swedishNumber[minute] || "OKÄND";
  const secondText = swedishNumber[seconds] || "OKÄND";
  const timeExpression = `${minuteText} MINUTER OCH ${secondText} SEKUNDER KVAR`;

  return (
    <div className="text-clock-container">
      <h2 className="text-clock">{timeExpression}</h2>
    </div>
  );
};
