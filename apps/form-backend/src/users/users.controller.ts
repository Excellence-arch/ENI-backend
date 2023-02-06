import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
// import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    async getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    async postUsers(@Body() userData: {name: string; email?: string}) {
        return this.userService.postUsers(userData)
    }

    @Delete('one')
    async deleteUsers(@Body() id: {id: string}) {
        return this.userService.deleteOne(id.id)
    }

    @Delete('all')
    async deleteAllUsers() {
        return this.userService.deleteALl();
    }
}
