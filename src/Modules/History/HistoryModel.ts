// src/Modules/History/HistoryModel.ts
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Host } from '../Hosts/HostModel';
import { Session } from '../Session/SessionModel';
import { User } from '../Users/UserModel';

@Entity()
export class History extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @CreateDateColumn()
  public date: Date;

  @Column('text')
  public shellOutput: string;

  @ManyToOne(() => User)
  public user: User;

  @ManyToOne(() => Host)
  public host: Host;

  @ManyToOne(() => Session)
  @JoinColumn()
  public session: Session;
}
