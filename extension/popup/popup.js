const btnPrompt = document.querySelector("#btn-prompt");
const btnRender = document.querySelector("#btn-render");
const [currentTab] = await chrome.tabs.query ({active: true, currentWindow: true})

btnPrompt.addEventListener("click", async () => {
    await chrome.tabs.sendMessage(currentTab.id, {action: "PROMPT"})
});

btnRender.addEventListener("click", async () => {
    await chrome.tabs.sendMessage(currentTab.id, {action: "RENDER"})
})

