import Profile from "./components/Profile";
import NoteForm from "./components/NoteForm";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  return (
    <>
      <Profile />
      <NoteForm />
      <Filter />
      <Sort />
      <NoteList />
    </>
  );
}

export default App;
