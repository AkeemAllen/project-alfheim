import React, { useMemo, useState } from "react";
import { createUseStyles } from "react-jss";
import { useTable } from "react-table";
import Modal from "../components/Modal";
import { useMutation } from "react-apollo";
import { OutlineButton } from "../components/Buttons";
import { LineInput } from "../components/Inputs";
import {
  updatePrice,
  updateAvailability,
  updateTown,
  updateStreet,
  updateParish,
  updateOccupancy,
  updateGender,
  updateVisibility,
} from "../gql/Mutations";

const CustomizedTable = ({ data }) => {
  const columns = useMemo(
    () => [
      // { Header: "Id", accessor: "id" },
      { Header: "Occupancy", accessor: "occupancy" },
      { Header: "Gender", accessor: "gender" },
      { Header: "Available", accessor: "isAvailable" },
      { Header: "Visible", accessor: "isVisible" },
      { Header: "Amenities", accessor: "amenities" },
      { Header: "Rules", accessor: "rules" },
      { Header: "Price", accessor: "price" },
      { Header: "Photos", accessor: "photos" },
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

  const [open, setOpen] = useState(false);
  const [roomId, setRoomId] = useState("");
  const [price, setPrice] = useState(undefined);
  const [occupancy, setOccupancy] = useState(undefined);
  const [gender, setGender] = useState(undefined);
  const [street, setStreet] = useState(undefined);
  const [town_city, setTown_city] = useState(undefined);
  const [parish, setParish] = useState(undefined);
  const [availability, setAvailability] = useState(undefined);
  const [visibility, setVisibility] = useState(undefined);
  const [valueToBeUpdated, setValueToBeUpdated] = useState();
  // const [toBeUpdated, setToBeUpdated] = useState(() => {});

  const handleUpdate = (id, column) => {
    setRoomId(id);
    setValueToBeUpdated(column);
    setOpen(true);
  };

  const handleChange = (event) => {
    event.preventDefault();
    switch (event.target.name) {
      case "price":
        setPrice(parseInt(event.target.value, 10));
        break;
      case "occupancy":
        setOccupancy(event.target.value);
        break;
      case "gender":
        setGender(event.target.value);
        break;
      // case "isAvailable":
      // setAvailability(event.target.value);
      // break;
      // case "isVisible":
      // setVisibility(event.target.value);
      // break;
      case "street":
        setStreet(event.target.value);
        break;
      case "parish":
        setParish(event.target.value);
        break;
      case "town_city":
        setTown_city(event.target.value);
        break;
      default:
        break;
    }
  };

  const useAppropriateFunction = () => {
    switch (valueToBeUpdated) {
      case "price":
        priceUpdate();
        break;
      case "gender":
        genderUpdate();
        break;
      case "occupancy":
        occupancyUpdate();
        break;
      case "street":
        streetUpdate();
        break;
      case "town_city":
        townUpdate();
        break;
      case "parish":
        parishUpdate();
        break;
      default:
        break;
    }
  };

  const [priceUpdate] = useMutation(updatePrice, {
    variables: {
      price,
      id: roomId,
    },
  });
  const [occupancyUpdate] = useMutation(updateOccupancy, {
    variables: {
      occupancy,
      id: roomId,
    },
  });
  const [genderUpdate] = useMutation(updateGender, {
    variables: {
      gender,
      id: roomId,
    },
  });
  const [streetUpdate] = useMutation(updateStreet, {
    variables: {
      street,
      id: roomId,
    },
  });
  const [townUpdate] = useMutation(updateTown, {
    variables: {
      town_city,
      id: roomId,
    },
  });
  const [parishUpdate] = useMutation(updateParish, {
    variables: {
      parish,
      id: roomId,
    },
  });

  const classes = useStyles();
  return (
    <table className={classes.table} {...getTableProps()}>
      <Modal open={open} handleClose={() => setOpen(false)}>
        <div
          style={{
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            justifyContent: "center",
            rowGap: "1rem",
          }}
        >
          <LineInput
            type={valueToBeUpdated === "price" ? "number" : "text"}
            label={`Update ${valueToBeUpdated}`}
            name={valueToBeUpdated}
            onChange={(e) => handleChange(e)}
          />
          <OutlineButton
            text={`Update ${valueToBeUpdated}`}
            onClick={useAppropriateFunction}
          />
        </div>
      </Modal>
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
              {row.cells.map((cell, index) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className={classes.td}
                    onClick={() =>
                      handleUpdate(row.original.id, cell.column.id)
                    }
                  >
                    {(index === 2) | (index === 3) ? (
                      <p
                        className={
                          cell.value === true ? classes.true : classes.false
                        }
                      >
                        {cell.value !== undefined
                          ? cell.value.toString()
                          : null}
                      </p>
                    ) : (
                      cell.render("Cell")
                    )}
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
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    textAlign: "center",
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  tr: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    textAlign: "center",
    marginBottom: "2rem",
  },
  td: {
    color: "#000",
  },
  tbody: {
    textAlign: "center",
  },
  true: {
    backgroundColor: "#7DC95F",
    borderRadius: "10px",
    width: "70%",
    margin: "auto",
    transition: "all",
    transitionDuration: "100ms",
    "&:hover": {
      border: "2px solid #A3B4FA",
    },
  },
  false: {
    backgroundColor: "#F8B202",
    borderRadius: "10px",
    width: "70%",
    margin: "auto",
    transition: "all",
    transitionDuration: "100ms",
    "&:hover": {
      border: "2px solid #A3B4FA",
    },
  },
});
