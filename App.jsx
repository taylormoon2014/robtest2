
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LAMMappMap from "./components/LAMMappMap";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|lammapp-map)">
          <LAMMappMap {...lAMMappMapData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const mapNav2Data = {
    className: "map-nav-1",
};

const mapNav3Data = {
    className: "map-nav-2",
};

const lAMMappMapData = {
    group1469: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1468-1@1x.png",
    group1467: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1466@1x.png",
    group1459: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1458-1@1x.png",
    group1336: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/group-1332@1x.png",
    group1340: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/group-1339-1@1x.png",
    rectangle1085: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/rectangle-1085@1x.png",
    rectangle1084: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec73a75a67d7b52e19e69a/img/map2-parking1@1x.png",
    map: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/map@1x.png",
    lamminfowindow: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec73a75a67d7b52e19e69a/img/group-49-1@1x.png",
    group1326: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/group-1325-1@1x.png",
    group53: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/group-1324@1x.png",
    group1327: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/group-1324-1@1x.png",
    group1345: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/group-1341@1x.png",
    group1461: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/group-1348-1@1x.png",
    group1354: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/group-1350@1x.png",
    group1463: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec7824522f5ce924c00f62/img/group-1357-1@1x.png",
    group1473: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1472-10@1x.png",
    group1474: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1472-10@1x.png",
    group1475: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1472-10@1x.png",
    group1476: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1472-10@1x.png",
    group1477: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1472-10@1x.png",
    group1478: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1472-10@1x.png",
    group1479: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1472-10@1x.png",
    group1480: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1472-10@1x.png",
    group1452: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1451@1x.png",
    group1454: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1453@1x.png",
    group1455: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1451-1@1x.png",
    group1456: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1451-2@1x.png",
    group1471: "https://anima-uploads.s3.amazonaws.com/projects/61ec70ef59085a627177a19a/releases/61ec827b522f5ce924c00f77/img/group-1470@1x.png",
    mapNav1Props: mapNav2Data,
    mapNav2Props: mapNav3Data,
};

