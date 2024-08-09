import { useState } from "react";
import Profile from "../../components/Profile";
import NoteForm from "../../components/NoteForm";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";
import NoteList from "../../components/NoteList";
import styles from "./NoteAppPage.module.css";

function NoteAppPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const handleRegister = () => {
    setEmailInput(emailInput);
    setPasswordInput(passwordInput);
  };

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

export default NoteAppPage;
