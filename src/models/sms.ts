import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import ExtendedBaseEntity from "./extended-base-entity";
import { User } from "./user";

@Entity()
export class Sms extends ExtendedBaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  phone_number: string;

  @Column()
  message: string;

  @ManyToOne(() => User, (user) => user.sms)
  sender: User;

  @CreateDateColumn()
  createdAt: Date;
}
