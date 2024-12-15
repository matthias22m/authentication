import { Injectable } from '@nestjs/common';

export type User = {
    userId : number,
    username : string,
    password : string,
}

// write mock data  for users
export const users: User[] = [
    {
        userId: 1,
        username: 'bereket',
        password: 'bereket123',
    },
    {
        userId: 2,
        username: 'henok',
        password: 'henok123',
    },
];

@Injectable()
export class UsersService {
    async findByName(username: string): Promise<User | undefined> {
        return users.find(user => user.username === username);
    }
}
