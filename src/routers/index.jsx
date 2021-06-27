import { BrowserRouter, Route } from "react-router-dom";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Route path="/">Home</Route>
    </BrowserRouter>
  );
};

export default RootRouter;
