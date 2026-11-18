import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-baseline pb-4">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight text-ink">{title}</h2>
      {linkHref && linkTitle && (
        <Link
          href={linkHref}
          className="text-sm font-bold text-muted hover:text-accent transition-colors"
        >
          {linkTitle}
        </Link>
      )}
    </div>
  );
};

export default Header;
