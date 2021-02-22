import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
  // Reply with a hello world when no name param is provided
  res.send('Hello, World!');
});

router.get('/:name', (req: Request, res: Response) => {
  let { name } = req.params;
  res.send(`Hello, ${name}`);
});

export const WelcomeController: Router = router;
