import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { Toast } from "../components";

interface PasswordCopyProps {
  password: string;
}
const passwordcopy: React.FC<PasswordCopyProps> = ({ password }) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };
  const copyPassword = (elementId: string) => {
    // Get the element by its ID
    const element = document.getElementById(elementId);

    if (element) {
      // Create a temporary textarea
      const textarea = document.createElement("textarea");
      textarea.value = element.textContent || ""; // Get text content
      document.body.appendChild(textarea);
      textarea.select(); // Select the text
      document.execCommand("copy"); // Copy the text to clipboard
      document.body.removeChild(textarea); // Remove the textarea

      // Optionally notify the user
      handleShowToast();
    } else {
      console.error("Element not found");
    }
  };
  return (
    <div className="max-w-md mx-auto mt-0 p-6  rounded-lg flex  items-center justify-start gap-4">
      <p ref={passwordRef} id="pass" className=" border-b-2 border-primary">
        {password}
      </p>
      <button
        title="Copy Password"
        onClick={() => copyPassword(passwordRef.current?.id || "")}
        className="flex  items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none "
      >
        Copy Password
        <span>
          <FaCopy />
        </span>
      </button>
      {showToast && (
        <Toast
          message="Password Copied to Clipboard!"
          duration={3000}
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
};

export default passwordcopy;
