import BingMapsReact from 'bingmaps-react'

// let mock = [ccenter]

const BingMap = ({ pushPins }) => {
    console.log(`push pins: ${pushPins[pushPins.length - 1]}`)
    return (
        <BingMapsReact
            bingMapsKey="AiQjSrmnxjN41x44MYnxVgk05tmgFT5kkZhdy56cpCCCoGRv9YljboKOYnoQA6aK"
            height="500px"
            mapOptions={{
                navigationBarMode: 'square',
            }}
            width="500px"
            viewOptions={{
                center: { latitude: 32.360081, longitude: 34.058884 },
                // center: pushPins[pushPins.length - 1],
                mapTypeId: 'grayscale',
            }}
            pushPins={pushPins}
        />
    )
}

export default BingMap
