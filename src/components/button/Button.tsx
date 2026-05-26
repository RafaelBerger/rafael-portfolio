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
    <button className="px-6 py-2 sm:px-5 sm:py-1.5 md:px-6 md:py-2 lg:px-7 lg:py-2.5 xl:px-8 xl:py-3 border-2 border-cyan-accent rounded-lg transition-all duration-250 hover:bg-cyan-accent hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 text-white no-underline sm:text-sm md:text-base lg:text-lg xl:text-xl">
      <a
        href={href}
        target="_blank"
        download={isDownload}
        className="text-white no-underline"
      >
        {children}
      </a>
    </button>
  );
}
