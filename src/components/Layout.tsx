import {
  Drawer,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from "@material-ui/core";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";

interface LayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

const Layout = ({ children }: LayoutProps) => {
  const classNames = useStyles();
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classNames.root}>
      {/* app bar */}
      <AppBar className={classNames.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classNames.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Mario</Typography>
          <Avatar
            className={classNames.avatar}
            src={
              "https://images.unsplash.com/photo-1602620502036-e52519d58d92?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classNames.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classNames.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classNames.title}>
            Ninja Notes
          </Typography>
        </div>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={
                location.pathname === item.path ? classNames.active : undefined
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classNames.page}>
        <div className={classNames.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
