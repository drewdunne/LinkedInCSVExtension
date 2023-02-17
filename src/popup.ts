import exportLinkedInCompanyEmployees from './linkedIn';

const button = document.getElementById("download-button");

button?.addEventListener("click", async() => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const injection = {
    target: { tabId: tab.id ? tab.id : -1 },
    func: exportLinkedInCompanyEmployees,
    args: [],
  }

  chrome.scripting.executeScript(injection)
});
