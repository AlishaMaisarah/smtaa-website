import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const testimonials = [
  {
    image: "/images/testimoni-1.png",
    category: "Pelajar SPM Batch 3",
    alt: "Poster penghargaan SMTAA",
  },
  {
    image: "/images/testimoni-2.jpg",
    category: "Pencapaian Pelajar SPM 2024",
    alt: "Poster pencapaian pelajar SMTAA",
  },
  {
    image: "/images/testimoni-3.jpg",
    category: "Pencapaian Pelajar SPM 2024",
    alt: "Poster penghargaan SMTAA",
  },
  {
    image: "/images/testimoni-4.jpg",
    category: "Pencapaian Pelajar SPM 2023",
    alt: "Poster kejayaan SMTAA",
  },
  {
    image: "/images/testimoni-5.jpg",
    category: "Pencapaian Pelajar SPM 2023",
    alt: "Poster kejayaan SMTAA",
  },
  {
    image: "/images/testimoni-8.png",
    category: "Pencapaian Pelajar SPM 2022",
    alt: "Poster kejayaan SMTAA",
  },
  {
    image: "/images/testimoni-9.png",
    category: "Pencapaian Pelajar SPM 2022",
    alt: "Poster kejayaan SMTAA",
  },
  {
    image: "/images/testimoni-10.png",
    category: "Pencapaian Pelajar SPM 2022",
    alt: "Poster kejayaan SMTAA",
  },
  {
    image: "/images/testimoni-11.png",
    category: "Pencapaian Pelajar SPM 2022",
    alt: "Poster kejayaan SMTAA",
  },
    {
    image: "/images/testimoni-6.png",
    category: "Pencapaian Pelajar SPM 2021",
    alt: "Poster kejayaan SMTAA",
  },
  {
    image: "/images/testimoni-7.png",
    category: "Pencapaian Pelajar SPM 2021",
    alt: "Poster kejayaan SMTAA",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedPoster, setSelectedPoster] = useState(null);

  const previous = () => {
    setActiveIndex((current) =>
      (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      (current + 1) % testimonials.length
    );
  };

  // Show the previous, current and next posters
  const visiblePosters = [-1, 0, 1].map((offset) => {
    const index =
      (activeIndex + offset + testimonials.length) % testimonials.length;

    return {
      ...testimonials[index],
      index,
      offset,
    };
  });

  return (
    <section
        id="testimoni"
        className="scroll-mt-24 bg-[#f7f3e9] px-6 py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b08b4f]">
            Suara Kejayaan SMTAA
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#174936] sm:text-5xl">
            Kejayaan & Pencapaian
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#6b6d66]">
            Mengabadikan kejayaan, pencapaian dan detik membanggakan
            warga Sekolah Menengah Tahfiz Al-Attas.
          </p>
        </div>

        {/* Poster carousel */}
        <div className="mt-12">
          <div className="flex items-center justify-center gap-2 sm:gap-5 lg:gap-8">
            {visiblePosters.map((poster) => {
              const isCenter = poster.offset === 0;

              return (
                <button
                  key={poster.index}
                  type="button"
                  onClick={() =>
                    isCenter
                      ? setSelectedPoster(poster)
                      : setActiveIndex(poster.index)
                  }
                  aria-label={`Lihat ${poster.alt}`}
                  className={`min-w-0 overflow-hidden rounded-xl border bg-white p-1.5 shadow-lg transition-all duration-300 sm:rounded-2xl sm:p-3 ${
                    isCenter
                      ? "z-10 w-[58%] scale-100 border-[#c9b995] shadow-[#174936]/15 sm:w-[42%] lg:w-[32%]"
                      : "w-[21%] scale-90 border-[#e8e1d3] opacity-65 hover:scale-95 hover:opacity-100 sm:w-[25%] lg:w-[23%]"
                  }`}
                >
                  <img
                    src={poster.image}
                    alt={poster.alt}
                    className="block h-auto max-h-[480px] w-full rounded-lg object-contain sm:rounded-xl"
                    loading="lazy"
                  />

                  {isCenter && (
                    <span className="block px-1 py-3 text-center text-xs font-semibold text-[#174936] sm:text-sm">
                      {poster.category}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={previous}
              aria-label="Poster sebelumnya"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9b995] text-[#174936] transition hover:bg-[#174936] hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <span className="text-sm font-medium tabular-nums text-[#6b6d66]">
              {activeIndex + 1} / {testimonials.length}
            </span>

            <button
              type="button"
              onClick={next}
              aria-label="Poster seterusnya"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c9b995] text-[#174936] transition hover:bg-[#174936] hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-[#6b6d66]">
            Klik poster untuk melihat dengan lebih jelas
          </p>
        </div>
      </div>

      {/* Full-size poster lightbox */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 sm:p-8"
          onClick={() => setSelectedPoster(null)}
        >
          <button
            type="button"
            aria-label="Tutup poster"
            onClick={() => setSelectedPoster(null)}
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#174936] shadow-lg"
          >
            <X size={22} />
          </button>

          <img
            src={selectedPoster.image}
            alt={selectedPoster.alt}
            onClick={(event) => event.stopPropagation()}
            className="max-h-[90vh] max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </section>
  );
}
