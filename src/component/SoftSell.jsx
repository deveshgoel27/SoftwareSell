import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function SoftSell() {
  const [darkMode, setDarkMode] = useState(true);
  const [quote, setQuote] = useState('');


  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">SoftSell</h1>
        <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode">
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </header>

              <section className="text-center py-20 px-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold mb-4"
            >
              Sell Your Unused Software Licenses Easily
            </motion.h2>
            <p className="mb-6 text-lg">
              Turn your unused software into cash with our fast, secure platform.
            </p>
            <button
              onClick={() => {
                const randomQuote = Math.floor(Math.random() * 1500) + 500; // between $500–$2000
                setQuote(`💰 Your estimated license value: $${randomQuote}`);
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Get a Quote
            </button>
            {quote && (
              <p className="mt-4 text-xl font-semibold text-green-600 dark:text-green-400">
                {quote}
              </p>
            )}
      </section>


      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Upload License', 'Get Valuation', 'Get Paid'].map((step, i) => (
              <motion.div
                key={step}
                className="p-6 rounded-lg bg-white dark:bg-gray-700 shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold mb-4">{i + 1}</div>
                <p className="text-lg font-semibold">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Trusted Buyers', 'Fast Payments', 'Top Valuations', 'Secure Transfers'].map((item) => (
              <div key={item} className="p-6 rounded-xl bg-blue-100 dark:bg-blue-900">
                <p className="font-semibold">{item}</p>
                <p className="text-sm mt-2">We ensure you get the best service and highest returns.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-10">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <p className="mb-4 italic">“SoftSell helped us recover value from licenses and software we no longer needed. Super easy process.”</p>
              <p className="font-semibold">– Devesh goel, IT Manager, Google</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
              <p className="mb-4 italic">“Great experience from start to finish. I highly recommended their platform.”</p>
              <p className="font-semibold">– Arjun diwakar, Lead developer, Microsoft</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
         <form
             className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                if (!form.checkValidity()) {
                  alert("Please fill out all fields correctly.");
                  return;
                }
                alert("Form submitted successfully!");
                form.reset();
              }}
              >
              <input type="text" name="name" className="w-full p-3 rounded border dark:bg-gray-900 text-white" placeholder="Name" required />
              <input type="email" name="email" className="w-full p-3 rounded border text-white dark:bg-gray-900" placeholder="Email" required />
              <input type="text" name="company" className="w-full p-3 rounded border text-white dark:bg-gray-900" placeholder="Company" required />
              <select name="licenseType" className="w-full p-3 rounded border text-white dark:bg-gray-900" required>
                <option value="">Select License Type</option>
                <option>Microsoft</option>
                <option>Adobe</option>
                <option>Autodesk</option>
              </select>
              <textarea name="message" className="w-full p-3 rounded border text-white dark:bg-gray-900" placeholder="Message" required></textarea>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Submit
              </button>
            </form>

        </div>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400">
        © 2025 SoftSell. All rights reserved.
      </footer>
    </div>
  );
}
