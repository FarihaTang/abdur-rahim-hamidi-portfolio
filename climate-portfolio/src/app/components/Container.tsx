// components/Container.tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        w-full 
        md:w-2/3 
        px-6 md:px-12 
        py-16 
        space-y-24 
        max-w-3xl
      "
    >
      {children}
    </div>
  );
}
