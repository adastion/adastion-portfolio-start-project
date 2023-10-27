import { Map, YMaps } from 'react-yandex-maps'

export const MapContainer = () => (
  <YMaps>
    <Map defaultState={{ center: [53.902284, 27.561831], zoom: 10 }} />
  </YMaps>
)
