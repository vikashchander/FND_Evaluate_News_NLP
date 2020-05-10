import {isInputValid} from '../inputChecker';

describe("check url input validation", () => {
    test('It return invalid url Inputs', () => {
        const urls =["google","name","://www.google.com","htt://www.google.com"]
        urls.forEach(data=>{
            expect(isInputValid(data)).toBeFalsy();
        })
        
      });
      
      test('It return valid url Output', () => {
        const urls =["https://www.google.com","http://www.google.com","www.google.com"]
        urls.forEach(data=> {
            expect(isInputValid(data)).toBeTruthy();
        })
      });
  });


