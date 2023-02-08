import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [User],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
