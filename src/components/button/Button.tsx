import "./button.scss";

interface ButtonProps {
  children: string;
  href?: string;
  isDownload?: boolean;
}

export default function Button({
  children,
  href,
  isDownload = false,
}: ButtonProps) {
  return (
    <button className="button">
      <a href={href} target="_blank" download={isDownload}>
        {children}
      </a>
    </button>
  );
}
