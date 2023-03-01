import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import * as React from 'react';

import { BasicTable, TableContainer, TBody, TD, TH, THead, TR } from './table.styles';

type TableProps = {
  data: any;
  columns: ColumnDef<any, any>[];
  className?: string;
};

export const Table: React.FC<TableProps> = ({ className, data, columns }) => {
  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <TableContainer>
    <BasicTable className={className}>
      <THead>
        {table.getHeaderGroups().map((headerGroup) => (
          <TR key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => (
              <TH key={index}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TH>
            ))}
          </TR>
        ))}
      </THead>
      <TBody>
        {table.getRowModel().rows.map((row, index) => (
          <TR
            key={index}
          >
            {row.getVisibleCells().map((cell, index) => (
              <TD key={index}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TD>
            ))}
          </TR>
        ))}
      </TBody>
    </BasicTable>
    </TableContainer>
  );
};
