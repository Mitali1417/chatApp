import React from "react";
import ChatSection from "./components/ChatSection";
import { styles } from "./style";

const App = () => {
  return (
    <div className={`${styles.flexCenter} bg-gradient-to-br from-primary to-primary/0 w-full min-h-[100vh] overflow-hidden `}>
      <ChatSection />
    </div>
  );
};

export default App;
