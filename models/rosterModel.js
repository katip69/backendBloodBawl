import * as db from '../db/db.js'

export const getRosters = () => {
  return db.query('SELECT * FROM roster')
}

export const insertRoster = async (rosterName, rosterPrice, apothecary) => {
  await db.query(
    'INSERT INTO roster (rostername, rrprice, apothecary) VALUES ($1, $2, $3)',
    [rosterName, rosterPrice, apothecary]
  )
}

export const deleteRoster = async (rosterId) => {
  await db.query('DELETE FROM roster WHERE rosterid = $1', [rosterId])
}