import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    async getUsers() {
        const result = await this.prisma.user.findMany()
        return result;
    }

    async postUsers(data: object): Promise<User> {
        const resp = await this.prisma.user.create({data: {name: data['name'], email: data['email']}});
        return resp;
    }

    async deleteOne(id: string) {
        const resp = await this.prisma.user.delete({where: {id}});
        return resp;
    }

    async deleteALl() {
        const resp = await this.prisma.user.deleteMany();
        return resp;
    }
}
