import { GeneralRequest } from "./Common";

export enum WidgetTypes {
  Data = 'Data',
  View = 'View'
}
export type Widget = {
  id: string
  name: string
  team: string
  versionId: string
}

export type WidgetVersion = {
  id: string
  widgetId: string
  version: string
  type: WidgetTypes
  configurations: any
}
export type UpsertWidgetRequest = GeneralRequest<Omit<Widget, 'id'>>;

export type UpsertWidget = UpsertWidgetRequest['body'];
export type UpsertWidgetVersion = Omit<WidgetVersion, 'id'>;
