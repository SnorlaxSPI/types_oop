import { Request, Response } from 'express';
import { CreateUser } from '../services/CreateUser';

const createUser = new CreateUser;

export function createCourse(request: Request, response:Response) {
  createUser.execute({
    name: 'Alessandro',
    dev: 'Typescript'
  });

  return response.send();
};
