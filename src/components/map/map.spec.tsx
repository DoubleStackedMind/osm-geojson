import { render, screen } from '@testing-library/react';
import { MapContainer, TileLayer } from 'react-leaflet';


describe('Map component', () => {
  it('Map is defined', () => {
    const zoom = 13;
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const { container } = render(
      <MapContainer center={[51.505, -0.09]}zoom={zoom}>
        <TileLayer url={tileUrl} />
      </MapContainer>
    );

    expect(container).toMatchSnapshot();
    expect(container).toBeDefined();
    
  });

  it('tile layer to exist', () => {
    const zoom = 13;
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    const { container } = render(
      <MapContainer center={[51.505, -0.09]}zoom={zoom}>
        <TileLayer url={tileUrl} />
      </MapContainer>
    );

    const tileLayer = screen.getByRole('img');
  
    expect(tileLayer).toBeDefined()
    expect(tileLayer).toMatchSnapshot()
    
  });
});