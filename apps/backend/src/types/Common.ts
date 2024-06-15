import { Request } from "express";

export interface GeneralRequest<T> extends Request {
  body: T
}
