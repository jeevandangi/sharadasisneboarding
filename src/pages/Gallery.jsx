import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const galleryImages = [
    { src: "/photo/Picnic/IMG_4378.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4379.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4380.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4381.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4382.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4386.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4387.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4388.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4390.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4391.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4396.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4397.JPG", event: "Picnic", year: 2024 },
    { src: "/photo/Picnic/IMG_4398.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4399.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4400.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4405.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4406.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4407.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4408.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4409.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4413.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4414.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4415.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4416.JPG", event: "Picnic", year: 2023 },
    { src: "/photo/Picnic/IMG_4417.JPG", event: "Picnic", year: 2023 },
];

const Gallery = () => {
    const [activeEvent, setActiveEvent] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const imagesPerPage = 10;

    const eventsOrder = [
        { name: "All", emoji: "🌄" },
        { name: "Batch", emoji: "🎓" },
        { name: "Farewell", emoji: "👋" },
        { name: "Picnic", emoji: "🧺" },
        { name: "Parents Day", emoji: "👪" },
        { name: "Holi", emoji: "🎨" },
    ];

    const { groupedEvents, flatImages } = useMemo(() => {
        const grouped = {};
        const flat = [];

        galleryImages.forEach(img => {
            if (!grouped[img.event]) grouped[img.event] = {};
            if (!grouped[img.event][img.year]) grouped[img.event][img.year] = [];
            grouped[img.event][img.year].push(img);
            flat.push(img);
        });

        return { groupedEvents: grouped, flatImages: flat };
    }, []);

    // Reset to page 1 on event change
    const handleEventChange = (event) => {
        setActiveEvent(event);
        setCurrentPage(1);
    };

    const getCurrentImages = () => {
        const imagesToPaginate = activeEvent === "All"
            ? flatImages
            : groupedEvents[activeEvent]
                ? Object.values(groupedEvents[activeEvent]).flat()
                : [];

        const start = (currentPage - 1) * imagesPerPage;
        const end = start + imagesPerPage;
        return { paginated: imagesToPaginate.slice(start, end), total: imagesToPaginate.length };
    };

    const { paginated, total } = getCurrentImages();
    const totalPages = Math.ceil(total / imagesPerPage);

    const handleModalNavigation = (direction) => {
        setModalIndex(prev => {
            const newIndex = direction === 'next' ? prev + 1 : prev - 1;
            return Math.max(0, Math.min(flatImages.length - 1, newIndex));
        });
    };

    return (
        <section className="px-4 md:px-12 py-8 bg-white min-h-screen">
            <motion.header className="text-center mb-8">
                <motion.h2
                    className="text-3xl font-bold text-red-600 mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    📸 School Gallery
                </motion.h2>

                <nav className="sticky top-0 bg-white z-20 py-3 border-b">
                    <div className="flex flex-wrap gap-2 justify-center">
                        {eventsOrder.map((event) => (
                            <motion.button
                                key={event.name}
                                onClick={() => handleEventChange(event.name)}
                                className={`px-3 py-1.5 rounded-full text-sm flex items-center ${activeEvent === event.name
                                    ? 'bg-red-600 text-white'
                                    : 'bg-gray-100 hover:bg-red-100'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="mr-1.5">{event.emoji}</span>
                                {event.name}
                            </motion.button>
                        ))}
                    </div>
                </nav>
            </motion.header>

            <main className="mt-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeEvent + currentPage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                    >
                        {paginated.map((img) => (
                            <ImageCard
                                key={img.src}
                                img={img}
                                onClick={() => {
                                    const index = flatImages.findIndex(f => f.src === img.src);
                                    setModalIndex(index);
                                    setIsModalOpen(true);
                                }}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-6 flex justify-center gap-4">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-red-100 disabled:opacity-50"
                        >
                            Prev
                        </button>
                        <span className="px-2 py-1">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-200 rounded hover:bg-red-100 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                )}
            </main>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="relative w-full max-w-4xl">
                            <button
                                onClick={() => handleModalNavigation('prev')}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-red-500 disabled:opacity-50"
                                disabled={modalIndex === 0}
                            >
                                &larr;
                            </button>

                            <motion.div
                                key={modalIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="relative"
                            >
                                <img
                                    src={flatImages[modalIndex]?.src}
                                    alt="Gallery content"
                                    className="mx-auto max-h-[80vh] w-auto object-contain rounded-lg"
                                />
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                                    {flatImages[modalIndex]?.event} - {flatImages[modalIndex]?.year}
                                </div>
                            </motion.div>

                            <button
                                onClick={() => handleModalNavigation('next')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-red-500 disabled:opacity-50"
                                disabled={modalIndex === flatImages.length - 1}
                            >
                                &rarr;
                            </button>

                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
                                aria-label="Close"
                            >
                                &times;
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

const ImageCard = ({ img, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.article
            className="relative w-fit mx-auto"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <LazyLoadImage
                src={img.src}
                alt={img.event}
                effect="blur"
                className="rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer h-56 w-auto"
                onClick={onClick}
            />
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <p className="text-white text-center p-2 text-sm">
                            {img.event} - {img.year}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.article>
    );
};

export default Gallery;
