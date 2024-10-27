import React, { useEffect } from "react";
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
    }
}));

const UsersPage = () => {    
    const { users } = useSelector(store => store.user);
    const { loadUsers } = useAction();

    useEffect(() => {
        loadUsers();        
    },[]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell sx={{ width:"25%" }} align="center">
                            Id
                        </StyledTableCell>
                        <StyledTableCell sx={{ width:"20%" }} align="center">
                            Email
                        </StyledTableCell>
                        <StyledTableCell sx={{ width:"10%" }} align="center">
                            Username
                        </StyledTableCell>
                        <StyledTableCell sx={{ width:"15%" }} align="center">
                            Name
                        </StyledTableCell>
                        <StyledTableCell sx={{ width:"10%" }} align="center">
                            Role
                        </StyledTableCell>
                        <StyledTableCell sx={{ width:"20%" }} align="center">
                            Pricture
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <StyledTableRow key={user.id}>
                            <StyledTableCell align="center" component="th" scope="row">
                                {user.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {user.email}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {user.userName}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {user.firstName + ' ' + user.lastName}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {user.role}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <img style={{width: "100px", height: "100px"}} src={`${APP_ENV.USER_IMAGE_URL}${user.image}`}/>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersPage;
