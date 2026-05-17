export default function PageHeader({ emoji, title, subtitle }) {
  return (
    <div className="mb-6">
      <div className="text-3xl">{emoji}</div>
      <h1 className="mt-1 text-2xl md:text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-white/60 mt-1">{subtitle}</p>}
    </div>
  );
}
