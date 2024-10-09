import { Route, Routes } from "react-router-dom";
import { IRouterType } from "./types/types";
import { Suspense } from "react";
import { PAGE_DATA } from "./utils/pageData";
import LoadingPage from "./pages/Loading";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const renderRoutes = (routes: IRouterType[]) => {
  return routes.map(({ title, path, element, children = [] }: IRouterType) => (
    <Route key={title} path={path} element={element}>
      {children.length > 0 && renderRoutes(children)}
    </Route>
  ));
};

export const PageRouter = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ToastContainer position='bottom-left'/>
      <Routes>{renderRoutes(PAGE_DATA)}</Routes>
    </Suspense>
  );
};

const App = () => {
  return <PageRouter />;
};

export default App;