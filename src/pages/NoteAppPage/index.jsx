import { useState, useEffect } from "react";
import Profile from "../../components/Profile";
import NoteForm from "../../components/NoteForm";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";
import NoteList from "../../components/NoteList";
import NoteAppCard from '../../components/NoteAppCard';
import useNoteStore from "../../store/useNoteStore";
import noteService from "../../services/noteService";
import styles from "./NoteAppPage.module.css";

function NoteAppPage() {
  const { setNotes } = useNoteStore();
  
  useEffect(() => {
    const getNotes = async () => {
      const notes = await noteService.getNotesFromBackend();
      setNotes(notes);
    };

    getNotes()
  }, [])

  return (
    <NoteAppCard>
      <Profile />
      <NoteForm />
      <Filter />
      <Sort />
      <NoteList />
    </NoteAppCard>
  );
}

export default NoteAppPage;
