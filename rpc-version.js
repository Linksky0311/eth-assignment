require('dotenv').config();

async function getEthData() {
    const url = process.env.INFURA_URL;

    // 1. 최신 블록 번호(16진수) 가져오기
    const blockNumRes = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            jsonrpc: "2.0",
            method: "eth_blockNumber",
            params: [],
            id: 1
        })
    });
    const blockNumData = await blockNumRes.json();
    const latestBlockHex = blockNumData.result;

    // 2. 해당 블록의 트랜잭션 수 가져오기
    const txCountRes = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            jsonrpc: "2.0",
            method: "eth_getBlockTransactionCountByNumber",
            params: [latestBlockHex],
            id: 2
        })
    });
    const txCountData = await txCountRes.json();

    console.log("--- 결과 출력 ---");
    console.log("최신 블록 번호:", parseInt(latestBlockHex, 16));
    console.log("트랜잭션 수:", parseInt(txCountData.result, 16));
}

getEthData();