const postObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        const postText = mutation.target.textContent;
        const regex = /->(.+)<-/g;
        const match = regex.exec(postText);
        if (match) {
            const text = match[1];
            // TODO: Send the text to ChatGPT and replace it with the response
        }
    });
});

const postTextArea = document.querySelector("[data-test-id='create-post-editor']");
const apiUrl = 'https://api.chatgpt.com/generate';
const apiKey = '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';
if (postTextArea) {
    postObserver.observe(postTextArea, { childList: true, characterData: true });
    

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer', ${ apiKey }
},
body: JSON.stringify({ prompt: text })
};

fetch(apiUrl, requestOptions)
    .then(response => response.json())
    .then(data => {
        const responseText = data.choices[0].text.trim();
        // TODO: Replace the original text with the response text
    })
    .catch(error => console.error(error));
  }

const range = document.createRange();
range.selectNodeContents(textNode);
range.deleteContents();
range.insertNode(document.createTextNode(responseText));
range.collapse(false);
const selection = window.getSelection();
selection.removeAllRanges();
selection.addRange(range);