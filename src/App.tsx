import Report from "./components";
import { ConfigProvider } from "antd";
function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#0071c2",
          },
        }}
      >
        <Report />
      </ConfigProvider>
    </>
  );
}

export default App;
