"use strict";

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import IAnnounce from "~/common/interfaces/announce";

@Entity()
export class Announcement implements IAnnounce {
  @PrimaryGeneratedColumn()
  public id!: number;
  @Column({ type: "text", length: 200, nullable: false })
  public title: string;
  @Column({ type: "text", nullable: true })
  public content: string;
  @CreateDateColumn()
  public createdAt!: Date;
  @UpdateDateColumn()
  public updatedAt!: Date;
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }
}