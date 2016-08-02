System.config({
    map: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.js',
        ts: 'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
        typescript: 'https://npmcdn.com/typescript@1.9.0-dev.20160409/lib/typescript.js'
    },
    packages: {
        'app': { main: 'main.ts',  defaultExtension: 'ts' }
    },
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    }
});
