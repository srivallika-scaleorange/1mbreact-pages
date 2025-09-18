import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const navLinks = [
  { label: "Vision", to: "/" },
  { label: "ABDM & NHA", to: "/abdm" },
  { label: "Solutions", to: "/solutions" },
  { label: "1MBWellness", to: "/blogs" },
  { label: "Contact Us", to: "#contact-us" }, 
  {label:"Privacy Policy", to:"/privacypolicy"},
  { label: "Login", external: "https://app.1mbhealthy.com" }
];

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useContext(AppContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  const handleContactUsClick = () => {
    document.getElementById("contact-us")?.scrollIntoView({ behavior: "smooth" });
    handleMenuItemClick(); // Close drawer on mobile
  };

  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    handleMenuItemClick(); // Close drawer on mobile
  };

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        bgcolor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#22223b",
      }}
    >
      {/* Drawer Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: isDarkMode ? "1px solid #444" : "1px solid #e0e7ef",
        }}
      >
        <Box
          component={Link}
          to="/"
          onClick={handleMenuItemClick}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            component="img"
            src="/logo.png"
            alt="1MBHealthy Logo"
            sx={{ height: 60, width: 100, borderRadius: 1.5 }}
          />
        </Box>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            color: isDarkMode ? "#bb86fc" : "#3b82f6",
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Navigation Links */}
      <List sx={{ pt: 2 }}>
        {navLinks.map((link) => (
          <ListItem key={link.label} disablePadding>
            {link.label === "Contact Us" ? (
              <ListItemButton
                onClick={handleContactUsClick}
                sx={{
                  py: 1.5,
                  px: 3,
                  "&:hover": {
                    bgcolor: isDarkMode
                      ? "rgba(187,134,252,0.08)"
                      : "rgba(99,102,241,0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: isDarkMode ? "#fff" : "#22223b",
                  }}
                />
              </ListItemButton>
            ) : link.external ? (
              // Handle external links
              <ListItemButton
                onClick={() => handleExternalLink(link.external)}
                sx={{
                  py: 1.5,
                  px: 3,
                  "&:hover": {
                    bgcolor: isDarkMode
                      ? "rgba(187,134,252,0.08)"
                      : "rgba(99,102,241,0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {link.label}
                      <LaunchIcon sx={{ fontSize: 14 }} />
                    </Box>
                  }
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: isDarkMode ? "#fff" : "#22223b",
                  }}
                />
              </ListItemButton>
            ) : (
              // Handle internal links
              <ListItemButton
                component={Link}
                to={link.to}
                onClick={handleMenuItemClick}
                sx={{
                  py: 1.5,
                  px: 3,
                  "&:hover": {
                    bgcolor: isDarkMode
                      ? "rgba(187,134,252,0.08)"
                      : "rgba(99,102,241,0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: isDarkMode ? "#fff" : "#22223b",
                  }}
                />
              </ListItemButton>
            )}
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2, bgcolor: isDarkMode ? "#444" : "#e0e7ef" }} />

      {/* Theme Toggle in Drawer */}
      <Box sx={{ px: 3, pb: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          startIcon={isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          onClick={() => {
            toggleDarkMode();
            handleMenuItemClick();
          }}
          sx={{
            color: isDarkMode ? "#bb86fc" : "#3b82f6",
            borderColor: isDarkMode ? "#bb86fc" : "#3b82f6",
            "&:hover": {
              bgcolor: isDarkMode
                ? "rgba(187,134,252,0.08)"
                : "rgba(59,130,246,0.08)",
              borderColor: isDarkMode ? "#bb86fc" : "#3b82f6",
            },
          }}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: isDarkMode ? "#101F3C" : "rgba(255,255,255,0.95)",
          boxShadow: isDarkMode
            ? "0 2px 8px 0 rgba(0,0,0,0.1)"
            : "0 2px 8px 0 rgba(59,130,246,0.06)",
          borderBottom: isDarkMode ? "1.5px solid #444" : "1.5px solid #e0e7ef",
          py: 1,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: 1200,
            width: "100%",
            mx: "auto",
            px: { xs: 2, sm: 4 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              component="img"
              src="/logo.png"
              alt="1MBHealthy Logo"
              sx={{ height: 50, width: 120, borderRadius: 2 }}
            />
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Stack direction="row" spacing={3} alignItems="center">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.label === "Contact Us" ? (
                    <Button
                      onClick={handleContactUsClick}
                      sx={{
                        color: isDarkMode ? "#fff" : "#22223b",
                        fontWeight: 500,
                        fontSize: 16,
                        textTransform: "none",
                        transition: "color 0.2s",
                        borderRadius: 2,
                        px: 1.5,
                        "&:hover": {
                          color: isDarkMode ? "#bb86fc" : "#6366f1",
                          bgcolor: isDarkMode
                            ? "rgba(187,134,252,0.08)"
                            : "rgba(99,102,241,0.08)",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  ) : link.external ? (
                    // Handle external links for desktop
                    <Button
                      onClick={() => handleExternalLink(link.external)}
                      endIcon={<LaunchIcon sx={{ fontSize: 16 }} />}
                      sx={{
                        color: isDarkMode ? "#fff" : "#22223b",
                        fontWeight: 500,
                        fontSize: 16,
                        textTransform: "none",
                        transition: "color 0.2s",
                        borderRadius: 2,
                        px: 1.5,
                        "&:hover": {
                          color: isDarkMode ? "#bb86fc" : "#6366f1",
                          bgcolor: isDarkMode
                            ? "rgba(187,134,252,0.08)"
                            : "rgba(99,102,241,0.08)",
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  ) : (
                    // Handle internal links for desktop
                    <Link to={link.to}>
                      <Button
                        sx={{
                          color: isDarkMode ? "#fff" : "#22223b",
                          fontWeight: 500,
                          fontSize: 16,
                          textTransform: "none",
                          transition: "color 0.2s",
                          borderRadius: 2,
                          px: 1.5,
                          "&:hover": {
                            color: isDarkMode ? "#bb86fc" : "#6366f1",
                            bgcolor: isDarkMode
                              ? "rgba(187,134,252,0.08)"
                              : "rgba(99,102,241,0.08)",
                          },
                        }}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  )}
                </div>
              ))}
              {/* Desktop Theme Toggle */}
              <IconButton
                aria-label="Toggle theme"
                sx={{
                  color: isDarkMode ? "#bb86fc" : "#3b82f6",
                  bgcolor: isDarkMode
                    ? "rgba(187,134,252,0.08)"
                    : "rgba(59,130,246,0.08)",
                  borderRadius: 2,
                  ml: 1,
                  "&:hover": {
                    bgcolor: isDarkMode
                      ? "rgba(187,134,252,0.16)"
                      : "rgba(59,130,246,0.16)",
                  },
                }}
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Stack>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {/* Mobile Theme Toggle */}
              <IconButton
                aria-label="Toggle theme"
                sx={{
                  color: isDarkMode ? "#bb86fc" : "#3b82f6",
                  bgcolor: isDarkMode
                    ? "rgba(187,134,252,0.08)"
                    : "rgba(59,130,246,0.08)",
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: isDarkMode
                      ? "rgba(187,134,252,0.16)"
                      : "rgba(59,130,246,0.16)",
                  },
                }}
                onClick={toggleDarkMode}
              >
                {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>

              {/* Hamburger Menu */}
              <IconButton
                aria-label="Open navigation menu"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: isDarkMode ? "#fff" : "#22223b",
                  "&:hover": {
                    bgcolor: isDarkMode
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(0,0,0,0.04)",
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};


export default Navbar;
