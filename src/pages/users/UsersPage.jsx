import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAction } from "../../hooks/useAction";
import { useSelector } from "react-redux";
import APP_ENV from "../../env";
import {
    Box,
    Pagination,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.action.active,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const UsersPage = () => {
    const [pageSize, setPageSize] = useState(5);
    const [page, setPage] = useState(1);

    const { data } = useSelector((store) => store.user);
    const { loadUsers } = useAction();

    const handleChange = (event) => {
        setPageSize(event.target.value);
        localStorage.setItem("pageSize", event.target.value);
    };

    useEffect(() => {
        const localSize = localStorage.getItem("pageSize");
        if (localSize != null) {
            if(localSize > 0) {
                setPageSize(localSize);
            } 
        }
    }, []);

    useEffect(() => {
        loadUsers(page, pageSize);
    }, [page, pageSize]);

    const handlePageChange = async (event, value) => {
        setPage(value);
        // await loadUsers(value);
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell
                                sx={{ width: "25%" }}
                                align="center"
                            >
                                Id
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ width: "20%" }}
                                align="center"
                            >
                                Email
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ width: "10%" }}
                                align="center"
                            >
                                Username
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ width: "15%" }}
                                align="center"
                            >
                                Name
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ width: "10%" }}
                                align="center"
                            >
                                Role
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ width: "20%" }}
                                align="center"
                            >
                                Pricture
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.users.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell
                                    align="center"
                                    component="th"
                                    scope="row"
                                >
                                    {user.id}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {user.email}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {user.userName}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {user.firstName + " " + user.lastName}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {user.role}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <img
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                        }}
                                        src={`${APP_ENV.USER_IMAGE_URL}${user.image}`}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                <Pagination
                    color="primary"
                    count={data.pageCount}
                    page={page}
                    onChange={handlePageChange}
                />
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pageSize}
                        // defaultValue={pageSize}
                        label="Size"
                        onChange={handleChange}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>
    );
};

export default UsersPage;
