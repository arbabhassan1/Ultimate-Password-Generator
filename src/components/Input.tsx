import { useState } from "react";
import { generateStrongPassword } from "../constant/App";
import Passwordcopy from "./Passwordcopy";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [isInputEnabled, setIsInputEnabled] = useState(true);
  const [error, setError] = useState("");
  const [generatedPassword, setGeneratedPassword] = useState<string>(""); // Correctly typed as string

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value) {
      setError("");
    }
  };

  const handleSwitchChange = () => {
    setIsInputEnabled(!isInputEnabled);
    setInputValue("");
    setError("");
  };

  const handleSubmit = () => {
    if (!inputValue && isInputEnabled) {
      setError("This field is required.");
    } else {
      setError("");
      // Your submit logic here
      const password = generateStrongPassword(inputValue);
      setGeneratedPassword(password);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6  rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="switch" className="flex items-center cursor-pointer">
            <span className="text-white mr-2">Enable Rreferance</span>
            <div className="relative">
              <input
                type="checkbox"
                id="switch"
                className="sr-only text-black"
                checked={isInputEnabled}
                onChange={handleSwitchChange}
              />
              <div
                className={`block w-10 h-6 rounded-full ${
                  isInputEnabled ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform ${
                  isInputEnabled ? "translate-x-full bg-white" : "bg-white"
                }`}
              ></div>
            </div>
          </label>
        </div>

        <div className="mb-4">
          <input
            type="text"
            className={`w-full px-4 py-2 border  bg-transparent rounded-lg focus:outline-none ${
              isInputEnabled
                ? "border-primary focus:border-blue-500"
                : "border-gray-200 bg-gray-100 cursor-not-allowed"
            }`}
            value={inputValue}
            onChange={handleInputChange}
            disabled={!isInputEnabled}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
        >
          Generate
        </button>
      </div>
      <Passwordcopy password={generatedPassword} />
    </>
  );
};

export default Input;
