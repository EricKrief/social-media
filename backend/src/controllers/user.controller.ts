import { Request, Response } from 'express';
import { User } from '../models/user';
import { HttpStatus } from '../models/http-status';
import * as userService from '../services/user.service';
import logger from '../utils/logger';

export async function getAllUsers(request: Request, response: Response) {
  try {
    logger.info('Querying all users');
    const users = await userService.getAllUsers();
    return response.status(HttpStatus.OK).send(users);
  }
  catch (err) {
    logger.error(err);
    return response.status(HttpStatus.INTERNAL_SERVER)
      .send('An error occured while getting users');
  }
}

export async function getUserById(request: Request, response: Response) {
  try {
    logger.info(`Querying user with id '${request.params.id}'`);
    const user = await userService.getUserById(request.params.id);
    return response.status(HttpStatus.OK).send(user);
  }
  catch (err) {
    logger.error(err);
    return response.status(HttpStatus.INTERNAL_SERVER)
      .send(`An error occured while getting user with id '${request.params.id}'`);
  }
}

export async function createUser(request: Request<{}, {}, User>, response: Response) {
  try {
    logger.info('Creating new user');
    logger.debug(request.body, 'userController.createUser');
    const user = await userService.createUser(request.body);
    return response.status(HttpStatus.CREATED).send(user);
  }
  catch (err) {
    logger.error(err);
    return response.status(HttpStatus.INTERNAL_SERVER)
      .send('An error occured while creating user');
  }
}

export async function updateUser(request: Request<{}, {}, Partial<User>>, response: Response) {
  try {
    logger.info(`Updating user with id '${request.body.id}'`);
    logger.debug(request.body, 'userController.updateUser');
    await userService.updateUser(request.body);
    return response.sendStatus(HttpStatus.NO_CONTENT);
  }
  catch (err) {
    logger.error(err);
    return response.status(HttpStatus.INTERNAL_SERVER)
      .send(`An error occured while updating user with id '${request.body.id}'`);
  }
}

export async function deleteUser(request: Request, response: Response) {
  try {
    logger.info(`Deleting user with id '${request.params.id}'`);
    await userService.deleteUser(request.params.id);
    return response.sendStatus(HttpStatus.NO_CONTENT);
  }
  catch (err) {
    logger.error(err);
    return response.status(500).send(`An error occured while deleting user with id '${request.params.id}'`);
  }
}