import Profile from "./components/Profile";
import NoteForm from "./components/NoteForm";
import Filter from "./components/Filter";
import NoteList from "./components/NoteList";
import "./App.css";

function App() {
  return (
    <>
      <Profile />
      <NoteForm />
      <Filter />
      <NoteList />
    </>
  );
}

export default App;
