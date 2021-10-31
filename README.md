# tool
### front
#### 環境構築
- package.jsonあるPathで
```
npm ci
npm run build
```
./buildができているのを確認
#### ディレクトリ構造
```
│  Dockerfile
│  
├─nginx
│      default.conf
│      
└─resource_tool_frontend
    │  .gitignore
    │  package-lock.json
    │  package.json
    │  README.md
    │  tsconfig.json
    │  
    ├─build
    │              
    ├─node_modules
    │          
    ├─public
    │      favicon.ico
    │      index.html
    │      logo192.png
    │      logo512.png
    │      manifest.json
    │      robots.txt
    │      
    └─src
            App.css
            App.test.tsx
            App.tsx
            index.css
            index.tsx
            logo.svg
            react-app-env.d.ts
            reportWebVitals.ts
            setupTests.ts
```

### backend
- package.jsonあるPathで
```
npm ci
npm run build
```
./distができているのを確認
#### ディレクトリ構造
```
│  app.env
│  
├─mysql
│  │  Dockerfile
│  │  mysql.env
│  │  
│  ├─conf
│  │      my.cnf
│  │      
│  └─sql
│          init.sql
│          
└─resource_tool_backend
    │  .gitignore
    │  Dockerfile
    │  package-lock.json
    │  package.json
    │  tsconfig.json
    │  webpack.config.js
    │  
    ├─dist
    │      main.js
    │      
    ├─node_modules
    |
    └─src
        ├─application
        │  ├─repositories
        │  │      .gitkeep
        │  │      
        │  ├─usecases
        │  │      .gitkeep
        │  │      
        │  └─utils
        │          .gitkeep
        │          
        ├─controller
        │      .gitkeep
        │      
        ├─domain
        │  ├─models
        │  │      .gitkeep
        │  │      
        │  └─value-objects
        │          .gitkeep
        │          
        └─infrastructure
            │  server.ts
            │  
            └─routers
                    .gitkeep
```

### docker起動
docker-composeあるパスで
```
docker-compose build
docker-compose up -d
```

### 動作確認
- localhost:3000にアクセス
- 実行イメージのようになるはず


### プログラムに更新があったとき
再度更新があったほうのpackage.jsonがあるパスで
```
npm run build
```

Docker再起動
docker-composeあるパスで
```
docker-compose stop
docker-compose build
docker-compose up -d
```

### MySQL
Docker内のMySQLにアクセス
```
docker exec -it (DBのコンテナ名) mysql -u (app.envで指定したユーザー名) -p
```
パスワードを求められるので、app.envで指定したパスワードを入力<br>
その後SQLでMySQL操作できます
- 操作するDBの指定
  - use (app.envで指定したDB名);
- Table 作成
  - create table member (id int, name varchar(10));
- データ追加
  - insert into member values (1, 'sasamori');

