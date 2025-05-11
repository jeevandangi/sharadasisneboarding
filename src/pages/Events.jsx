import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { motion } from "framer-motion";


// Sample events
const academicEvents = [
    { date: "2025-05-14", title: "Science Exhibition", type: "Event" },
    { date: "2025-05-21", title: "Buddha Jayanti", type: "Holiday" },
    { date: "2025-05-25", title: "Unit Test Starts", type: "Exam" },
    { date: "2025-06-01", title: "Teacher Training", type: "Event" },
    { date: "2025-06-05", title: "World Environment Day", type: "Event" },
    { date: "2025-06-15", title: "School Picnic", type: "Event" },
    { date: "2025-06-29", title: "Final Exam", type: "Exam" },
];

const Events = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [showAll, setShowAll] = useState(false);

    // Filter events based on the selected month
    const currentMonthEvents = academicEvents.filter(
        (event) => new Date(event.date).getMonth() === currentMonth.getMonth() && new Date(event.date).getFullYear() === currentMonth.getFullYear()
    );

    const selectedDateEvents = academicEvents.filter(
        (event) => event.date === selectedDate
    );

    // Update events to show based on selected month or selected date
    const eventsToShow = selectedDate
        ? selectedDateEvents
        : academicEvents.filter(
            (event) =>
                new Date(event.date).getMonth() === currentMonth.getMonth() &&
                new Date(event.date).getFullYear() === currentMonth.getFullYear()
        );
    // Get event dates for coloring the calendar days
    const eventDates = academicEvents.map(event => event.date);

    // Function to add a class to event days in the calendar
    const tileClassName = ({ date, view }) => {
        // Only color days that have events
        const dateStr = format(date, "yyyy-MM-dd");
        if (eventDates.includes(dateStr)) {
            return 'bg-green-500 text-white';  // Green background for event days
        }
        return '';  // No class for non-event days
    };

    return (
        <section className="bg-white py-10 px-6 md:px-20">
            <motion.h2
                className="text-3xl font-bold text-red-600 mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Academic Calendar
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10">
                {/* Calendar */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Calendar
                        onClickDay={(date) => {
                            setSelectedDate(format(date, "yyyy-MM-dd"));
                            setShowAll(false);
                        }}
                        onActiveStartDateChange={({ activeStartDate }) => setCurrentMonth(activeStartDate)}
                        value={currentMonth}
                        className="rounded-md shadow-md w-full p-4"
                        tileClassName={({ date, view }) => {
                            if (
                                view === "month" &&
                                academicEvents.find((event) => event.date === format(date, "yyyy-MM-dd"))
                            ) {
                                return "event-day";
                            }
                            return null;
                        }}
                    />
                    <button
                        onClick={() => {
                            setSelectedDate(null);
                            setShowAll(false);
                        }}
                        className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded shadow"
                    >
                        Show All Events of This Month
                    </button>
                </motion.div>

                {/* Events List */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                        {showAll
                            ? "All Academic Events"
                            : selectedDate
                                ? `Events on ${selectedDate}`
                                : `Events in ${format(currentMonth, "MMMM yyyy")}`}
                    </h3>

                    <ul className="space-y-4">
                        {eventsToShow.length > 0 ? (
                            eventsToShow
                                .sort((a, b) => new Date(a.date) - new Date(b.date))
                                .map((event, index) => (
                                    <motion.li
                                        key={index}
                                        className="border-l-4 pl-4 py-2 shadow-sm rounded border-yellow-500"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                    >
                                        <p className="text-sm text-gray-500">{event.date}</p>
                                        <p className="font-bold text-red-600">{event.title}</p>
                                        <p className="text-xs bg-gray-100 inline-block px-2 rounded mt-1">
                                            {event.type}
                                        </p>
                                    </motion.li>
                                ))
                        ) : (
                            <p className="text-sm text-gray-500">No events found.</p>
                        )}
                    </ul>
                </motion.div>
            </div>
        </section>
    );


};

export default Events;
