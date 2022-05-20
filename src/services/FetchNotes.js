import { checkError, client } from './client';

export async function fetchNotes() {
  const resp = await client.from('Reminders').select('*');
  return checkError(resp);
}

export async function fetchOneNote(id) {
  const resp = await client
    .from('Reminders')
    .select('*')
    .match({ id })
    .single();
    console.log(resp);
  return checkError(resp);
}

export async function makeNote(note) {
  const resp = await client.from('Reminders').insert(note);
  return checkError(resp);
}

export async function editNote(change) {
  console.log(change);
  const resp = await client
    .from('Reminders')
    .update(change)
    .match({ id: change.id });
  return checkError(resp);
}

export async function deleteNote(id) {
  const resp = await client.from('Reminders').delete().match({ id }).single();
  return checkError(resp);
}
