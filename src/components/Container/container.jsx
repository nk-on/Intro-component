import { useState } from 'react';
import Input from './Input/Input';
export default function Container() {
  const [inputFields, setInputFields] = useState([
    { id: '0', text: '', isEmpty: false },
    { id: '1', text: '', isEmpty: false },
    { id: '2', text: '', isEmpty: false },
    { id: '3', text: '', isEmpty: false },
  ]);
  function setErrorClass(idx) {
    return `w-full h-[56px] rounded-[5px] pl-[25px] ${
      inputFields[idx].isEmpty
        ? 'border border-red-500'
        : 'border border-black-500'
    }`;
  }
  function setText(inputField) {
    if (inputField.id === event.target.id) {
      inputField.text = event.target.value;
    }
    return inputField;
  }
  const inputArr = [
    { id: 0, name: "firstName",type:"text" },
    { id: 1, name: "lastName",type:"text" },
    { id: 2, name: "email",type:"email" },
    { id: 3, name: "password",type:"password" }
  ];
  return (
    <div className="flex flex-col justify-center  gap-3 w-[70%]   md:w-[40%]">
      <div className="w-full h-[60px] md:w-[540px]   bg-[#5E54A4]">
        <p className="text-white flex justify-center items-center h-full shadow-button-shadow">
          Try it free 7 days then $20/mo. thereafter
        </p>
      </div>
      <div className="w-full  h-[474px] md:w-[540px]  shadow-container-shadow bg-white">
        <form
          className="flex gap-[20px] flex-col justify-center items-center w-full h-full"
          onSubmit={(e) => {
            e.preventDefault();
            let allCorrect = true;
            setInputFields(
              inputFields.map((inputField) => {
                if (inputField.text === '') {
                  inputField.isEmpty = true;
                  allCorrect = false;
                } else {
                  inputField.isEmpty = false;
                }
                return inputField;
              })
            );
            if (allCorrect) {
              setInputFields([
                { id: '0', text: '', isEmpty: false },
                { id: '1', text: '', isEmpty: false },
                { id: '2', text: '', isEmpty: false },
                { id: '3', text: '', isEmpty: false },
              ]);
            }
          }}
        >
          {
          inputArr.map((inputElement)=>{
            const inputProps = {
              inputFields: inputFields,
              setInputFields: setInputFields,
              setText: setText,
              setErrorClass: setErrorClass,
              id: inputElement.id,
              name: inputElement.name,
              type: inputElement.type,
            };
            return <Input key={inputElement.id} {...inputProps}/>
          })
          }
          <button
            className="bg-[#38CC8B] w-[90%] h-[56px] rounded-[5px] shadow-xbutton-shadow"
            type="sumbmit"
          >
            CLAIM YOUR FREE TRIAL
          </button>
        </form>
      </div>
    </div>
  );
}
