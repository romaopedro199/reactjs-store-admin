import { Grid2, Stack } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DataCard from "@/modules/dashboard/components/DataCard";

const DataCardContainer = () => {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <DataCard
          icon={<ShoppingBasketIcon />}
          label="Total Orders"
          value="13.465"
          percentage="23"
          status="success"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <DataCard
          icon={<WorkspacePremiumIcon />}
          label="New Leads"
          value="9.526"
          percentage="8.1"
          status="success"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <DataCard
          icon={<BusinessCenterIcon />}
          label="Deals"
          value="978"
          percentage="-2"
          status="error"
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <DataCard
          icon={<MonetizationOnIcon />}
          label="Revenue"
          value="$123.6k"
          percentage="-0.4"
          status="error"
        />
      </Grid2>
    </Grid2>
  );
};

const Dashboard = () => {
  return (
    <Stack>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, lg: 6 }}>
          <DataCardContainer />
        </Grid2>
        <Grid2 size={{ xs: 12, lg: 6 }}>123</Grid2>
      </Grid2>
    </Stack>
  );
};

export default Dashboard;
