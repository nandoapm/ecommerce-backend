import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateTableUser1680741696194 } from './migration/1680741696194-create_table_user';
import { CreateTableState1680802605910 } from './migration/1680802605910-create_table_state';
import { CreateTableCity1680802620318 } from './migration/1680802620318-create_table_city';
import { CreateTableAddress1681157746795 } from './migration/1681157746795-create_table_address';
import { AlterTableState1680807720722 } from './migration/1680807720722-alter-table-state';
import { InsertInState1680807739899 } from './migration/1680807739899-insert-in-state';
import { InsertInCity1680807748223 } from './migration/1680807748223-insert-in-city';
import { UserEntity } from './user/entities/user.entity';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AddressModule } from './address/address.module';
import { StateEntity } from './state/entities/state.entity';
import { CityEntity } from './city/entities/city.entity';
import { CacheModule } from './cache/cache.module';
import { AddressEntity } from './address/entities/address.entity';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './guards/role.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      entities: [UserEntity, StateEntity, CityEntity, AddressEntity],
      migrations: [
        CreateTableUser1680741696194,
        CreateTableState1680802605910,
        CreateTableCity1680802620318,
        CreateTableAddress1681157746795,
        AlterTableState1680807720722,
        InsertInState1680807739899,
        InsertInCity1680807748223,
      ],
      migrationsRun: true,
    }),
    UserModule,
    StateModule,
    CityModule,
    AddressModule,
    CacheModule,
    AuthModule,
    JwtModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
