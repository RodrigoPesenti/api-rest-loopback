import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataSourceMongoDbDataSource} from '../datasources';
import {Carrito, CarritoRelations} from '../models';

export class CarritoRepository extends DefaultCrudRepository<
  Carrito,
  typeof Carrito.prototype.ID,
  CarritoRelations
> {
  constructor(
    @inject('datasources.DataSourceMongoDB') dataSource: DataSourceMongoDbDataSource,
  ) {
    super(Carrito, dataSource);
  }
}
