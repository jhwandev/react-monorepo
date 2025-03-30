import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { symbol } = body;

  if (!symbol) {
    return NextResponse.json({ error: "심볼이 필요합니다" }, { status: 400 });
  }

  try {
    const price = await getBinancePrice(symbol);
    console.log(price);
    return NextResponse.json({ price });
  } catch (error) {
    return NextResponse.json({ error: "가격 조회 실패" }, { status: 500 });
  }
}

async function getBinancePrice(symbol: string) {
  try {
    const symbolWithPair = `${symbol}USDT`;
    const response = await fetch(
      `https://api.binance.com/api/v3/ticker/price?symbol=${symbolWithPair}`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`API 요청 실패: ${response.status}`);
    }

    const data = await response.json();
    return data.price;
  } catch (error) {
    console.error("바이낸스 API 요청 중 오류 발생:", error);
    throw error;
  }
}
