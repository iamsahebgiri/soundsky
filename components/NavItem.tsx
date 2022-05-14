import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Link from "components/Link";
import { useRouter } from "next/router";
import { Theme } from "@mui/material/styles";
import SvgIcon from "@mui/material/SvgIcon";
import { Icon, IconifyIcon } from "@iconify/react";
import NoSsr from "@mui/material/NoSsr";

interface NavItemProps {
  item: {
    href: string;
    title: string;
    icon: IconifyIcon | string;
  };
}

const NavItem = ({ item, ...rest }: NavItemProps) => {
  const { href, icon, title } = item;
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        py: 0,
        px: 1.5,
      }}
      {...rest}
    >
      <Button
        component={Link}
        sx={{
          color: (theme: Theme) =>
            theme.palette.mode === "dark"
              ? theme.palette.grey[400]
              : theme.palette.grey[600],
          justifyContent: "flex-start",
          letterSpacing: 0.1,
          px: 1.2,
          fontSize: 14,
          fontWeight: 500,
          textTransform: "capitalize",
          width: "100%",
          "& svg": {
            mr: 1.2,
          },
          ...(active && {
            color: (theme: Theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.primary[100]
                : theme.palette.primary[600],
            bgcolor: (theme: Theme) =>
              theme.palette.mode === "dark"
                ? theme.palette.primaryDark[700]
                : theme.palette.primary[100],
          }),
          "&:hover": {
            bgcolor: (theme: Theme) =>
              theme.palette.mode === "dark"
                ? active
                  ? theme.palette.primaryDark[700]
                  : theme.palette.grey[700]
                : active
                ? theme.palette.primary[100]
                : theme.palette.grey[100],
          },
        }}
        disableRipple
        href={href}
      >
        <NoSsr>
          <SvgIcon
            sx={{
              color: (theme: Theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.grey[400]
                  : theme.palette.grey[600],
              ...(active && {
                color: (theme: Theme) =>
                  theme.palette.mode === "dark"
                    ? theme.palette.primary[100]
                    : theme.palette.primary[600],
              }),
            }}
          >
            <Icon icon={icon} height="21" width="21" />
          </SvgIcon>
        </NoSsr>
        {title}
      </Button>
    </ListItem>
  );
};

export default NavItem;
