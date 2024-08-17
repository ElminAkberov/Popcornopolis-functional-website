import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useLocation, } from 'react-router-dom';
import ShopLayout from './components/ShopPopcorn/ShopLayout';
import Main from './components/MainPage/Main';
import Create from './components/CreatePages/Create';
import Create2 from './components/CreatePages/Create2';
import Create3 from './components/CreatePages/Create3';
import ShopMain from './components/ShopPopcorn/ShopMain';
import DoubleDrizzle from './components/ShopPopcorn/DoubleDrizzle';
import ExploreLayout from './components/Explore/ExploreLayout';
import Explore from './components/Explore/Explore';
import Happiness from './components/Explore/Happiness';
import Mushroom from './components/Explore/Mushroom';
import Gourmet from './components/Explore/Gourmet';
import CustomerCare from './components/FooterContent/CustomerCare';
import About from './components/FooterContent/About';
import Faq from './components/FooterContent/Faq'
import Tastings from './components/FooterContent/Tastings';
import BulkOrders from './components/FooterContent/BulkOrders';
import Shipping from './components/FooterContent/Shipping';
import Contact from './components/FooterContent/Contact';
import CaSupply from './components/FooterContent/CaSupply';
import Preferences from './components/FooterContent/Preferences';
import Ads from './components/FooterContent/Ads';
import Accessibility from './components/FooterContent/Accessibility';
import Covid from './components/FooterContent/Covid';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Fundraising from './components/MainPage/Fundraising';
import AllFlavors from './components/MainPage/AllFlavors';
import CorporateGift from './components/MainPage/CorporateGift';
import Valentines from './components/Explore/Valentines';
import Earth from './components/Explore/Earth';
import MothersDay from './components/Explore/MothersDay';
import Congrats from './components/Explore/Congrats';
import FatherDay from './components/Explore/FathersDay';
import Hallowen from './components/Explore/Hallowen';
import Easter from './components/Explore/Easter';
import NewYear from './components/Explore/NewYear';
import Christmas from './components/Explore/Christmas';
import Login from './components/LoginMenu/Login';
import ContextProvider from './context/ContextProvider';
import Edit from './components/Edit';
import Checkout from './components/ShopPopcorn/Checkout';
import SignUp from './components/LoginMenu/SignUp';
import AccountMenu from './components/LoginMenu/AccountMenu';
import Order from './components/LoginMenu/Order';
import TermsOfUse from './components/FooterContent/TermsOfUse';
import PrivacyPolicy from './components/FooterContent/PrivacyPolicy';
import Subs from './components/LoginMenu/Subs';
import Address from './components/LoginMenu/Address';
import Billing from './components/LoginMenu/Billing';
import Shippings from './components/LoginMenu/Shipping';
import NewAddress from './components/LoginMenu/NewAddress';
import Details from './components/LoginMenu/Details';
import MainMenu from './components/LoginMenu/MainMenu';
import LoginAuth from './components/LoginMenu/LoginAuth';
import Loading from './Loading';
import Layout from './Layout';


const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { path: "/", element: <Main /> },
      { path: "/create-your-own", element: <Create /> },
      { path: "/create-your-own/build-quantity/:pathName", element: <Create2 /> },
      { path: "/shop/build-your-own-mini/:pathName/:quantity", element: <Create3 /> },
      {
        path: "/shop",
        element: <ShopLayout />,
        children: [
          { path: "", element: <ShopMain /> },
          { path: "product-flavor/:pathName", element: <Page1 /> },
          { path: "product/:names", element: <Page2 /> },
          { path: ":name", element: <Page3 /> },
          { path: "bagged-popcorn/double-drizzle-popcorn-bag/", element: <DoubleDrizzle /> },
        ]
      },
      {
        path: "/explore", element: <ExploreLayout />, children: [
          { path: "", element: <Explore /> },
        ]
      },

      { path: "/cart/", element: <Edit /> },
      { path: "/checkout/", element: <Checkout /> },
      { path: "/fundraising/", element: <Fundraising /> },

      {
        path: "/my-account/", element: <LoginAuth><AccountMenu /></LoginAuth>, children: [
          { path: "/my-account/", element: <MainMenu /> },
          { path: "/my-account/order", element: <Order /> },
          { path: "/my-account/subscriptions", element: <Subs /> },
          { path: "/my-account/edit-account", element: <Details /> },
          { path: "/my-account/edit-address", element: <Address /> },
          { path: "/my-account/edit-address/billing", element: <Billing /> },
          { path: "/my-account/edit-address/shipping/:id", element: <Shippings /> },
          { path: "/my-account/new-address", element: <NewAddress /> },

        ]
      },
      { path: "/register/", element: <SignUp /> },
      { path: "/terms-of-use/", element: <TermsOfUse /> },
      { path: "privacy-policy/", element: <PrivacyPolicy /> },
      { path: "/corporate-gifts/", element: <CorporateGift /> },
      { path: "popcorn-flavors/", element: <AllFlavors /> },
      { path: "/happiness", element: <Happiness /> },
      { path: "/mothers-day/", element: <MothersDay /> },
      { path: "/fathers-day/", element: <FatherDay /> },
      { path: "/easter/", element: <Easter /> },
      { path: "/winter-holiday-gift-guide/", element: <NewYear /> },
      { path: "/christmas/", element: <Christmas /> },
      { path: "/halloween/", element: <Hallowen /> },
      { path: "/congrats-grads/", element: <Congrats /> },
      { path: "/valentines/", element: <Valentines /> },
      { path: "/earth-day/", element: <Earth /> },
      { path: "/mushroom-vs-butterfly-popcorn", element: <Mushroom /> },
      { path: "gourmet-popcorn/", element: <Gourmet /> },
      { path: "customer-care/", element: <CustomerCare /> },
      { path: "about/", element: <About /> },
      { path: "faq/", element: <Faq /> },
      { path: "tastings/", element: <Tastings /> },
      { path: "bulk-orders/", element: <BulkOrders /> },
      { path: "shipping-information/", element: <Shipping /> },
      { path: "contact-us/", element: <Contact /> },
      { path: "ca-supply-chain/", element: <CaSupply /> },
      { path: "privacy-preferences/", element: <Preferences /> },
      { path: "about-our-ads/", element: <Ads /> },
      { path: "accessibility/", element: <Accessibility /> },
      { path: "/covid-19-response/", element: <Covid /> },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
);
