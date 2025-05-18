function ButtonLink({ label, url }: { label: string; url: string }) {
  return (
    <a
      className="bg-accent text-primary flex items-center justify-center rounded-xs w-auto py-2 px-6 text-sm font-semibold"
      href={url}
    >
      {label}
    </a>
  );
}

export default ButtonLink;
