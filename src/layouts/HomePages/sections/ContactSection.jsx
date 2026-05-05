
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactSection() {
  const [form, setForm] = useState({ username: "", tel: "", message: "" });
  const [error, setError] = useState({ username: "", tel: "" });

  const getBorderStyle = (field) => {
    if (form[field].length === 0) return "border-gray-100";
    return error[field] ? "border-red-500" : "border-green-500";
  };

  useEffect(() => {
    let msg = "";
    if (form.username.length > 0) {
      if (form.username.length < 3) msg = "Kamida 3 ta belgi!";
      else if (/\d/.test(form.username)) msg = "Faqat harflar kiriting!";
    }
    setError((prev) => ({ ...prev, username: msg }));
  }, [form.username]);

  useEffect(() => {
    let msg = "";
    const numericTel = form.tel.replace(/\D/g, "");
    if (form.tel.length > 0 && numericTel.length < 9) msg = "Raqamni to'liq kiriting!";
    setError((prev) => ({ ...prev, tel: msg }));
  }, [form.tel]);

  const handleNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 9) {
      value = value.replace(/(\d{2})(\d{0,3})(\d{0,2})(\d{0,2})/, (match, p1, p2, p3, p4) => {
        let formatted = "(" + p1;
        if (p2) formatted += ") " + p2;
        if (p3) formatted += "-" + p3;
        if (p4) formatted += "-" + p4;
        return formatted;
      });
      setForm((prev) => ({ ...prev, tel: value }));
    }
  };

  async function formSubmittion(e) {
    e.preventDefault();
    if (!error.username && !error.tel && form.username && form.tel) {
      sendData(form.username, form.tel, form.message);
    } else {
      toast.error("Iltimos, ism va telefonni to'g'ri kiriting!");
    }
  }

  async function sendData(username, tel, message) {
    const TOKEN = `8577926042:AAHJbDrSVMphXbQIVOUYK76qGBs-kTcQMUo`;
    const botID = "1375929355";
    
   
    const info = `<b>🚀 Yangi xabar!</b>\n\n` +
                 `👤 <b>Ism:</b> ${username}\n` +
                 `📞 <b>Tel:</b> +998 ${tel}\n` +
                 `📝 <b>Matn:</b> ${message || "Xabar yozilmagan"}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: botID, text: info, parse_mode: "html" }),
      });
      if (response.ok) {
        toast.success("Xabaringiz muvaffaqiyatli yuborildi!");
        setForm({ username: "", tel: "", message: "" }); // Formani tozalash
      }
    } catch (err) {
      toast.error("Xatolik yuz berdi!");
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#FDFEFF]">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
       
        <div className="space-y-8">
          <h2 className="text-5xl font-black text-[#0A1D14]">Find us</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-50">
              <div className="w-14 h-14 bg-[#3DBB68] rounded-full flex items-center justify-center text-white text-2xl">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div>
                <p className="text-xl font-bold text-[#0A1D14]">Call Us</p>
                <p className="text-gray-500">+(08) 255 201 888</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-50">
              <div className="w-14 h-14 bg-[#3DBB68] rounded-full flex items-center justify-center text-white text-2xl">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <p className="text-xl font-bold text-[#0A1D14]">Email Now</p>
                <p className="text-gray-500">Hello@procleaning.com</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-gray-50">
              <div className="w-14 h-14 bg-[#3DBB68] rounded-full flex items-center justify-center text-white text-2xl">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div>
                <p className="text-xl font-bold text-[#0A1D14]">Address</p>
                <p className="text-gray-500">7510, Brand Tower, New York, USA</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[#0A1D14] font-medium">Contact info</p>
            <h2 className="text-5xl font-black text-[#0A1D14]">Keep In Touch</h2>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              We prioritize responding to your inquiries promptly.
            </p>
          </div>

          <form onSubmit={formSubmittion} className="space-y-5 pt-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                className={`w-full p-4 bg-white border rounded-lg outline-none transition-all ${getBorderStyle("username")}`}
                required
              />
              {error.username && <p className="text-red-500 text-xs mt-1 pl-2">{error.username}</p>}
            </div>

            <div>
              <div className={`flex items-center bg-white border rounded-lg transition-all ${getBorderStyle("tel")}`}>
                <span className="pl-4 text-gray-400 font-medium">+998</span>
                <input
                  type="tel"
                  placeholder="(XX) XXX-XX-XX"
                  value={form.tel}
                  onChange={handleNumberChange}
                  className="w-full p-4 outline-none bg-transparent"
                  required
                />
              </div>
              {error.tel && <p className="text-red-500 text-xs mt-1 pl-2">{error.tel}</p>}
            </div>

            
            <textarea
              placeholder="Message"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-4 bg-white border border-gray-100 rounded-lg outline-none focus:border-[#3DBB68] transition-all"
            ></textarea>

            <button
              type="submit"
              className="bg-[#3DBB68] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#34a35a] transition-all active:scale-95 shadow-lg shadow-green-100"
            >
              Sent Massage
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}