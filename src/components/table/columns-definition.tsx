
import { createColumnHelper } from '@tanstack/react-table';

export interface properties {
  changeset: number;
  colour: string;
  from: string;
  id: string;
  name:string;
  network: string;
  user: string;
}

export interface geometry {
type: string;
coordinates:[];
}

export interface features {
  id:string;
  type:string;
  geometry: geometry;
  properties: properties;
}

export const createColumnsDef = () => {
  const columnHelper = createColumnHelper<features>();

  return [
    columnHelper.accessor('type', {
      header: 'Type',
      cell: ({ row }) => ( 
          <div>{row.original.type}</div>
      )
    }),
    columnHelper.accessor('properties', {
      header: 'properties',
      cell: ({ row }) => ( 
          <div>{row.original.properties.name}</div>
      )
    }),
    columnHelper.accessor('properties', {
      header: 'user',
      cell: ({ row }) => ( 
          <div>{row.original.properties.user}</div>
      )
    }),
    columnHelper.accessor('properties', {
      header: 'network',
      cell: ({ row }) => ( 
          <div>{row.original.properties.network}</div>
      )
    }),
  
  ];
};
