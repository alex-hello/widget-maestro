import { Router } from "express";

export const PageController = (router: Router) => {
  router.post('/create', (req, res) => {});
  router.get('/get/:id', (req, res) => {});
  router.get('/list', (req, res) => {});
}
