"use client";

import { useFormStatus } from "react-dom";

function SubmitButton({ children, pendingLabel }) {
  const status = useFormStatus();
  return (
    <button
      disabled={status.pending}
      className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {status.pending ? pendingLabel : children}
    </button>
  );
}

export default SubmitButton;
