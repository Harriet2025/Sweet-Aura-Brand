import { useState } from 'react';

export default function CartUI() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-0 right-0 z-50">
      <button
        className="bg-gold text-white px-4 py-2 rounded-bl-2xl font-body shadow-lg hover:bg-opacity-90 transition-all"
        onClick={() => setOpen(!open)}
      >
        Cart
      </button>
      {open && (
        <div className="w-80 h-screen bg-white border-l border-gold shadow-2xl p-6 flex flex-col gap-4 animate-slideIn">
          <h2 className="font-display text-2xl text-gold mb-4">Your Cart</h2>
          <div className="flex-1 flex flex-col items-center justify-center text-gray-400">Cart is empty</div>
          <button className="bg-gold text-white px-6 py-2 rounded-full font-body hover:bg-opacity-90 transition-all mt-4">Checkout</button>
        </div>
      )}
      <style jsx>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideIn {
          animation: slideIn 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </div>
  );
}
