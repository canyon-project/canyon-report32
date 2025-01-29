import { css } from "@emotion/react";
import { tokenMap } from "../theme.ts";
import { FC } from "react";
import { languageData } from "../language.ts";
import { CommonChildrenProps } from "../types.ts";

const Other: FC<CommonChildrenProps> = ({ theme, locale }) => {
  // 使用 useTheme hook 获取当前的 theme
  // const theme222 = useTheme(); // 将 theme 强制类型为 Theme
  // theme222
  const { colorPrimary } = tokenMap[theme];
  return (
    <div>
      <div
        css={css`
          background-color: antiquewhite;
          color: ${colorPrimary};
        `}
      >
        {languageData[locale].greeting}
      </div>
    </div>
  );
};
export default Other;
