export default function Hello({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <p className="text-2xl font-medium text-black">{text}</p>
    </div>
  );
}
