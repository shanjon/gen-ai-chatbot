import logo from '../logo.svg';
import '../App.css';
import TopNavigation from "../components/TopNav";
import SideNav from "../components/SideNav";
import ContentLayout from "../components/ContentLayout";
import ChatBot from "../components/ChatBot";
import TextArea from "../components/TextArea";
import {
  Button,
  AppLayout
} from "@cloudscape-design/components";

// Styles
import "@cloudscape-design/global-styles/index.css"

function ChatPage() {
  return (
    <div>
    <TopNavigation />
    <AppLayout
      navigation={<SideNav/>}
      content={<ContentLayout />}/>
    </div>
  );
}

export default ChatPage;
