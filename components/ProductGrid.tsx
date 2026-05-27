const products = [
  {
    id: 1,
    name: 'Chanel No. 5 Eau de Parfum',
    price: '$135',
    image: '/images/chanel5.jpg',
  },
  {
    id: 2,
    name: 'Dior J’adore',
    price: '$120',
    image: '/images/jadore.jpg',
  },
  {
    id: 3,
    name: 'Sephora Collection Perfume',
    price: '$65',
    image: '/images/sephora.jpg',
  },
  {
    id: 4,
    name: 'Fenty Eau de Parfum',
    price: '$140',
    image: '/images/fenty.jpg',
  },
];

export default function ProductGrid() {
  return (
    <section className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl text-gold mb-10 text-center">Featured Perfumes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform group">
              <div className="w-40 h-56 bg-blush rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-display text-xl text-gray-900 mb-2">{product.name}</h3>
              <span className="text-gold font-semibold mb-2">{product.price}</span>
              <button className="bg-gold text-white px-6 py-2 rounded-full font-body hover:bg-opacity-90 transition-all">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
