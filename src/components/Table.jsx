import React, { useMemo } from "react";
import { createUseStyles } from "react-jss";
import { useTable } from "react-table";

const CustomizedTable = () => {
  const columns = useMemo(
    () => [
      { Header: "Id", accessor: "Id" },
      { Header: "Occupancy", accessor: "Occupancy" },
      { Header: "Gender", accessor: "Gender" },
      { Header: "Available", accessor: "Available" },
      { Header: "Visible", accessor: "Visible" },
      { Header: "Amenities", accessor: "Amenities" },
      { Header: "Rules", accessor: "Rules" },
      { Header: "Price", accessor: "Price" },
      { Header: "Photos", accessor: "Photos" },
    ],
    []
  );
  const data = useMemo(
    () => [
      {
        Id: "123456",
        Occupancy: "Single",
        Price: "$15,000",
        Gender: "Male",
        Rules: "Rules",
        Amenities: "Amenities",
        Photos: "Photos",
        Visible: "true",
        Available: "true",
      },
      {
        Id: "123456",
        Occupancy: "Single",
        Price: "$15,000",
        Gender: "Male",
        Rules: "Rules",
        Amenities: "Amenities",
        Photos: "Photos",
        Visible: "true",
        Available: "true",
      },
    ],
    []
  );
  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  const classes = useStyles();
  return (
    <table className={classes.table} {...getTableProps()}>
      <thead className={classes.thead}>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className={classes.trHeader}
          >
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={classes.tr}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className={classes.td}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomizedTable;

const useStyles = createUseStyles({
  table: {
    display: "grid",
    gridAutoRows: "min-content",
    rowGap: "3rem",
    backgroundColor: "#f1f2fa",
    margin: "2rem",
    borderRadius: "10px",
    padding: "1rem",
  },
  thead: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#242E3E",
    color: "rgba(255,255,255,1)",
    borderRadius: "10px",
    fontWeight: 900,
    fontSize: "1.1rem",
  },
  trHeader: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    textAlign: "center",
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  tr: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    textAlign: "center",
    marginBottom: "2rem",
  },
  td: {
    color: "#000",
  },
  tbody: {
    textAlign: "center",
  },
});
