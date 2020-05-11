import { isInputValid } from "./inputChecker";
const polarity= document.getElementById('polarity');
const polConfidence= document.getElementById('polConfidence');
const subjectivity= document.getElementById('polConfidence');
const textData = document.getElementById('textData')

export function handleSubmitBtn(){
  let url = document.getElementById('url').value;
 // console.log(url);
  if(isInputValid(url)){
     polarity.innerHTML='';
     polConfidence.innerHTML='';
     subjectivity.innerHTML='';
     textData.innerHTML=''
     postData(url)
      .then(function(data){
        updateUI(data)
      })

  }

}

// Async POST
const postData = async(url = '') => {

  const response = await fetch('/data', {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "url": url }), // body data type must match "Content-Type" header        
  });

  try {
      const newData = await response.json();
      return newData
  } catch (error) {
      //console.log("error", error);
  }
}


function updateUI(data) {
  //console.log(data);
  polarity.innerHTML = `Polarity: ${data.polarity}`;
  polConfidence.innerHTML = `Polarity Confidence: ${data.polarity_confidence}`;
  subjectivity.innerHTML = `Subjectivity: ${data.subjectivity}`;
  textData.innerHTML = `Text: ${data.text}`;
}