import React from "react";
import { ApplicationConstant } from "../constant/applicationConstant";
import { useRoutes } from "react-router-dom";
import HomePage from "../views/Home//homePage";
import CommitePage from "../views/commite/commite";
import Publication from "../views/Publication/publication";
import RegistrationPage from "../views/Registration/registration";
import ContactUsPage from "../views/ContactUs/contactUs";
import ImpdatePage from "../views/ImpDates/impdate";
import PageNotFount from "../views/pageNotFound";

const Router = () => {
  return useRoutes([
    {
      path: ApplicationConstant.HOME_PAGE_PATH,
      element: <HomePage />,
    },
    {
      path: ApplicationConstant.COMMITE_PAGE_PATH,
      element: <CommitePage />,
    },
    {
      path: ApplicationConstant.PUBLICATION_PAGE_PATH,
      element: <Publication />,
    },
    {
      path: ApplicationConstant.REGISTRATION_PAGE_PATH,
      element: <RegistrationPage />,
    },
    {
      path: ApplicationConstant.CONTACTUS_PAGE_PATH,
      element: <ContactUsPage />,
    },
    {
      path: ApplicationConstant.IMPDATES_PAGE_PATH,
      element: <ImpdatePage />,
    },
    {
      path: "*",
      element: <PageNotFount />,
    },
  ]);
};

export default Router;
