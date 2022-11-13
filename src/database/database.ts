import dataSource from './dataSource';

export const Database = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSourceConfig = dataSource

            return dataSourceConfig.initialize();
        }
    }
]
