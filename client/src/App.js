import "./App.css";
import Layout from "./components/Layout";
import { Suspense } from "react";
import Website from "./pages/Website";
import Properties from "./components/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property";
// import UserDetailContext from "./context/UserDetailContext";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      {/* <UserDetailContext.Provider value={{ userDetails, setUserDetails }}> */}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      {/* </UserDetailContext.Provider> */}
    </div>
  );
}

export default App;
