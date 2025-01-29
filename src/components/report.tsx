// import { ThemeProvider } from "@emotion/react";
import { FC } from "react";
// import { tokenMap } from "./theme.ts";
import Other from "./widgets/Other.tsx";
import { CommonProps } from "./types.ts";

const Report: FC<CommonProps> = ({ theme = "light", locale = "en" }) => {
  return (
    <>
      <Other theme={theme} locale={locale}></Other>
    </>
  );
};

export default Report;
