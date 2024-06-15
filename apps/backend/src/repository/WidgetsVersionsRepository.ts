import { UpsertWidgetVersion } from "../types/Widget";
import dbClient from "../config/db";

export const createOrUpdateWidgetVersion = (widget: UpsertWidgetVersion) => {
  return new Promise((resolve, reject) => {
    dbClient.query(
      'INSERT into widgets_versions (version, type, widget_id, configurations) VALUES($1, $2, $3, $4) RETURNING *',
      [widget.version, widget.type, widget.widgetId, JSON.stringify(widget.configurations)],
      (err, result) => {
        if (err) {
          reject(err);
          console.error('Error executing query', err);
        } else {
          resolve(result.rows);
          console.log('Query result:', result.rows);
        }
      });
  })
}
