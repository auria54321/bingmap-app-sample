import { ReactBingmaps } from 'react-bingmaps'

import { getPolylineByPoints, getPushPinsByPoints } from '../utils'

const mapInitialProps = {
    center: [32.0853, 34.7818],
    zoom: 8,
}

const BingMap = ({ points }) => {
    return (
        <ReactBingmaps
            id="one"
            bingmapKey={
                process.env.BING_MAP_KEY ||
                'AiQjSrmnxjN41x44MYnxVgk05tmgFT5kkZhdy56cpCCCoGRv9YljboKOYnoQA6aK' // API KEY IS HERE JUST FOR DEMONSTRATION
            }
            center={
                points.length > 0
                    ? points[points.length - 1]
                    : mapInitialProps.center
            }
            zoom={mapInitialProps.zoom}
            className="customClass"
            polyline={getPolylineByPoints(points)}
            pushPins={getPushPinsByPoints(points)}
        ></ReactBingmaps>
    )
}

export default BingMap
