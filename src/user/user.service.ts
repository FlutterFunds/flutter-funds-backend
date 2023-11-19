import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  create(email: string, password: string) {
    const user = this.repo.create({ email, password });
    return this.repo.save(user);
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id })
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  async update(id: number, attrs: Partial<User>) {
    const user: User = await this.findOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    Object.assign(user, attrs);
    // prefer save over insert and update as it will call the hooks
    return this.repo.save(user);
  }

  async remove(id: number) {
    // remove will call the hooks while delete will not
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException();
    }
    return this.repo.remove(user);
  }
}
