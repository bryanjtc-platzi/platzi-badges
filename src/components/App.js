import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import BadgeDetails from "../pages/BadgeDetailsContainer";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import BadgeEdit from "../pages/BadgeEdit";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/badges" element={<Badges />} />
          <Route exact path="/badges/new" element={<BadgeNew />} />
          <Route exact path="/badges/:badgeId/edit" element={<BadgeEdit />} />
          <Route exact path="/badges/:badgeId" element={<BadgeDetails />} />

          <Route element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
