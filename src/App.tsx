import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";

const reminders: Reminder[] = [
  { id: 1, title: "Reminder 1" },
  { id: 2, title: "Reminder 2" },
];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders}></ReminderList>
    </div>
  );
}

export default App;
