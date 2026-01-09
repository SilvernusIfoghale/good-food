import React from "react";

interface ViewReportButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const ViewReportButton: React.FC<ViewReportButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`text-[12px] text-primary-active-text font-medium bg-button-bg border-button-border rounded-[5px] h-8 w-27.25 text-center hover:bg-white border-[0.5px] hover:border-gray-300 transition-colors cursor-pointer px-3 py-1.5 ${
        props.className || ""
      }`}
    >
      View Report
    </button>
  );
};
