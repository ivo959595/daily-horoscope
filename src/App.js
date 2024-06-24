import Board from "./components/Board";
import "./index.css";

function App() {
  const getFormattedDate = () => {
    const today = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    };
    return today.toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-gray-300 text-white min-h-screen w-full">
      <div className="text-center px-4">
        <h1 className="text-3xl font-bold mb-2 text-yellow-400 ">Daily Horoscope</h1>
        <span className="text-3xl">{getFormattedDate()}</span>
      </div>

      <Board />
    </div>
  );
}

export default App;
