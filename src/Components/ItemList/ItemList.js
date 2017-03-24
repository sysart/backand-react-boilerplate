// @flow

import React from "react";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import CircularProgress from "material-ui/CircularProgress";

const TableExampleSimple = ({ items, loading }) => {
  if (loading === true) return <CircularProgress />;

  if (!items) return null;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map(item => <Item key={item.id} item={item} />)}
      </TableBody>
    </Table>
  );
};

const Item = ({ item }) => (
  <TableRow key={item.id}>
    <TableRowColumn>{item.name}</TableRowColumn>
    <TableRowColumn>{item.description}</TableRowColumn>
  </TableRow>
);

export default TableExampleSimple;
