export default async function handler(req, res) {
  const ticker = String(req.query.ticker || '').trim().toUpperCase();
  const horizon = Number(req.query.horizon || 20);
  if (!ticker) return res.status(400).json({ error: 'ticker_required' });
  const sample = {
    ticker,
    price: 205.1,
    intrinsic: 232.4,
    mos: 13.3,
    signal: 'BUY',
    metrics: [['P/E','28.4'],['PEG','2.1'],['P/B','45.7'],['Revenue Growth','8.4%'],['Operating Margin','31.2%'],['FCF Margin','27.6%']],
    series: { years:[2020,2021,2022,2023,2024,2025], price:[75,130,95,190,225,205], ebita:[66,69,72,83,98,105], fcf:[64,93,92,99,109,98] },
    sources:['Yahoo Finance historical prices','SEC filings / annual reports','ETF issuer fact sheets']
  };
  return res.status(200).json({ ...sample, horizon });
}
