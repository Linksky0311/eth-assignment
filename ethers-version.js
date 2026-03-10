// ethers-version.js
require('dotenv').config();
const { ethers } = require('ethers'); // ethers 라이브러리 불러오기

async function main() {
    // 1. Infura를 통해 이더리움 네트워크에 연결 (Provider 설정)
    // 3번에서 썼던 URL을 그대로 사용합니다.
    const provider = new ethers.JsonRpcProvider(process.env.INFURA_URL);

    try {
        // 2. 최신 블록 번호 가져오기
        const blockNumber = await provider.getBlockNumber();

        // 3. 해당 블록의 상세 정보(트랜잭션 포함) 가져오기
        const block = await provider.getBlock(blockNumber);

        console.log("--- ethers.js 결과 ---");
        console.log("최신 블록 번호:", blockNumber);
        console.log("트랜잭션 수:", block.transactions.length);

    } catch (error) {
        console.error("에러 발생:", error);
    }
}

main();