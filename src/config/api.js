export default {
    market: { //币币交易行情接口
        ws: '/market/market-ws',
        test: '/market/test',
        products: '/products',
        thumb: '/market/symbol-thumb',
        thumbTrend: '/market/symbol-thumb-trend',
        plate: '/market/exchange-plate', //主动查询的盘口信息
        platemini: '/market/exchange-plate-mini', //获取10条数据
        platefull: '/market/exchange-plate-full', //获取所有数据
        trade: '/market/latest-trade', //主动查询的实时成交信息
        symbolInfo: '/market/symbol-info',
        coinInfo: '/market/coin-info',
        indexData: "/market/index_info"
    }
}
