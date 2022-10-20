import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'DataSourceMongoDB',
  connector: 'mongodb',
  url: 'mongodb+srv://Rodrigo:123@mongoapirest.qfk6oqi.mongodb.net/test',
  host: 'localhost',
  port: 27017,
  user: 'Rodrigo',
  password: '123',
  database: 'MongoApiRest',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class DataSourceMongoDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'DataSourceMongoDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.DataSourceMongoDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
