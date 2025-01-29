// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Report from "./components";
import { ConfigProvider, theme } from "antd";
import locale from "antd/locale/de_DE";
// import { css } from '@emotion/react'

function App() {
  // const [count, setCount] = useState(0)
  const { token } = theme.useToken();
  const isDark = token.colorBgBase === "#000";

  const { darkAlgorithm } = theme;

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#0071c2",
          },
          algorithm: true ? [darkAlgorithm] : [],
        }}
        locale={locale}
      >
        {/*{isDark?'是':'否'}*/}
        <Report locale={"en"} />
      </ConfigProvider>
    </>
  );
}

export default App;
