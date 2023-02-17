import {registerButtonHandler} from '../dist/popup'

chrome.runtime.onInstalled.addListener( () => {
  console.log("Hello from background!")
}
);
