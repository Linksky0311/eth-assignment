# Ethereum Data Fetcher Comparison

이 프로젝트는 JSON-RPC와 ethers.js 라이브러리를 사용하여 이더리움의 최신 블록 번호와 트랜잭션 수를 조회하고 비교하는 과제입니다.

## 프로젝트 구성
- `rpc-version.js`: 라이브러리 없이 순수 JSON-RPC 요청을 사용하는 방식
- `ethers-version.js`: ethers.js 라이브러리를 사용하여 구현한 방식

## 설치 방법 (Dependencies)
프로젝트 폴더에서 아래 명령어를 실행하여 필요한 패키지를 설치합니다.
```bash
npm install