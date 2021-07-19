import BingMapsReact from 'bingmaps-react'
import { ReactBingmaps } from 'react-bingmaps'

let pushPins = [
    {
        location: [13.0827, 80.2707],
        option: { color: 'red' },
        // addHandler: { type: 'click', callback: this.callBackMethod },
    },
]

const BingMap = () => {
    // let center = new Microsoft.Maps.Location(47.6149, -122.1941)
    // let pin = new Microsoft.Maps.Pushpin(center)
    return (
        <BingMapsReact
            bingMapsKey="AiQjSrmnxjN41x44MYnxVgk05tmgFT5kkZhdy56cpCCCoGRv9YljboKOYnoQA6aK"
            height="500px"
            mapOptions={{
                navigationBarMode: 'square',
            }}
            width="500px"
            viewOptions={{
                center: { latitude: 42.360081, longitude: -71.058884 },
                mapTypeId: 'grayscale',
            }}
            pushPins={[{ center: { latitude: 30, longitude: 30 } }]}
        />
    )
}

export default BingMap
