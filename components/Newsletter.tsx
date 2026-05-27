export default function Newsletter() {
  return (
    <section className="py-16 bg-blush">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl text-gold mb-6">Join Our Newsletter</h2>
        <p className="text-gray-700 mb-6">Be the first to know about new arrivals, exclusive offers, and luxury beauty tips.</p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-6 py-3 rounded-full border border-gold focus:outline-none focus:ring-2 focus:ring-gold flex-1"
          />
          <button
            type="submit"
            className="bg-gold text-white px-8 py-3 rounded-full font-body hover:bg-opacity-90 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
