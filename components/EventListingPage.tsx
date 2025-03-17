import React from "react";
import { motion } from "framer-motion";

interface EventForm {
  title: string;
  date: string;
  location?: string;
  category: string;
}

export default function EventListingPage() {
  const [events, setEvents] = React.useState<EventForm[]>([
    {
      title: "Community Meetup",
      date: "2025-03-20",
      location: "Community Hall",
      category: "Social",
    },
    {
      title: "Charity Run",
      date: "2025-03-22",
      location: "City Park",
      category: "Charity",
    },
    {
      title: "Community Meetup",
      date: "2025-03-20",
      location: "Community Hall",
      category: "Social",
    },
    {
      title: "Charity Run",
      date: "2025-03-22",
      location: "City Park",
      category: "Charity",
    },
    {
      title: "Community Meetup",
      date: "2025-03-20",
      location: "Community Hall",
      category: "Social",
    },
    {
      title: "Charity Run",
      date: "2025-03-22",
      location: "City Park",
      category: "Charity",
    },
    {
      title: "Community Meetup",
      date: "2025-03-20",
      location: "Community Hall",
      category: "Social",
    },
    {
      title: "Charity Run",
      date: "2025-03-22",
      location: "City Park",
      category: "Charity",
    },
  ]);

  const [newEvent, setNewEvent] = React.useState({
    title: "",
    date: "",
    category: "",
  });
  const [filter, setFilter] = React.useState("");
  const [openEvent, setOpenEvent] = React.useState(false);

  const handleAddEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.category) {
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "", category: "" });
    }
    setOpenEvent(false);
  };

  const filteredEvents = filter
    ? events.filter((event) =>
        event.category.toLowerCase().includes(filter.toLowerCase())
      )
    : events;

  return (
    <div className="min-h-screen mt-24 p-4 bg-gradient-to-r from-black to-gray-800">
      <h2 className="text-4xl text-zinc-100 text-center mb-4 font-medium">
        We Helped Communities Connect & Flourish
        <span className="block text-blue-300 font-semibold">
          ✦ Upcoming Events
        </span>
      </h2>
      <div className="md:flex justify-between sm:px-10 mt-10">
        <label className="block mb-2 text-white">
          Filter by category:
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="max-w-[90vw] sm:ml-2 p-1 border text-white bg-gray-600 border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </label>
        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 my-2 text-white font-medium rounded hover:scale-105 transition-transform duration-300 shadow-lg"
          onClick={() => setOpenEvent(true)}
        >
          + New Event
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 w-full min-h-fit h-full gap-8">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 p-4 m-8 bg-white rounded shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img src="event1.jpeg" alt="" className="rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
            <p className="text-gray-600">
              {event.date} — {event.location}
            </p>
            <span className="text-sm text-gray-500 font-medium">
              Category: {event.category}
            </span>
          </motion.div>
        ))}
      </div>

      {openEvent && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-100 fixed top-0 right-0 h-full w-full flex flex-col justify-center items-center shadow-2xl rounded-lg"
        >
          <button className="absolute top-4 right-4 w-10 h-10">
            <img src="close.png" alt="" onClick={() => setOpenEvent(false)} />
          </button>
          <form
            onSubmit={handleAddEvent}
            className="mt-6 p-6 bg-white rounded shadow-md w-1/2 space-y-4"
          >
            <h3 className="text-2xl font-semibold mb-2">Add New Event</h3>
            <input
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              className="block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Category"
              value={newEvent.category}
              onChange={(e) =>
                setNewEvent({ ...newEvent, category: e.target.value })
              }
              className="block w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition hover:scale-105">
              Add Event
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
}