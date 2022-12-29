import CandleStick from '../apexchart/candlestick.jsx';
const TableContents1 = () => {
    return (
        <div className="flex flex-row bg-white">
            <div className='px-5 py-4'>
                <h2 className="font-semibold">Key Level</h2>
                <h2 >EMA 20</h2>
                <h4 className="font-semibold text-sm">Bullish</h4>
                <h2 className="pt-5">EMA 50</h2>
                <h4 className="font-semibold text-sm">Bullish</h4>
                <h2 className="pt-5">EMA 100</h2>
                <h4 className="font-semibold text-sm">Bullish</h4>
                <h2 className="pt-5">EMA 200</h2>
                <h4 className="font-semibold text-sm">Bullish</h4>
            </div>
            <div className='px-12 py-4'>
                <h2 className="font-semibold">Moving Average</h2>
                <h2 >20 Days</h2>
                <h4 className="font-semibold text-sm">Bullish</h4>
                <h2 className="pt-5">50 Days</h2>
                <h4 className="font-semibold text-sm">Bullish</h4>
                <h2 className="pt-5">100 Days</h2>
                <h4 className="font-semibold text-sm">Bullish</h4>
                <h2 className="pt-5">200 Days</h2>
                <h4 className="font-semibold text-sm">Bullish</h4>
            </div>
            <div className='h-40'>
                <div className='w-full'>
                    <CandleStick />
                </div>
            </div>
        </div>

    )
}
export default TableContents1