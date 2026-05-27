export default function Footer() {
  return (
    <footer className="bg-white border-t border-gold py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-display text-xl text-gold">Élégance Parfum</span>
        <span className="text-gray-500">© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
}
