"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      className="min-h-screen text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom, #0f0c09, #1b1611, #0f0c09)",
      }}
    >

      {/* NAVBAR */}

      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-8 backdrop-blur-md">

        <h1
          className="text-xl md:text-2xl tracking-[12px] font-light uppercase"
          style={{
            fontFamily: "Times New Roman, serif",
          }}
        >
          ELORA THREADS
        </h1>

        <div
          className="flex gap-6 md:gap-10 uppercase text-xs tracking-[4px] text-gray-300"
          style={{
            fontFamily: "Arial, sans-serif",
          }}
        >

          <a href="#">Home</a>

          <a href="#new">New</a>

          <a href="#about">About</a>

          <a href="#contact">Contact</a>

        </div>

      </nav>

      {/* HERO */}

      <section className="relative h-screen flex items-center justify-center px-6">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">

          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#d4b06a]/20 blur-[180px] rounded-full"></div>

          <div className="absolute bottom-[0%] right-[10%] w-[400px] h-[400px] bg-[#ffffff]/5 blur-[180px] rounded-full"></div>

        </div>

        <div className="relative z-10 text-center">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[8px] text-sm text-[#d4b06a] mb-6"
          >
            Luxury Womenswear
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[70px] md:text-[180px] leading-none uppercase font-light"
            style={{
              fontFamily: "Times New Roman, serif",
            }}
          >
            ELORA
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-[70px] md:text-[180px] leading-none uppercase font-light"
            style={{
              fontFamily: "Times New Roman, serif",
            }}
          >
            THREADS
          </motion.h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-10 border border-[#d4b06a] px-10 py-4 rounded-full text-[#d4b06a] hover:bg-[#d4b06a] hover:text-black duration-500 uppercase tracking-[4px]"
          >
            Discover Collection
          </motion.button>

        </div>

      </section>

      {/* FEATURED SECTION */}

      <section
        id="new"
        className="px-8 md:px-16 py-32"
      >

        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT IMAGE */}

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:w-1/2 overflow-hidden rounded-[40px]"
          >

            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400"
              className="w-full h-[700px] object-cover"
            />

          </motion.div>

          {/* RIGHT CONTENT */}

          <div className="md:w-1/2 flex flex-col justify-center">

            <p className="uppercase tracking-[6px] text-[#d4b06a] text-sm mb-6">
              New Collection
            </p>

            <h2
              className="text-5xl md:text-7xl leading-tight uppercase font-light"
              style={{
                fontFamily: "Times New Roman, serif",
              }}
            >
              Modern Luxury For Women
            </h2>

            <p className="mt-10 text-gray-400 leading-[2] text-lg max-w-xl">

              Elora Threads blends timeless femininity with modern silhouettes,
              creating elegant pieces inspired by luxury fashion and cinematic aesthetics.

            </p>

            <button className="mt-10 w-fit border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black duration-500 uppercase tracking-[3px]">
              Shop Now
            </button>

          </div>

        </div>

      </section>

      {/* GALLERY */}

      <section className="px-8 md:px-16 py-20">

        <div className="grid md:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ y: -10 }}
            className="overflow-hidden rounded-[30px]"
          >

            <img
              src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200"
              className="w-full h-[500px] object-cover"
            />

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="overflow-hidden rounded-[30px] mt-16"
          >

            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200"
              className="w-full h-[500px] object-cover"
            />

          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="overflow-hidden rounded-[30px]"
          >

            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200"
              className="w-full h-[500px] object-cover"
            />

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}

      <section
        id="about"
        className="px-8 md:px-16 py-40 text-center"
      >

        <p className="uppercase tracking-[6px] text-[#d4b06a] text-sm mb-8">
          About The Brand
        </p>

        <h2
          className="text-5xl md:text-8xl leading-tight uppercase font-light"
          style={{
            fontFamily: "Times New Roman, serif",
          }}
        >
          Elegance. Identity. Expression.
        </h2>

        <p className="mt-10 text-gray-400 max-w-4xl mx-auto leading-[2] text-lg">

          Elora Threads is a luxury womenswear label designed for women who embrace confidence, femininity and timeless elegance.

          Every collection reflects cinematic beauty, premium aesthetics and modern sophistication.

        </p>

      </section>

      {/* CONTACT */}

      <section
        id="contact"
        className="px-8 md:px-16 py-32 text-center border-t border-white/10"
      >

        <h2
          className="text-5xl md:text-7xl uppercase font-light"
          style={{
            fontFamily: "Times New Roman, serif",
          }}
        >
          Contact
        </h2>

        <p className="mt-10 text-2xl text-gray-300">
          +91 8124671401
        </p>

        <a
          href="https://www.instagram.com/elora_threads__?igsh=MXh5ODJhanp5MzZ2eA=="
          target="_blank"
          className="block mt-6 text-[#d4b06a] uppercase tracking-[3px]"
        >
          Instagram — @elora_threads__
        </a>

      </section>

    </main>
  );
}