import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

//Add the columns
const columns = [
  { field: 'id', headerName: 'ID', width: 8, height: '25%' },
  {
    field: 'A',
    headerName: 'A',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-1',
    editable: true,

  },
  {
    field: 'B',
    headerName: 'B',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-2',
    editable: true,
  },
  {
    field: 'C',
    headerName: 'C',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-3',
    editable: true,
  },
  {
    field: 'D',
    headerName: 'D',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-4',
    editable: true,
  },
  {
    field: 'E',
    headerName: 'E',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-5',
    editable: true,
  },
  {
    field: 'F',
    headerName: 'F',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-6',
    editable: true,
  },
  {
    field: 'G',
    headerName: 'G',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-7',
    editable: true,
  },
  {
    field: 'H',
    headerName: 'H',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-8',
    editable: true,
  },
  {
    field: 'I' ,
    headerName: 'I',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-9',
    editable: true,
  },
  {
    field: 'J',
    headerName: 'J',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-10',
    editable: true,
  },
  {
    field: 'K',
    headerName: 'K',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-11',
    editable: true,
  },
  {
    field: 'L',
    headerName: 'L',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-12',
    editable: true,
  },
  {
    field: 'M',
    headerName: 'M',
    headerAlign: 'center',
    minWidth: 100,
    cellClassName: 'super-app-theme--cell-13',
    editable: true,
  },

];

//Add the rows
const rows = [
  {
    id: 1, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
  },

  {
    id: 2, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
  },

  {
    id: 3, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
  },

  {
    id: 4, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
  },

  {
    id: 5, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
  },

  {
    id: 6, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
  },

  {
    id: 7, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
  },

  {
    id: 8, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
  },

  {
    id: 9, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '', 
  },

  {
    id: 10, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '', 
  },

  {
    id: 11, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '',
  },
  
  {
    id: 12, A: '', B: '', C: '', D: '', E: '', F: '', G: '', H: '', I: '', J: '', K: '', L: '', 
  },
];


//Styling the CellsGrid Funtion
export default function StylingCellsGrid() {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        m: 5,
        marginLeft: '1px',
        height: '24rem',
        '& .super-app-theme--cell-1': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '1rem',
          //height: '1rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-2': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-3': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-4': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-5': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-6': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-7': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-8': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-9': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-10': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-11': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-12': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-13': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-14': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          variant: 'outlined',
          fontWeight: '600',
        },
        '& .super-app-theme--cell-15': {
          border: 1,
          borderColor: '#e8eaf6',
          //width: '5rem',
          //height: '5rem',
          variant: 'outlined',
          fontWeight: '600',
        },
      }}
    >
      <DataGrid rows={rows} columns={columns} 
      headerHeight={24} 
      rowHeight={24}
      pagination
      pageSize={12}
      rowsPerPageOptions={[0]}
      disableSelectionOnClick
      />
    </Box>
  );

}
