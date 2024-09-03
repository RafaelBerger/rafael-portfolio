import "./button.scss";

interface ButtonProps {
  children: string;
  link: string;
}

export default function Button({ children, link }: ButtonProps) {
  return (
    <button className="button">
      <a href={link} target="_blank">
        {children}
      </a>
    </button>
  );
}
