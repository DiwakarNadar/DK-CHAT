import React,{Suspense, lazy} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProtectRoute from "./components/styles/auth/ProtectRoute";
import { LayoutLOader } from "./components/styles/layout/Loaders";

const Home=lazy(()=>import("./pages/Home"));
const Login=lazy(()=>import("./pages/Login"));
const Chat=lazy(()=>import("./pages/Chat"));
const Groups=lazy(()=>import("./pages/Groups"));
const NotFound=lazy(()=>import("./pages/NotFound"));
let user=true;
function App() {
  return (
    
    <BrowserRouter>
    <Suspense fallback={<LayoutLOader/>}>
    <Routes>
      <Route element={<ProtectRoute  user={user}/>}>
      <Route path="/" element={<Home />}/>
      <Route path="/chat/:chatId" element={<Chat />}/>
      <Route path="/groups" element={<Groups />}/>
      </Route>
      <Route path="/login" element={<ProtectRoute  user={!user} redirect="/">
      <Login />
      </ProtectRoute>}/>
  
      <Route path="*" element={<NotFound />}/>

    </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App
