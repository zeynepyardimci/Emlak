import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`border-b py-3 transition-all duration-300 ${
        isOpen ? "bg-green-100" : "hover:bg-navbar"
      }`}>
      <button
        className="w-full text-left text-green-800 font-semibold focus:outline-none flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}>
        {question}
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600 transition-all duration-300">{answer}</p>}
    </div>
  );
};

export default FAQItem;

