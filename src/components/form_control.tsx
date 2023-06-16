type Props = {
  children: React.ReactNode;
  labelText?: string;
  labelFor: string;
};

export default function FormControl({ labelFor, labelText, children }: Props) {
  const label = labelText || labelFor; // TODO: capitalize

  return (
    <div className="flex flex-row gap-2 items-center mb-1">
      <label htmlFor={labelFor} className="font-semibold w-1/4 text-right">
        {label}:
      </label>
      <div>{children}</div>
    </div>
  );
}
