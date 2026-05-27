export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gold shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-display text-2xl text-gold tracking-wide">Élégance</span>
        <ul className="flex gap-8 font-body text-lg text-gray-700">
          <li className="hover:text-gold transition-colors cursor-pointer">Shop</li>
          <li className="hover:text-gold transition-colors cursor-pointer">About</li>
          <li className="hover:text-gold transition-colors cursor-pointer">Contact</li>
          <li className="hover:text-gold transition-colors cursor-pointer">Cart</li>
        </ul>
      </div>
    </nav>
  );
}
