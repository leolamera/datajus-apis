import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './localauth.guard';

@Controller()
export class AuthController {
    
    constructor(
        private authService: AuthService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('authUser')
    async login(@Request() req: any) {
        return this.authService.login(req.user)
    }
}
