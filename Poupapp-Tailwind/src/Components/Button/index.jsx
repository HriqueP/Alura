export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="flex items-center gap-2 text-neutral-text px-3 py-2 border rounded-3xl hover:cursor-pointer hover:opacity-75"
    >
      {children}
    </button>
  );
};
