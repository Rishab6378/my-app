import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './HomePage/HomePage';
import DisCover from './Discover/DisCover';
import DollAr from './Dollar/DollAr';
import DollarShop from './Dollar/DollarShop';
import WhatsNew from './HomePage/WhatsNew';
import WoMen from './Women/WoMen';
import ChiLd from './Child/ChiLd';
import AddToCart from './Dollar/AddToCart';
import AddToBag from './Dollar/AddToBag';
import AllWine from './HomePage/AllWines/AllWine';
import RedWine from './HomePage/RedWines/RedWine';
import WhiteWine from './HomePage/WhiteWines/WhiteWine';
import RoseWine from './HomePage/RoseWines/RoseWine';
import RieslingWine from './HomePage/Perfect-White-Wine/RieslingWine';
import ExredWine from './HomePage/Excellent-Red-Wine/ExredWine';
import AllAddToCart from './HomePage/AllWines/AllAddToCart';
import ExredAddToCart from './HomePage/Excellent-Red-Wine/ExredAddToCart';
import RieslingAddToCart from './HomePage/Perfect-White-Wine/RieslingAddToCart';
import RedAddToCart from './HomePage/RedWines/RedAddToCart';
import RoseAddToCart from './HomePage/RoseWines/RoseAddToCart';
import WhiteAddToCart from './HomePage/WhiteWines/WhiteAddToCart';
import WomenWine from './Women/womenshop/WomenWine';
import WomenAddToCart from './Women/womenshop/WomenAddToCart';
import TopWine1 from './Women/Topseller1/TopWine1';
import TopAddToCart1 from './Women/Topseller1/TopAddToCart1';
import TopWine2 from './Women/Topseller2/TopWine2';
import TopAddToCart2 from './Women/Topseller2/TopAddToCart2';
import TopWine3 from './Women/Topseller3/TopWine3';
import TopAddToCart3 from './Women/Topseller3/TopAddToCart3';
import TopWine4 from './Women/Topseller4/TopWine4';
import TopAddToCart4 from './Women/Topseller4/TopAddToCart4';
import ChildWine from './Child/ChildShop/ChildWine';
import ChildAddToCart from './Child/ChildShop/ChildAddToCart';
import Child1AddToCart from './Child/Child$$$/Child1AddToCart';
import PostFormat006 from './Child/PostFormat006';
import PostFormat001 from './Child/PostFormat001';
import PostFormat002 from './Child/PostFormat002';
import AllAddToBag from './HomePage/AllWines/AllAddToBag';
import ExredAddToBag from './HomePage/Excellent-Red-Wine/ExredAddToBag';
import RieslingAddToBag from './HomePage/Perfect-White-Wine/RieslingAddToBag';
import RedAddToBag from './HomePage/RedWines/RedAddToBag';
import RoseAddToBag from './HomePage/RoseWines/RoseAddToBag';
import WhiteAddToBag from './HomePage/WhiteWines/WhiteAddToBag';
import Child1AddToBag from './Child/Child$$$/Child1AddToBag';
import ChildAddToBag from './Child/ChildShop/ChildAddToBag';
import WomenAddToBag from './Women/womenshop/WomenAddToBag';
import TopAddToBag1 from './Women/Topseller1/TopAddToBag1';
import TopAddToBag2 from './Women/Topseller2/TopAddToBag2';
import TopAddToBag3 from './Women/Topseller3/TopAddToBag3';
import TopAddTobag4 from './Women/Topseller4/TopAddTobag4';
import WomenDesc from './Women/WomenDesc';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<HomePage></HomePage>}></Route>
          <Route path='/Discover' element={<DisCover></DisCover>}></Route>
          <Route path='/Dollar' element={<DollAr></DollAr>}></Route>
          <Route path='/newdetail' element={<WhatsNew></WhatsNew>}></Route>
          <Route path='/shop' element={<DollarShop></DollarShop>}></Route>
          <Route path='/women' element={<WoMen></WoMen>}></Route>
          <Route path='/child' element={<ChiLd></ChiLd>}></Route>
          <Route path='/added' element={<AddToCart></AddToCart>}></Route>
          <Route path='/addcart' element={<AddToBag></AddToBag>}></Route>
          <Route path='/all' element={<AllWine></AllWine>}></Route>
          <Route path='/red' element={<RedWine></RedWine>}></Route>
          <Route path='/white' element={<WhiteWine></WhiteWine>}></Route>
          <Route path='/rose' element={<RoseWine></RoseWine>}></Route>
          <Route path='/riesling' element={<RieslingWine></RieslingWine>}></Route>
          <Route path='/exred' element={<ExredWine></ExredWine>}></Route>
          <Route path='/allcart' element={<AllAddToCart></AllAddToCart>}></Route>
          <Route path='/exredcart' element={<ExredAddToCart></ExredAddToCart>}></Route>
          <Route path='/rieslingcart' element={<RieslingAddToCart></RieslingAddToCart>}></Route>
          <Route path='/redcart' element={<RedAddToCart></RedAddToCart>}></Route>
          <Route path='/rosecart' element={<RoseAddToCart></RoseAddToCart>}></Route>
          <Route path='/whitecart' element={<WhiteAddToCart></WhiteAddToCart>}></Route>
          <Route path='/womenwine' element={<WomenWine></WomenWine>}></Route>
          <Route path='/womendes' element={<WomenDesc></WomenDesc>}></Route>
          <Route path='/womencart' element={<WomenAddToCart></WomenAddToCart>}></Route>
          <Route path='/addwomencart' element={<WomenAddToBag></WomenAddToBag>}></Route>
          <Route path='/topwine1' element={<TopWine1></TopWine1>}></Route>
          <Route path='/top1' element={<TopAddToCart1></TopAddToCart1>}></Route>
          <Route path='/addtop1' element={<TopAddToBag1></TopAddToBag1>}></Route>
          <Route path='/topwine2' element={<TopWine2></TopWine2>}></Route>
          <Route path='/top2' element={<TopAddToCart2></TopAddToCart2>}></Route>
          <Route path='/addtop2' element={<TopAddToBag2></TopAddToBag2>}></Route>
          <Route path='/topwine3' element={<TopWine3></TopWine3>}></Route>
          <Route path='/top3' element={<TopAddToCart3></TopAddToCart3>}></Route>
          <Route path='/addtop3' element={<TopAddToBag3></TopAddToBag3>}></Route>
          <Route path='/topwine4' element={<TopWine4></TopWine4>}></Route>
          <Route path='/top4' element={<TopAddToCart4></TopAddToCart4>}></Route>
          <Route path='/addtop4' element={<TopAddTobag4></TopAddTobag4>}></Route>
          <Route path='/childwine' element={<ChildWine></ChildWine>}></Route>
          <Route path='/winechild' element={<ChildAddToCart></ChildAddToCart>}></Route>
          <Route path='/addwinechild' element={<ChildAddToBag></ChildAddToBag>}></Route>
          <Route path='/child1cart' element={<Child1AddToCart></Child1AddToCart>}></Route>
          <Route path='/addchild1' element={<Child1AddToBag></Child1AddToBag>}></Route>
          <Route path='/post006' element={<PostFormat006></PostFormat006>}></Route>
          <Route path='/post001' element={<PostFormat001></PostFormat001>}></Route>
          <Route path='/post002' element={<PostFormat002></PostFormat002>}></Route>
          <Route path='/addbag' element={<AllAddToBag></AllAddToBag>}></Route>
          <Route path='/addexred' element={<ExredAddToBag></ExredAddToBag>}></Route>
          <Route path='/addriesling' element={<RieslingAddToBag></RieslingAddToBag>}></Route>
          <Route path='/addred' element={<RedAddToBag></RedAddToBag>}></Route>
          <Route path='/addrose' element={<RoseAddToBag></RoseAddToBag>}></Route>
          <Route path='/addwhite' element={<WhiteAddToBag></WhiteAddToBag>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App