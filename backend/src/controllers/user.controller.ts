import { Request, Response } from 'express';
import { User } from '../models/user';
import { HttpStatus } from '../models/http-status';
import * as userService from '../services/user.service';

export async function getAllUsers(request: Request, response: Response) {
  try {
    const users = await userService.getAllUsers();
    return response.status(HttpStatus.OK).send(users);
  }
  catch (err) {
    const error = new Error('An error occured while getting users');
    return response.status(HttpStatus.INTERNAL_SERVER).send(error);
  }
}

export async function getUserById(request: Request, response: Response) {
  try {
    const user = await userService.getUserById(request.params.id);
    return response.status(HttpStatus.OK).send(user);
  }
  catch (err) {
    const error = new Error(`An error occured while getting user with id ${request.params.id}`);
    return response.status(HttpStatus.INTERNAL_SERVER).send(error);
  }
}

export async function createUser(request: Request<{}, {}, User>, response: Response) {
  try {
    const user = await userService.createUser(request.body);
    return response.status(HttpStatus.CREATED).send(user);
  }
  catch (err) {
    const error = new Error('An error occured while creating user');
    return response.status(HttpStatus.INTERNAL_SERVER).send(error);
  }
}

export async function updateUser(request: Request, response: Response) {
  try {
    await userService.updateUser(request.body);
    return response.sendStatus(HttpStatus.NO_CONTENT);
  }
  catch (err) {
    const error = new Error(`An error occured while updating user with id ${request.body.id}`);
    return response.status(HttpStatus.INTERNAL_SERVER).send(error);
  }
}

export async function deleteUser(request: Request, response: Response) {
  try {
    await userService.deleteUser(request.params.id);
    return response.sendStatus(HttpStatus.NO_CONTENT);
  }
  catch (err) {
    const error = new Error(`An error occured while deleting with id ${request.params.id}`);
    return response.status(500).send(error);
  }
}