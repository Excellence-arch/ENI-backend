import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}
    async getUsers() {
        const result = await this.prisma.user.findMany()
        return result;
    }

    async postUsers(data: object) {
        const resp = await this.prisma.user.create({data: data});
        return resp;
    }
}
