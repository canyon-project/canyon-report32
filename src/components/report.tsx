import {ThemeProvider} from "@emotion/react";
import {ConfigProvider, theme} from "antd";
import { useIntl } from 'react-intl';
// import type { GetProp, ConfigProviderP } from 'antd';
const theme2 = {
  colors: {
    primary: 'green'
  }
}

const theme1 = {
  colors: {
    primary: 'blue'
  }
}

const Report = ({
    theme,
                  locale

                }) => {
  const { token } = theme.useToken();
  const isDark = token.colorBgBase === "#000";

  console.log(token.colorBgBase)

  // const intl = useIntl();
  // console.log(intl);
  // 获取当前语言环境代码
  // const currentLocale = intl.locale;

  // console.log(currentLocale)

  return <div>
    <ThemeProvider theme={isDark?theme1:theme2}>
      {token.colorBgBase}
      {isDark&&'是'}
      <div css={theme1 => ({ color: theme1.colors.primary })}>some other text</div>
    </ThemeProvider>
  </div>
}

export default Report;