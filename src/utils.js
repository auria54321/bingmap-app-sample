export const getPolylineByPoints = (points) => {
    if (points.length === 0) return { location: [] }
    return {
        location: [...points, points[0]],
    }
}

export const getPushPinsByPoints = (points, option) => {
    if (points.length === 0) return { location: [] }
    return points.map((point) => {
        return {
            location: point,
            option,
        }
    })
}
