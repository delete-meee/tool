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
│  .gitignore
│  docker-compose.yaml
│  package-lock.json
│  package.json
│  README.md
│  tree.txt
│  tsconfig.json
│  
├─build
│  │  asset-manifest.json
│  │  favicon.ico
│  │  index.html
│  │  logo192.png
│  │  logo512.png
│  │  manifest.json
│  │  robots.txt
│  │  
│  └─static
│      ├─css
│      │      main.a617e044.chunk.css
│      │      main.a617e044.chunk.css.map
│      │      
│      ├─js
│      │      2.0fa2bbb8.chunk.js
│      │      2.0fa2bbb8.chunk.js.LICENSE.txt
│      │      2.0fa2bbb8.chunk.js.map
│      │      3.7536db93.chunk.js
│      │      3.7536db93.chunk.js.map
│      │      main.3e149e3f.chunk.js
│      │      main.3e149e3f.chunk.js.map
│      │      runtime-main.f7d29923.js
│      │      runtime-main.f7d29923.js.map
│      │      
│      └─media
│              logo.6ce24c58.svg
│              
├─nginx
│      default.conf
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
│  docker-compose.yaml
│  Dockerfile
│  tree.txt
│  
├─mysql
│  │  mysql.env
│  │  
│  └─conf
│          my.cnf
│          
└─resource_tool_backend
    │  .gitignore
    │  package-lock.json
    │  package.json
    │  tsconfig.json
    │  webpack.config.js
    │  
    ├─dist
    │      main.js
    │      
    ├─node_modules
    │          
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
- 最初に以下のコマンド実行
```bash
docker network create api-network
```
その後、それぞれのdocker-compose up -d

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

### 動作確認
- localhost:3000にアクセス
- 実行イメージのようになるはず
