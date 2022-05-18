import React from "react";
import { Route, Routes } from "react-router-dom";
import BottomNav from "./BottomNav";
import ControlledAccordions from "./ControlledAccordions";
import Dashboard from "./Dashboard";
import GridLayout from "./GridLayout";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SkeletonExample from "./SkeletonExample";
import StickyHeadTable from "./StickyHeadTable";
import TableData from "./TableData";
import Tabs from "./Tabs";
import TypographyTypes from "./TypographyTypes";
import VerticalLinearStepper from "./VerticalLinearStepper";
import WidgetDashboard from "./WidgetDashboard";

export default function () {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/widget" element={<WidgetDashboard/>}/>
        <Route path="/nav" element={<BottomNav />} />
        <Route path="/type" element={<TypographyTypes />} />
        <Route path="/grid" element={<GridLayout />} />
        <Route path="/tablegrid" element={<TableData />} />
        <Route path="/table" element={<StickyHeadTable />} />
        <Route path="/tab" element={<Tabs />} />
        <Route path="/accordions" element={<ControlledAccordions />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/stepper" element={<VerticalLinearStepper />} />
        <Route path="/skeleton" element={<SkeletonExample />} />
      </Routes>
    </div>
  );
}
