import styles from "./page.module.css";
import   {placeholdersEng, placeholdersBg } from "./placeholder";
import {ChangeLanguage, Handler} from "../language-setting";

function Spit(){
return <div>{placeholdersBg.About}</div>;
}
export default function AboutPage() {
  return <Spit />;
  
}
