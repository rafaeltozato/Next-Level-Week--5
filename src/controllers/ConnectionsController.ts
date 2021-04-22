import { Request, Response } from "express";
import { getCustomRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

class ConnectionsController {
    async create(request: Request, response: Response) {
        const { admin_id, user_id } = request.body;
        const connectionRepository = getCustomRepository(ConnectionsRepository);
        const connection = connectionRepository.create({ admin_id, user_id });
        await connectionRepository.save(connection);
        return response.json(connection);
    }
}

export { ConnectionsController };