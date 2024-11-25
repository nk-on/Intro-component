export default function Input({inputFields,setInputFields,setText,setErrorClass,id,name,type}) {
  return (
    <div className="w-[90%] mb-4">
      <input
        onChange={(event) => {
          setInputFields(inputFields.map(setText));
        }}
        id={id}
        value={inputFields[id].text}
        type={type}
        name={name}
        placeholder={name}
        className={setErrorClass(id)}
      />
      {inputFields[id].isEmpty && (
        <h3 className="absolute text-red-500 ">Input must not be Empty</h3>
      )}
    </div>
  );
}
