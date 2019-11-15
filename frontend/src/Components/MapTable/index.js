import React from 'react';
import DataTable from 'react-data-table-component';

const darkTheme = {
  title: {
    fontSize: '22px',
    fontColor: '#FFFFFF',
    backgroundColor: '#333333',
  },
  contextMenu: {
    backgroundColor: '#E91E63',
    fontColor: '#FFFFFF',
  },
  header: {
    fontSize: '12px',
    fontColorActive: 'FFFFFF',
    fontColor: '#FFFFFF',
    backgroundColor: '#333333',
    borderColor: 'rgba(255, 255, 255, .12)',
  },
  rows: {
    fontColor: '#FFFFFF',
    backgroundColor: '#333333',
    borderColor: 'rgba(255, 255, 255, .12)',
    hoverFontColor: 'black',
    hoverBackgroundColor: 'rgba(0, 0, 0, .24)',
  },
  cells: {
    cellPadding: '48px',
  },
  pagination: {
    fontSize: '13px',
    fontColor: '#FFFFFF',
    backgroundColor: '#333333',
    buttonFontColor: '#FFFFFF',
    buttonHoverBackground: 'rgba(255, 255, 255, .12)',
  },
  expander: {
    fontColor: '#FFFFFF',
    backgroundColor: '#333333',
    expanderColor: '#FFFFFF',
  },
  footer: {
    separatorColor: 'rgba(255, 255, 255, .12)',
  },
};

const columns = [
  {
    name: 'Map',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Win Ratio %',
    selector: 'wr',
    sortable: true,
  },
  {
    name: 'Rounds Won',
    selector: 'won',
    sortable: true,
  },
  {
    name: 'Rounds Played',
    selector: 'played',
    sortable: true,
  },
];

const MapTable = ({data}) => (
  <DataTable
    title="Map Stats"
    columns={columns}
    data={data}
    defaultSortField="title"
    customTheme={darkTheme}
  />
);

export default MapTable;