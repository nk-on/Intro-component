import { useState } from 'react';

export default function Container() {
  const [inputFields, setInputFields] = useState([
    { id: '0', text: '', isEmpty: false },
    { id: '1', text: '', isEmpty: false },
    { id: '2', text: '', isEmpty: false },
    { id: '3', text: '', isEmpty: false },
  ]);
  function setText(inputField) {
    if (inputField.id === event.target.id) {
      inputField.text = event.target.value;
    }
    return inputField;
  }
  function setErrorClass(idx) {
    return `w-full h-[56px] rounded-[5px] pl-[25px] ${
      inputFields[idx].isEmpty
        ? 'border border-red-500'
        : 'border border-black-500'
    }`;
  }
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
          <div className="w-[90%] mb-4">
            <input
              onChange={(event) => {
                setInputFields(inputFields.map(setText));
              }}
              id="0"
              value={inputFields[0].text}
              type="text"
              name="firstName"
              placeholder="First Name"
              className={setErrorClass(0)}
            />
            {inputFields[0].isEmpty && (
              <h3 className="absolute text-red-500 ">
                Input must not be Empty
              </h3>
            )}
          </div>
          <div className="w-[90%]  mb-4">
            <input
              onChange={(event) => {
                setInputFields(inputFields.map(setText));
              }}
              id="1"
              value={inputFields[1].text}
              type="text"
              name="lastName"
              placeholder="Last Name"
              className={setErrorClass(1)}
            />
            {inputFields[1].isEmpty && (
              <h3 className="absolute text-red-500">Input must not be Empty</h3>
            )}
          </div>
          <div className="w-[90%]  mb-4">
            <input
              onChange={(event) => {
                setInputFields(
                  inputFields.map((inputField) => {
                    if (inputField.id === event.target.id) {
                      inputField.text = event.target.value;
                    }
                    return inputField;
                  })
                );
              }}
              id="2"
              value={inputFields[2].text}
              type="email"
              name="email"
              placeholder="Email"
              className={setErrorClass(2)}
            />
            {inputFields[2].isEmpty && (
              <h3 className="absolute text-red-500">Input must not be Empty</h3>
            )}
          </div>
          <div className="w-[90%]  mb-4">
            <input
              onChange={(event) => {
                setInputFields(inputFields.map(setText));
              }}
              id="3"
              value={inputFields[3].text}
              type="password"
              name="password"
              placeholder="Password"
              className={setErrorClass(3)}
            />
            {inputFields[3].isEmpty && (
              <h3 className="absolute text-red-500">Input must not be Empty</h3>
            )}
          </div>
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
