import type {CodegenConfig} from '@graphql-codegen/cli';
import envConfig from './src/utils/envConfig';

const config: CodegenConfig = {
  generates: {
    './src/services/api/fifoServer.ts': {
      schema: envConfig.SERVER_URL + '/graphql',
      documents: './src/graphql/fifoServer/*.gql',
      plugins: [
        {
          add: {
            content: '//@ts-nocheck',
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        fetcher: 'graphql-request',
        exposeQueryKeys: true,
        exposeFetcher: true,
      },
    },
  },
};

export default config;
