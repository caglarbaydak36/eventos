type InputProps = {
  label: string;
  type: string;
  placeholder: string;
};

export default function Input({
  label,
  type,
  placeholder,
}: InputProps) {
  return (
    <div className="mb-5 text-left">
      <label className="mb-2 block font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
      />
    </div>
  );
}