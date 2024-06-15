import * as widgetRepo from '../repository/WidgetsRepository';
import * as widgetVersionsRepo from '../repository/WidgetsVersionsRepository';
import {Request, Response} from "express";

export const onCreate = async (req: Request, res: Response) => {
  try {
    const widget = await widgetRepo.createOrUpdateWidget(req.body);
    if (widget) {
      console.log(
        {
          configurations: req.body.configurations,
          type: req.body.type,
          version: req.body.version,
          widgetId: widget.id
        }
      )
      const version = await widgetVersionsRepo.createOrUpdateWidgetVersion({
        configurations: req.body.configurations,
        type: req.body.type,
        version: req.body.version,
        widgetId: widget.id
      });
    } else {
      throw 'error'
    }
  } catch (error) {
    res.send({ error })
  }
};

