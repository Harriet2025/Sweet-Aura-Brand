export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl text-gold mb-10 text-center">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="bg-cream rounded-2xl p-8 shadow-md flex-1">
            <p className="text-lg italic mb-4">“The most elegant scents and beautiful packaging. I feel like royalty every time I order!”</p>
            <span className="font-display text-gold">— Sophia L.</span>
          </div>
          <div className="bg-cream rounded-2xl p-8 shadow-md flex-1">
            <p className="text-lg italic mb-4">“Fast shipping and the perfumes are divine. My new favorite beauty shop!”</p>
            <span className="font-display text-gold">— Amira K.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
