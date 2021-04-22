import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("connections")
class Connection {

    @PrimaryColumn()
    id: string;


    admin_id: string;

    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id)
            this.id = uuid();
    }
}

export { Connection };