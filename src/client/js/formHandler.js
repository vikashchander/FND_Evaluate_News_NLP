const resultsHeader = document.querySelector("#results-heading");
const resultsContainer = document.querySelector("#results");

export const handleSubmitBtn = (url, loadingBtn, header = resultsHeader, container = resultsContainer) => {
    console.log({url})
    return fetch("/data", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    })
      .then(res => res.json())
      .then(({ polarity, subjectivity, text }) => {
        const polarityElem = document.createElement("p");
        const subjectivityElem = document.createElement("p");
  
        polarityElem.textContent = `Polarity: ${polarity}`;
        subjectivityElem.textContent = `Subjectivity: ${subjectivity}`;
  
        header.textContent = "Form Results:";
        container.innerHTML = `<p>${text}</p>`;
  
        container.insertAdjacentElement("afterbegin", subjectivityElem);
        container.insertAdjacentElement("afterbegin", polarityElem);
  
        loadingBtn.value = "submit";
      })
      .catch(e => console.error(e));
  };