import L, { LatLng, LatLngBounds } from "leaflet";
import osmtogeojson from "osmtogeojson";
import { useState } from "react";
import { useMapEvents, Rectangle, SVGOverlay } from "react-leaflet";
import { useQuery } from "react-query";
import { useOSM } from "../../services/use-osm";
import { createColumnsDef } from "../table/columns-definition";
import { Table } from "../table/table";
import { ShowLoading } from './geolocation.style';


export const GeolocationBox: React.FC = ({ }) => {
    const columns = createColumnsDef();
    const [points, setPoints] = useState<LatLng[]>([]);
    const { osmQueryKeys, getOSMData } = useOSM();
    const [bounds, setBounds] = useState(new LatLngBounds([0, 0], [0, 0]))
    const [geoJsonData, setGeoJsonData] = useState({});

    const purpleOptions = { color: 'purple' }
    const map = useMapEvents({
        click(e) {
            if (points.length === 0) {
                setPoints([e.latlng]);
                setBounds(L.latLngBounds([0, 0], [0, 0]));
                setGeoJsonData({});
            } else {
                setBounds(L.latLngBounds(points[0], e.latlng));
                setPoints([]);
            }
        }
    })

    const { isLoading } = useQuery({
        queryKey: [osmQueryKeys.getOSMData],
        queryFn: () => getOSMData(bounds.getSouthWest().lng, bounds.getSouthWest().lat, bounds.getNorthEast().lng, bounds.getNorthEast().lat),
        refetchOnWindowFocus: false,
        onSuccess: (data) => { setGeoJsonData(osmtogeojson(data).features); },
        enabled: bounds.getSouthWest().lat != 0
    });

    return (
        <>
            <Rectangle pathOptions={purpleOptions} bounds={bounds} />
            {!isLoading ? (
        <>
          {
           Object.keys(geoJsonData).length && <Table data={geoJsonData} columns={columns} ></Table>
            }
        </>
      ) : (
        <ShowLoading> {'Sorry about the user experience, we are Loading... :)' }</ShowLoading>
      )}
            
        </>
    )
};