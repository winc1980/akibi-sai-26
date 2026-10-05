import React from "react";

export default function DecoratedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  // $$decoratedWords$$だけレイアウトするコード
  const decoratedWords = ["「お鍋」", "わいわいなべぱ～てぃ～"];
  const splitTextInputs = text.split("$$");
  if (splitTextInputs.length === 0) {
    return <p className={className}>{text}</p>;
  }
  return (
    <p className={className}>
      {splitTextInputs.map((text, i) => {
        if (decoratedWords.includes(text)) {
          return (
            <span
              key={text + i}
              className="w-full text-center text-2xl font-black"
            >
              {text}
            </span>
          );
        } else {
          return <span key={text + i}>{text}</span>;
        }
      })}
    </p>
  );
}
