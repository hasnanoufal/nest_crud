import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UserEntity) private usersRepository: Repository<UserEntity>) { }

    async getUsers(): Promise<UserEntity[]> {
        return await this.usersRepository.find();
    }

    async getUser(_id: number): Promise<UserEntity[]> {
        console.log('testing',_id);
        
        return await this.usersRepository.find({
            select: ["name", "email", "password", "key"],
            where: [{ "id": _id }]
        });
    }

    async createUser(user: UserEntity){
        console.log('user create::',user);
        
        this.usersRepository.save(user);
    }

    async updateUser(user: UserEntity) {
        this.usersRepository.save(user);
    }

    async deleteUser(user: UserEntity) {
        this.usersRepository.delete(user);
    }
}
