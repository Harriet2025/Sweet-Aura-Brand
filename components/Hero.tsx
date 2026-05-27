export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] bg-blush py-16 px-4 text-center">
      <h1 className="font-display text-5xl md:text-7xl text-gold mb-4 drop-shadow-lg">Luxury Perfume & Beauty</h1>
      <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-xl mx-auto">Discover the art of scent and beauty. Curated for the modern woman who desires elegance, sophistication, and allure.</p>
      <button className="bg-gold text-white font-body px-8 py-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all text-lg">Shop Now</button>
      <div className="absolute right-8 bottom-0 w-32 h-32 bg-nude rounded-full blur-2xl opacity-60 -z-10" />
      <div className="absolute left-8 top-0 w-24 h-24 bg-cream rounded-full blur-2xl opacity-50 -z-10" />
    </section>
  );
}
