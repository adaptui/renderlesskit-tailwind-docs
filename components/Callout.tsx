import React from "react";

const themes = {
  default:
    "bg-orange-50 border border-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-400 dark:border-orange-400 dark:bg-opacity-20 dark:border-opacity-30",
  error:
    "bg-red-100 border border-red-200 text-red-900 dark:text-red-200 dark:bg-red-900 dark:bg-opacity-30 dark:border-opacity-30",
  warning:
    "bg-yellow-50 border border-yellow-100 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30",
};

interface CalloutProps {
  /** Callout Theme default to 'default'  */
  type?: keyof typeof themes;

  /** default emoji 💡*/
  emoji: string;
}

export const Callout: React.FC<CalloutProps> = props => {
  const { children, type = "default", emoji = "💡" } = props;

  return (
    <div className={`${themes[type]} callout mt-6 flex rounded-lg`}>
      <div
        className="select-none py-2 pl-3 pr-2 text-xl"
        style={{
          fontFamily:
            '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        }}
      >
        {emoji}
      </div>
      <div className="py-2 pr-4">{children}</div>
    </div>
  );
};

export default Callout;
