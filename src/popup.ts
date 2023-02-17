import exportLinkedInCompanyEmployees from './linkedIn';

console.log("loaded popup.js")

const button = document.getElementById("download-button");

button?.addEventListener("click", async() => {
  console.log("clicked!")
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const injection = {
    target: { tabId: tab.id ? tab.id : -1 },
    func: exportLinkedInCompanyEmployees,
    args: [],
  }

  chrome.scripting.executeScript(injection)
});