import { useState } from "react";
import "./FacilitiesSection.css";

const facilityNames = [
  "SURAU", "SURAU", "SURAU",
  "RUANGAN PELAJAR", "RUANGAN PELAJAR", "RUANGAN PELAJAR",
  "KAFETERIA", "KAFETERIA", "KAFETERIA",
  "PENGANGKUTAN", "PENGANGKUTAN", "PENGANGKUTAN",
  "KELAS", "KELAS", "KELAS",
  "ASRAMA", "ASRAMA",
  "PENDAFTARAN", "PENDAFTARAN", "PENDAFTARAN",
];

const facilities = facilityNames.map((title, index) => ({
  id: index + 1,
  title,
  image: `/images/facilities/facility-${String(index + 1).padStart(2, "0")}.jpg`,
}));

const categories = [
  { name: "Semua", index: 0 },
  { name: "Surau", index: 0 },
  { name: "Ruangan Pelajar", index: 3 },
  { name: "Kafeteria", index: 6 },
  { name: "Pengangkutan", index: 9 },
  { name: "Kelas", index: 12 },
  { name: "Asrama", index: 15 },
  { name: "Pendaftaran", index: 17 },
];

export default function FacilitiesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Semua");

  const current = facilities[activeIndex];

  const previous = () => {
    setActiveIndex((index) => (index - 1 + facilities.length) % facilities.length);
    setActiveCategory("Semua");
  };

  const next = () => {
    setActiveIndex((index) => (index + 1) % facilities.length);
    setActiveCategory("Semua");
  };

  const selectCategory = (category) => {
    setActiveCategory(category.name);
    setActiveIndex(category.index);
  };

  const selectImage = (index) => {
    setActiveIndex(index);
    const category = categories.find(
      (item) => item.name !== "Semua" && item.index === index
    );

    if (category) {
      setActiveCategory(category.name);
    } else {
      const matchingCategory = [...categories]
        .filter((item) => item.name !== "Semua" && item.index <= index)
        .sort((a, b) => b.index - a.index)[0];

      setActiveCategory(matchingCategory?.name ?? "Semua");
    }
  };

  return (
    <section className="facilities-section" id="fasiliti">
      <div className="facilities-container">
        <div className="facilities-heading">
          <span className="facilities-eyebrow">KEMUDAHAN KAMI</span>
          <h2>
            Ruang Terbaik untuk
            <span> Menimba Ilmu</span>
          </h2>
          <p>
            Kenali persekitaran dan kemudahan yang menyokong perjalanan
            pendidikan para pelajar SMTAA.
          </p>
        </div>

        <div className="facilities-category-nav" aria-label="Kategori fasiliti">
          {categories.map((category) => (
            <button
              type="button"
              key={category.name}
              className={`facilities-category-btn ${
                activeCategory === category.name ? "active" : ""
              }`}
              onClick={() => selectCategory(category)}
              aria-pressed={activeCategory === category.name}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="facilities-carousel">
          <div className="facilities-feature">
            <img
              key={current.id}
              className="facilities-main-image"
              src={current.image}
              alt={current.title}
              onError={(event) => {
                event.currentTarget.style.visibility = "hidden";
              }}
              onLoad={(event) => {
                event.currentTarget.style.visibility = "visible";
              }}
            />

            <div className="facilities-image-overlay" />

            <div className="facilities-image-caption">
              <span>SMTAA · FASILITI</span>
              <h3>{current.title}</h3>
            </div>

            <div className="facilities-counter">
              {String(activeIndex + 1).padStart(2, "0")}
              <span> / </span>
              {String(facilities.length).padStart(2, "0")}
            </div>
          </div>

          <div className="facilities-controls">
            <p>Terokai kemudahan kami</p>
            <div className="facilities-arrows">
              <button
                type="button"
                onClick={previous}
                aria-label="Gambar sebelumnya"
              >
                &#8592;
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Gambar seterusnya"
              >
                &#8594;
              </button>
            </div>
          </div>

          <div className="facilities-thumbnails">
            {facilities.map((facility, index) => (
              <button
                type="button"
                key={facility.id}
                className={`facilities-thumbnail ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => selectImage(index)}
                aria-label={`Lihat ${facility.title}, gambar ${index + 1}`}
                aria-pressed={index === activeIndex}
              >
                <img src={facility.image} alt="" loading="lazy" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
