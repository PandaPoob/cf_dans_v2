function ButtonLink({
  label,
  url,
  external,
}: {
  label: string;
  url: string;
  external?: boolean;
}) {
  return (
    <a
      className="bg-accent text-primary flex items-center justify-center rounded-xs w-auto py-2 px-6 text-md font-alt font-medium transition-colors duration-200 hover:bg-accent-dark"
      href={url}
      {...(external && { target: "_blank" })}
    >
      {label}
    </a>
  );
}

export default ButtonLink;
