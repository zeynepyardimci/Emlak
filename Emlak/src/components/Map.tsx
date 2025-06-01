import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position: [number, number] = [40.6531, 35.8338]; // Amasya, Hacılar Meydanı koordinatları

const Map = () => {
  return (
    <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          Emlak Dükkanımız burada! <br /> Hacılar Meydanı, Erdem Sk., Amasya
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

