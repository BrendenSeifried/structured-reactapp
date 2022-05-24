import NoteListCom from '../../components/NoteList/NoteListCom';
import styles from './NoteList.css';

export default function ShowNotes() {
  return (
    <>
      <h1 className={styles.banner}> Famous Quotes</h1>
      <NoteListCom />
    </>
  );
}
