import React from "react";

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
  ]);

  const changeMenu =() =>{
    setOpenEvent(false);
  }


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
    ? events.filter(
      (event) => event.category.toLowerCase().includes(filter.toLowerCase())
      )
    : events;

  return (
    <div className="min-h-screen mt-24 p-4 bg-black">
      <h2 className="text-3xl text-zinc-100 text-center mb-4 font-medium">
        We Helped Communities Connect & Flourish
        <span className="block text-blue-300 font-medium">
          ✦ Upcoming Events
        </span>
      </h2>
      <div className="flex justify-between px-10 mt-10">
        <label className="block mb-2 text-white">
          Filter by category:
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="ml-2 p-1 border text-white bg-gray-600 border-gray-700 rounded"
          />
        </label>
        <button
          className="bg-blue-200 px-2 my-2 text-black font-medium"
          onClick={() => {
            setOpenEvent(true);
          }}
        >
          New Event
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 w-full min-h-fit h-full gap-8">
        {filteredEvents.map((event, index) => (
          <div
            key={index}
            className="col-span-1 p-4 m-8 bg-white rounded shadow-md"
          >
            <img src="event1.jpeg" alt="" className="" />
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p>
              {event.date} — {event.location}
            </p>
            <span className="text-sm text-gray-500">
              Category: {event.category}
            </span>
          </div>
        ))}
      </div>

      {openEvent && (
        <div className="bg-gray-100 fixed top-1/2 translate-x-1/2 -translate-y-1/2 right-1/2 h-full w-full flex flex-col justify-center items-center">
          <button className="absolute top-0 right-0 w-20 h-20 p-5">
            <img
              src="close.png"
              alt=""
              onClick={changeMenu}
            />
          </button>
          <form
            onSubmit={handleAddEvent}
            className="mt-6 p-4 bg-white rounded shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">Add New Event</h3>
            <input
              type="text"
              placeholder="Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className="block w-full p-2 mb-2 border rounded"
            />
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              className="block w-full p-2 mb-2 border rounded"
            />
            <input
              type="text"
              placeholder="Category"
              value={newEvent.category}
              onChange={(e) =>
                setNewEvent({ ...newEvent, category: e.target.value })
              }
              className="block w-full p-2 mb-2 border rounded"
            />
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Add Event
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
