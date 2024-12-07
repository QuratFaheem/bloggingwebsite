export default function About() {
  const itinerary = [
    { title: "Day 1: Arrival and Exploration", details: "I arrived at [Destination] early in the morning..." },
    { title: "Breakfast at [Local Spot]:", details: "I fueled up at [Local Café or Restaurant] with a delicious breakfast." },
    { title: "Sightseeing:", details: "Next up, I headed to [First Attraction]..." },
    { title: "Lunch at [Local Spot]:", details: "For lunch, I stopped by [Restaurant Name]..." },
    { title: "Afternoon Activities:", details: "With the afternoon sun shining, I decided to [mention any outdoor activities]..." },
    { title: "Evening Relaxation:", details: "As the day wound down, I found myself at [evening spot or scenic viewpoint]..." },
    { title: "Day 2: Adventure and Farewell", details: "Morning: I started my second day with a hearty breakfast..." },
    { title: "Adventure Time:", details: "For a bit of adventure, I visited [Adventure Location]..." },
    { title: "Lunch:", details: "I made sure to try [Restaurant or Café Name] before I left." },
    { title: "Exploring [Last Attraction]:", details: "Before heading back, I squeezed in a visit to [Last Attraction]..." },
    { title: "Heading Home:", details: "With a full heart and plenty of photos, I reluctantly packed my bags..." },
  ];

  return (
    <div
      className="container bg-cover bg-center text-white p-8"
      style={{
        backgroundImage: `url("ukcover.jfif")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h1 className="text-4xl font-bold mb-4">UK Trip</h1>
      <div className="bg-black bg-opacity-50 p-4">
        <p>Two-Day Getaway to [Destination]</p>
        <p>
          Need a quick escape from the hustle and bustle? A two-day trip to
          [Destination] might be just what you need! Here’s a quick breakdown
          of my weekend getaway to this beautiful place.
        </p>
        {itinerary.map((item, index) => (
          <div key={index}>
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
