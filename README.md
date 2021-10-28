# tool
### front
#### 環境構築
- package.jsonあるPathで
```
npm ci
npm run build
```
./buildができているのを確認

### backend
- package.jsonあるPathで
```
npm ci
npm run build
```
./distができているのを確認

### docker起動
- 最初に以下のコマンド実行
```bash
docker network create api-network
```
その後、それぞれのdocker-compose up -d

### 動作確認
- localhost:3000にアクセス
- 実行イメージのようになるはず
