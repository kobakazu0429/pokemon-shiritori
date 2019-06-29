import React from "react";
import { Switch, Route } from "react-router-dom";

import Index from "@/Pages/Index";
import Shiritori from "@/Pages/Shiritori";

export interface IShiritori {
  keyword: string;
}

export default () => (
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/shiritori/:keyword" component={Shiritori} />
  </Switch>
);
