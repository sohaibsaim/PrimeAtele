import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import DashboardView from "../../views/dashboard.view";
import LoginView from "../../views/login.view";
import DashboardLayout from '../layout/dashboard.layout';
import AddCustomer from '../../views/addCustomer.view';
import CreateView from '../../views/create.view';
import Logout from '../logout';
const router = createBrowserRouter([
  {
    path:'/',
    element:<DashboardLayout/>,
    children:[
      {
          path: "/",
          element: <DashboardView />,        
      },
      {
          path: "/logout",
          element: <Logout />,        
      },
      {
          path: "/add-customer",
          element: <AddCustomer />,        
      }
    ],
    errorElement: <><h4>404</h4></>,
  },
  {
    path: "/login",
    element: <LoginView />,
    errorElement: <><h4>404</h4></>,
  },
  {
    path: "/create",
    element: <CreateView />,
    errorElement: <><h4>404</h4></>,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
