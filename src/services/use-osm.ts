import { HTTPClient } from '../services/utilities';

export interface data_schema {
bounds: any;
elements: any[];
}

export const useOSM = () => {

    const osmQueryKeys = {
        getOSMData: 'getOSMData'
    };

    const getOSMData = async (min_lon: number, min_lat: number, max_lon: number, max_lat: number) => {
        const datachunks: any[] = [];
        const gridSize = 0.01;
        const numRows = Math.ceil((max_lon - min_lon) / gridSize);
        const numCols = Math.ceil((max_lat - min_lat) / gridSize);
        const latDelta = (max_lon - min_lon) / numRows;
        const lngDelta = (max_lat - min_lat) / numCols;

        for (let row = 0; row < numRows; row++) {
            for (let col = 0; col < numCols; col++) {
                const cellSwLat = max_lon - (row + 1) * latDelta;
                const cellSwLng = min_lat + col * lngDelta;
                const cellNeLat = max_lon - row * latDelta;
                const cellNeLng = min_lat + (col + 1) * lngDelta;

                const response = await HTTPClient.get<data_schema>(`?bbox=${cellSwLat},${cellSwLng},${cellNeLat},${cellNeLng}`);
                datachunks.push(response.data)
            }
        }
        const mergedData = datachunks.reduce((result, current) => {
            return Object.assign(result, current);
          }, {});
        return mergedData;
    };

    return {
        osmQueryKeys,
        getOSMData,
    };
};
