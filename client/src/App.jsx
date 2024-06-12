import React,{Suspense, lazy} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProtectRoute from "./components/styles/auth/ProtectRoute";
import { LayoutLOader } from "./components/styles/layout/Loaders";


const Home=lazy(()=>import("./pages/Home"));
const Login=lazy(()=>import("./pages/Login"));
const Chat=lazy(()=>import("./pages/Chat"));
const Groups=lazy(()=>import("./pages/Groups"));
const NotFound=lazy(()=>import("./pages/NotFound"));
const AdminLogin=lazy(()=>import("./pages/admin/AdminLogin"));
const Dashboard=lazy(()=>import("./pages/admin/Dashboard"));
const UsersManagement=lazy(()=>import("./pages/admin/UsersManagement"));
const ChatsManagement=lazy(()=>import("./pages/admin/ChatManagement"));
const GroupsManagement=lazy(()=>import("./pages/admin/GroupsManagement"));
const MessageManagement=lazy(()=>import("./pages/admin/MessageManagement"));
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
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/users-management" element={<UsersManagement />} />
      <Route path="/admin/chats-management" element={<ChatsManagement />} />
      <Route path="/admin/groups-management" element={<GroupsManagement />} />
      <Route path="/admin/messages-management" element={<MessageManagement />} />
      <Route path="*" element={<NotFound />}/>
     
    </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App
