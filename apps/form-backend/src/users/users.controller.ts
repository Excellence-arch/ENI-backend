import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    postUsers(@Req() req: Request) {
        return this.userService.postUsers(req.body)
    }
}
