"use client"
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Column, useTable } from 'react-table';
import { Resolution } from '../interfaces';

interface ResolutionTableProps {
  resolutions: Resolution[];
}

const ResolutionTable: React.FC<ResolutionTableProps> = ({ resolutions }) => {
  const columns: Column<Resolution>[] = React.useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Votes',
        accessor: 'votes',
      },
      {
        Header: 'Actions',
        Cell: ({ row }: { row: { original: Resolution } }) => (
          <Button variant="contained" size="small">
            {row.original.status === 'pending' ? 'Vote' : 'View'}
          </Button>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: resolutions });

  return (
    <TableContainer component={Paper}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>{column.render('Header')}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResolutionTable;