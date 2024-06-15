import {UpsertWidget, Widget} from "../types/Widget";
import dbClient from "../config/db";

export const createOrUpdateWidget = (widget: UpsertWidget): Promise<Widget> => {
  return new Promise((resolve, reject) => {
    dbClient.query(
      'INSERT into widgets (name, team, pointer) VALUES($1, $2, $3) RETURNING *',
      [widget.name, widget.team, widget.versionId],
      (err, result) => {
        if (err) {
          reject(err);
          console.error('Error executing query', err);
        } else {
          resolve(result.rows ? result.rows[0] : null);
          console.log('Query result:', result.rows);
        }
      });
  })
}
