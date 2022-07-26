import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '13.215.139.119',
        username: 'rtd',
        password: 'Tiny722$',
      
      });

      return dataSource.initialize();
    },
  },
];