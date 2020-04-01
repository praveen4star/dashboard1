/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Flight";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import SettingsInputAntennaIcon from '@material-ui/icons/SettingsInputAntenna';
// core components/views for Admin layout

import Flightlog from "views/Flightlog/flightlog.js";
import Maintenancereport from "views/maintaincereport/maintaincereport.js";
import Dailyreport from "views/Dailyreport/DailyReport.js";
// core components/views for RTL layout


const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Drone",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: "",
    layout: "/admin"
  },
  {
    path: "/flightlogs",
    name: "Flight Logs",
    rtlName: "ملف تعريفي للمستخدم",
    icon: ChevronRightIcon,
    component: Flightlog,
    layout: "/admin"
  },
  {
    path: "/dailyreport",
    name: "Daily Report",
    rtlName: "قائمة الجدول",
    icon: ChevronRightIcon,
    component: Dailyreport,
    layout: "/admin"
  },
  {
    path: "/maintenancereport",
    name: "Maintenance Report",
    rtlName: "طباعة",
    icon: ChevronRightIcon,
    component: "",
    layout: "/admin"
  },
  {
    path: "/inspectionreport",
    name: "Inspection Report",
    rtlName: "الرموز",
    icon: ChevronRightIcon,
    component: "",
    layout: "/admin"
  },
  {
    path: "/incidentreport",
    name: "Incident Report",
    rtlName: "خرائط",
    icon: ChevronRightIcon,
    component: "",
    layout: "/admin"
  },
  {
    path: "/Ecosystems",
    name: "Ecosystems",
    rtlName: "إخطارات",
    icon: SettingsInputAntennaIcon,
    component: "",
    layout: "/admin"
  },
  {
    path: "/ecosystems/flightlogs",
    name: "Flight Logs",
    rtlName: "ملف تعريفي للمستخدم",
    icon: ChevronRightIcon,
    component: "",
    layout: "/admin"
  },
  {
    path: "/ecosystems/dailyreport",
    name: "Daily Report",
    rtlName: "قائمة الجدول",
    icon: ChevronRightIcon,
    component: "",
    layout: "/admin"
  },
  {
    path: "/dashb",
    name: "Maintaince Report",
    rtlName: "لوحة القيادة",
    icon: ChevronRightIcon,
    component: Maintenancereport,
    layout: "/admin"
  },
  {
    path: "/ecosystems/inspectionreport",
    name: "Inspection Report",
    rtlName: "الرموز",
    icon: ChevronRightIcon,
    component: "",
    layout: "/admin"
  },
  {
    path: "/ecosystems/incidentreport",
    name: "Incident Report",
    rtlName: "خرائط",
    icon: ChevronRightIcon,
    component: "",
    layout: "/admin"
  }
];

export default dashboardRoutes;
