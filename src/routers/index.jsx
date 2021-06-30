import { BrowserRouter, Route } from "react-router-dom";
import {
  SignPage,
  EmotionPage,
  MainPage,
  DetailPage,
  MyPage,
  EditorPage,
} from "pages";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <SignPage />
      </Route>
      <Route exact path="/emotion">
        <EmotionPage />
      </Route>
      <Route exact path="/main">
        <MainPage />
      </Route>
      <Route exact path="/sentence-detail">
        <DetailPage />
      </Route>
      <Route exact path="/sentence-detail/from-emotion">
        <DetailPage fromEmotion />
      </Route>
      <Route exact path="/sentence-detail/funding">
        <DetailPage isFunding />
      </Route>
      <Route exact path="/mypage">
        <MyPage />
      </Route>
      <Route exact path="/editor">
        <EditorPage />
      </Route>
    </BrowserRouter>
  );
};

export default RootRouter;
