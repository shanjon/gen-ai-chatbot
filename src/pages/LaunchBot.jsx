import logo from '../logo.svg';
import '../App.css';
import {
    Button,
    AppLayout,
    SplitPanel
    } from "@cloudscape-design/components"
import TopNavigation from "../components/TopNav";
import SideNav from "../components/SideNav";
import ContentLayout from "../components/ContentLayout";
import ChatBot from "../components/ChatBot";
import TextArea from "../components/TextArea";
import Wizard from "../components/Wizard";


// Styles
import "@cloudscape-design/global-styles/index.css"

function LaunchBot() {
  return (
    <div>
    <TopNavigation />
    <AppLayout
      navigation={<SideNav/>}
      content={<Wizard />} />
    </div>
  );
}

export default LaunchBot;
