import React from "react";

import ToastsProvider from "../ToastsProvider/ToastsProvider";
import ToastPlayground from "../ToastPlayground";
import Footer from "../Footer";

function App() {
  return (
    <ToastsProvider>
      <ToastPlayground />
      <Footer />
    </ToastsProvider>
  );
}

export default App;
