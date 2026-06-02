// components/NotFoundPage.jsx
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-9xl font-black text-slate-200">404</h1>
      <h2 className="text-3xl font-bold text-slate-800 mt-4">Sahifa topilmadi</h2>
      <p className="text-slate-500 mt-2 mb-8">Kechirasiz, siz qidirayotgan sahifa mavjud emas.</p>
      <Link 
        to="/" 
        className="bg-green-500 text-white px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-all"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};
export default NotFoundPage;