import { useRef, useState } from "react";
import { FaCopy } from "react-icons/fa6";
import { Toast } from "../components";

const passwordcopy = () => {
  //   const { password, setPassword } = usePassword();
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };
  const copyPassword = () => {
    if (passwordRef.current) {
      const password = passwordRef.current.innerText;
      navigator.clipboard.writeText(password);
      handleShowToast();
    }
  };
  return (
    <div className="max-w-md mx-auto mt-0 p-6  rounded-lg shadow-lg flex  items-center justify-start gap-4">
      <p ref={passwordRef}>okoko</p>
      <button
        title="Copy Password"
        onClick={copyPassword}
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
