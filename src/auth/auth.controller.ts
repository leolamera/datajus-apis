import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './localauth.guard';

@Controller()
export class AuthController {

    @UseGuards(LocalAuthGuard)
    @Post('authUser')
    async login(@Request() req: any) {
        return req.user
    }
}
