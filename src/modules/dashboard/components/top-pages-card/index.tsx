import {
  Box,
  styled,
  tableCellClasses,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ButtonHover from "@/modules/core/components/button-hover";
import { createTopPagesData } from "@/modules/dashboard/components/top-pages-card/utils";
import { topPagesCardSx } from "@/modules/dashboard/components/top-pages-card/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary[100],
    color: theme.palette.text.disabled,
    fontSize: 14,
    whiteSpace: "nowrap",
  },
  [`&.${tableCellClasses.body}`]: {
    color: theme.palette.text.disabled,
    fontSize: 14,
  },
}));

const TopPagesTable = () => {
  const topPagesData = [
    createTopPagesData("/ecommerce.html", 465, 6.0),
    createTopPagesData("/dashboard.html", 426, 29.0),
    createTopPagesData("/chat.html", 262, 16.0),
    createTopPagesData("/auth-login.html	", 3305, 3.7),
    createTopPagesData("/email.html", 956, 66.0),
  ];

  return (
    <Box pt={3}>
      <TableContainer component={Paper} sx={{ overflowX: "scroll" }}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Page Path</StyledTableCell>
              <StyledTableCell>Page Views</StyledTableCell>
              <StyledTableCell>Exit Rate</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {topPagesData.map((row) => (
              <TableRow key={row.path}>
                <StyledTableCell>{row.path}</StyledTableCell>
                <StyledTableCell>{row.pageViews}</StyledTableCell>
                <StyledTableCell>{row.exitRate}%</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const TopPagesCard = () => {
  return (
    <Box sx={topPagesCardSx.container}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" color="text.primary" fontSize={16}>
          Top Pages
        </Typography>
        <ButtonHover>View All</ButtonHover>
      </Box>
      <Box>
        <TopPagesTable />
      </Box>
    </Box>
  );
};

export default TopPagesCard;
