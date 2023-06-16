type Props = {
  children: React.ReactNode;
  legend?: string;
  width?: string;
};

export default function Fieldset({ children, legend, width }: Props) {
  const css = ["border-2", "rounded", "p-6"];

  width ? css.push(width) : css.push("w-full");

  return (
    <fieldset className={css.join(" ")}>
      {legend && (
        <legend className="text-lg font-bold pr-3 pl-3"> {legend} </legend>
      )}
      {children}
    </fieldset>
  );
}
