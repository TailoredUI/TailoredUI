import React from "react";

interface ShowCodeButtonProps {
  onClick: () => void;
}

const ShowCodeButton: React.FC<ShowCodeButtonProps> = ({ onClick }) => {
  return (
    <button className="text-blue-500 underline mt-2" onClick={onClick}>
      Show Code
    </button>
  );
};

export default ShowCodeButton;
