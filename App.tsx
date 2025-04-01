import React, { FC, useState } from "react";
import { Box, AppBar, Toolbar, Typography, Container, IconButton, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled, TextField } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ArrowLeft, Eye } from 'lucide-react';

// Import images
import homepage from "../src/assets/homepage_image.svg";
import im1 from "../src/assets/im1.png";
import im2 from "../src/assets/img 2.png";
import im3 from "../src/assets/im 3.png";
import Frame1 from "../src/assets/Frame 1.png";
import Frame15 from "../src/assets/Frame 15.png";
import Frame16 from "../src/assets/Frame 16.png";
import Frame17 from "../src/assets/Frame 17.png";
import Frame18 from "../src/assets/Frame 18.png";
import card1 from "./assets/Card 3.png";
import card2 from "./assets/Card 2.png";
import card3 from "./assets/card1.png";
import new1 from "./assets/new1.png";
import new2 from "./assets/new2.png";
import new3 from "./assets/new3.png";
import text1 from "./assets/text1.png";
import text2 from "./assets/text2.png";
import text3 from "./assets/text3.png";
import text4 from "./assets/text4.png";
import text5 from "./assets/text5.png";
import text6 from "./assets/text6.png";
import text7 from "./assets/text7.png";
import text8 from "./assets/text 8.png";

// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  border: '1px solid #81A895',
  padding: '8px',
  '&.header-cell': {
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
  },
  '&.rating-cell': {
    backgroundColor: 'rgba(219, 221, 122, 0.1)',
  }
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:last-child td, &:last-child th': {
    borderBottom: '1px solid #81A895',
  },
}));
interface Icon {
  imgSrc: string;
  angle: number;
  route?: string;
}


// Header Component
const AppHeader: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === "/") {
      navigate("/login");
    } else if (location.pathname === "/login") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#DBDD7A" }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1, color: "black", textAlign: "left", fontWeight: "bold" }}>
          CLEAN TECH
        </Typography>
        <IconButton edge="end" color="inherit" onClick={handleBackClick}>
          <ArrowBackIcon sx={{ color: "black" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

// Home Page Component
const HomePage: FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ textAlign: "center", color: "white", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "calc(100vh - 64px)" }}>
        <Grid container spacing={25}>
          <Grid item xs={12} md={6}>
            <img src={homepage} alt="Home Page" style={{ width: "80%", height: "700", borderRadius: "10px" }} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <img src={im1} alt="Stacked Image 1" style={{ width: "80%", height: "auto", borderRadius: "10px" }} />
              </Grid>
              <Grid item xs={12}>
                <img src={im2} alt="Stacked Image 2" style={{ width: "80%", height: "auto", borderRadius: "10px" }} />
              </Grid>
              <Grid item xs={12}>
                <img src={im3} alt="Stacked Image 3" style={{ width: "80%", height: "auto", borderRadius: "10px" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// Login Page Component
const LoginPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center",
        minHeight: "calc(90vh - 50px)"
      }}>
        <Typography variant="h3" sx={{ mb: 5, color: "white", fontWeight: "bold" }}>
          Login
        </Typography>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={2} sm={4} md={2}>
            <Button
              onClick={() => navigate("/user-login")}
              sx={{
                width: "100%",
                py: 1,
                backgroundColor: "#DBDD7A",
                color: "black",
                fontSize: "1.25rem",
                fontWeight: "bold",
                '&:hover': {
                  backgroundColor: "#a8aa61"
                }
              }}
            >
              User Login
            </Button>
          </Grid>
          <Grid item xs={2} sm={4} md={2}>
            <Button
              onClick={() => navigate("/admin-login")}
              sx={{
                width: "100%",
                py: 1,
                backgroundColor: "#DBDD7A",
                color: "black",
                fontSize: "1.25rem",
                fontWeight: "bold",
                '&:hover': {
                  backgroundColor: "#a8aa61"
                }
              }}
            >
              Admin Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

// User Login Page Component
const UserLoginPage: FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigate("/user-dashboard");
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Box sx={{ 
          mt: 8,
          display: "flex",
          flexDirection: "column",
          gap: 4
        }}>
          <Box>
            <Typography sx={{ color: "#DBDD7A", fontSize: "1.5rem", mb: 2 }}>
              Email
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Email"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "8px"
                }
              }}
            />
          </Box>
          <Box>
            <Typography sx={{ color: "#DBDD7A", fontSize: "1.5rem", mb: 2 }}>
              Password
            </Typography>
            <Box sx={{ position: "relative" }}>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  '& .MuiOutlinedInput-root': {
                    borderRadius: "8px"
                  }
                }}
              />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                <Eye />
              </IconButton>
            </Box>
          </Box>
          <Button
            onClick={handleLogin}
            sx={{
              backgroundColor: "#DBDD7A",
              color: "black",
              py: 2,
              fontSize: "1.25rem",
              fontWeight: "bold",
              '&:hover': {
                backgroundColor: "#a8aa61"
              }
            }}
          >
            Log In
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ color: "white" }}>
              Don't have an account?{" "}
              <Typography
                component="span"
                onClick={() => navigate('/signup')}
                sx={{
                  color: "#DBDD7A",
                  textDecoration: "none",
                  cursor: "pointer",
                  '&:hover': { textDecoration: "underline" }
                }}
              >
                Register Now
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

// Admin Login Page Component
const AdminLoginPage: FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleAdminLogin = () => {
    navigate('/admin-dashboard');
  };

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Box sx={{ 
          mt: 5,
          display: "flex",
          flexDirection: "column",
          gap: 4
        }}>
          <Box>
            <Typography sx={{ color: "#DBDD7A", fontSize: "1.5rem", mb: 2 }}>
              Email
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Email"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "8px"
                }
              }}
            />
          </Box>
          <Box>
            <Typography sx={{ color: "#DBDD7A", fontSize: "1.5rem", mb: 2 }}>
              Password
            </Typography>
            <Box sx={{ position: "relative" }}>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  '& .MuiOutlinedInput-root': {
                    borderRadius: "8px"
                  }
                }}
              />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                <Eye />
              </IconButton>
            </Box>
          </Box>
          <Button
            onClick={handleAdminLogin}
            sx={{
              backgroundColor: "#DBDD7A",
              color: "black",
              py: 2,
              fontSize: "1.25rem",
              fontWeight: "bold",
              '&:hover': {
                backgroundColor: "#a8aa61"
              }
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

// Admin Dashboard Component
const AdminDashboard: FC = () => {
  const navigate = useNavigate();

  const radius = 250;

  const icons: Icon[] = [
    { imgSrc: Frame16, angle: 270, route: "/page3" },
    { imgSrc: Frame17, angle: 350, route: "/page4" },
    { imgSrc: Frame18, angle: 190, route: "/page5" },

  ];
  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ position: "relative", width: 100, height: 800, margin: "auto", mt: 10 }}>
        {icons.map((icon, index) => {
          const angleRad = (icon.angle * Math.PI) / 180;
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => icon.route && navigate(icon.route)}
            >
              <Box component="img" src={icon.imgSrc} alt={`icon-${index}`} sx={{ width: 120, height: 120, mb: 10, borderRadius: "50%" }} />
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};
// User Dashboard Component
const UserDashboard: FC = () => {
  const navigate = useNavigate();
  const radius = 250;

  const icons: Icon[] = [
    { imgSrc: Frame1, angle: 270, route: "/page1" },
    { imgSrc: Frame15, angle: 350, route: "/page2" },
    { imgSrc: Frame16, angle: 50, route: "/page3" },
    { imgSrc: Frame17, angle: 130, route: "/page4" },
    { imgSrc: Frame18, angle: 190, route: "/page5" },

  ];

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ position: "relative", width: 100, height: 700, margin: "auto", mt: 4 }}>
        {icons.map((icon, index) => {
          const angleRad = (icon.angle * Math.PI) / 180;
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => icon.route && navigate(icon.route)}
            >
              <Box component="img" src={icon.imgSrc} alt={`icon-${index}`} sx={{ width: 120, height: 120, mb: 0, borderRadius: "50%" }} />
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

// Signup Page Component
const SignupPage: FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container maxWidth="sm" sx={{ pt: 4 }}>
        <Box sx={{ 
          mt: 8,
          display: "flex",
          flexDirection: "column",
          gap: 4
        }}>
          <Box>
            <Typography sx={{ color: "#DBDD7A", fontSize: "1.5rem", mb: 2 }}>
              Email
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Email"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "8px"
                }
              }}
            />
          </Box>
          <Box>
            <Typography sx={{ color: "#DBDD7A", fontSize: "1.5rem", mb: 2 }}>
              Username
            </Typography>
            <TextField
              fullWidth
              placeholder="Enter Username"
              sx={{
                backgroundColor: "white",
                borderRadius: "8px",
                '& .MuiOutlinedInput-root': {
                  borderRadius: "8px"
                }
              }}
            />
          </Box>
          <Box>
            <Typography sx={{ color: "#DBDD7A", fontSize: "1.5rem", mb: 2 }}>
              Password
            </Typography>
            <Box sx={{ position: "relative" }}>
              <TextField
                fullWidth
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                sx={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  '& .MuiOutlinedInput-root': {
                    borderRadius: "8px"
                  }
                }}
              />
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                <Eye />
              </IconButton>
            </Box>
          </Box>
          <Button
            onClick={() => navigate("/user-login")}
            sx={{
              backgroundColor: "#DBDD7A",
              color: "black",
              py: 2,
              fontSize: "1.25rem",
              fontWeight: "bold",
              '&:hover': {
                backgroundColor: "#a8aa61"
              }
            }}
          >
            Sign Up
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ color: "white" }}>
              Already have an account?{" "}
              <Typography
                component="span"
                onClick={() => navigate("/user-login")}
                sx={{
                  color: "#DBDD7A",
                  textDecoration: "none",
                  cursor: "pointer",
                  '&:hover': { textDecoration: "underline" }
                }}
              >
                Login
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
const NextPage: FC = () => {
  const navigate = useNavigate();
  const radius = 250;

  const icons: Icon[] = [
    { imgSrc: Frame16, angle: 270, route: "/page3" },
    { imgSrc: Frame17, angle: 360, route: "/page4" },
    { imgSrc: Frame18, angle: 180, route: "/page5" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ position: "relative", width: 100, height: 700, margin: "auto", mt: 4 }}>
        {icons.map((icon, index) => {
          const angleRad = (icon.angle * Math.PI) / 180;
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          return (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={() => icon.route && navigate(icon.route)}
            >
              <Box component="img" src={icon.imgSrc} alt={`icon-${index}`} sx={{ width: 120, height: 120, mb: 0, borderRadius: "50%" }} />
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

// Page3WithButtons Component
const Page3WithButtons: FC = () => {
  const navigate = useNavigate();

  const environmentalCards = [
    { id: 1, image: card1 },
    { id: 2, image: card2 },
    { id: 3, image: card3 }
  ];

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Typography variant="h4" color="white" sx={{ mb: 15, fontWeight: "bold", textAlign: "center", mt: 4 }}>
        Environmental Sustainability
      </Typography>
      <Container sx={{ py: 4 }}>
        <Grid container spacing={10}>
          {environmentalCards.map((card) => (
            <Grid item xs={20} md={4} key={card.id}>
              <Box
                onClick={() => navigate(`/card-details/${card.id}`)}
                sx={{
                  cursor: "pointer",
                  borderRadius: 5,
                  overflow: "hidden",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)"
                  }
                }}
              >
                <img
                  src={card.image}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover"
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Page4 Component
const Page4: FC = () => {
  const navigate = useNavigate();

  const economicCards = [
    { 
      id: 1, 
      image: new1
    },
    { 
      id: 2, 
      image: new2
    },
    { 
      id: 3, 
      image: new3,

    }
  ];

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
      <Container sx={{ py: 2}}>
        <Typography variant="h4" sx={{ mb: 25, color: "white", textAlign: "center", fontWeight: "bold" }}>
          Economic Sustainability
        </Typography>
        <Grid container spacing={8} justifyContent="center" alignItems="stretch">
          {economicCards.map((card) => (
            <Grid item xs={14} md={4} key={card.id}>
              <Box
                onClick={() => navigate(`/economic-details/${card.id}`)}
                sx={{
                  height: "100%",
                  cursor: "pointer",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: 0,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};


const PageHeader = ({
  title = 'Clean Tech',
  showBack = false,
  onBack
}: {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
}) => {
  const navigate = useNavigate();

  // Conditional Back Button
  const handleBack = () => {
    if (onBack) {
      onBack(); // Custom onBack handler
    } else {
      navigate(-1); // Go back to the previous page
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#DBDD7A',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // This will position items on both sides
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: 'black',
          fontWeight: 'bold',
          textAlign: 'left', // Title is aligned to the left
          flexGrow: 1, // This ensures the title takes up space
        }}
      >
        {title}
      </Typography>

      {showBack && (
        <IconButton edge="end" color="inherit" onClick={handleBack}>
          <ArrowBackIcon sx={{ color: 'black' }} />
        </IconButton>
      )}
    </Box>
  );
};

// Table Component
const AnalysisTable = () => {
  const [rows, setRows] = useState([
    { process: 'Raw to WB', hides: '', skin: '' },
    { process: 'Raw to Veg', hides: '', skin: '' },
    { process: 'WB/Veg to FL', hides: '', skin: '' },
    { process: 'Raw to FL', hides: '', skin: '' }
  ]);

  const handleChange = (index: number, field: 'hides' | 'skin', value: string) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Container>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: 700, borderRadius: 2, mx: 'auto' }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#5e7f70' }}>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', borderRight: '1px solid white' }}>Process</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold', borderRight: '1px solid white' }}>Hides</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Skin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ borderRight: '1px solid #ccc' }}>{row.process}</TableCell>
                  <TableCell sx={{ borderRight: '1px solid #ccc' }}>
                    <TextField
                      variant="standard"
                      value={row.hides}
                      onChange={(e) => handleChange(index, 'hides', e.target.value)}
                      fullWidth
                      size="small"
                      InputProps={{ disableUnderline: true }}
                      sx={{ backgroundColor: 'white', borderRadius: 1 }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="standard"
                      value={row.skin}
                      onChange={(e) => handleChange(index, 'skin', e.target.value)}
                      fullWidth
                      size="small"
                      InputProps={{ disableUnderline: true }}
                      sx={{ backgroundColor: 'white', borderRadius: 1 }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

// Main Page Component
const Page5 = () => {
  const navigate = useNavigate();
  const images = [
    { src: text1, alt: 'Employees', id: '1' },
    { src: text2, alt: 'Health & Safety', id: '2' },
    { src: text3, alt: 'Education', id: '3' },
    { src: text4, alt: 'Housing', id: '4' },
    { src: text5, alt: 'Grievances', id: '5' },
    { src: text6, alt: 'Social Security', id: '6' },
    { src: text7, alt: 'CSR', id: '7' },
    { src: text8, alt: 'Rehabilitation', id: '8' }
  ];

  return (
    <Box sx={{ minHeight: '100vh', width: '100%', backgroundColor: '#81A895' }}>
      {/* Header Section (AppBar) */}
      <AppBar position="static" sx={{ backgroundColor: "#DBDD7A" }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, color: "black", textAlign: "left", fontWeight: "bold" }}>
            CLEAN TECH
          </Typography>
          <IconButton edge="end" color="inherit" onClick={() => navigate(-1)}>
            <ArrowBackIcon sx={{ color: "black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Typography
        variant="h4"
        color="white"
        sx={{ mb: 3, fontWeight: 'bold', textAlign: 'center', mt: 4 }}
      >
        Social Sustainability
      </Typography>
      <Container sx={{ textAlign: 'center', padding: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {images.map((img) => (
            <Grid item xs={12} sm={6} md={3} key={img.id}>
              <img
                src={img.src}
                alt={img.alt}
                onClick={() => navigate(`/buttons-page/${img.id}`)}
                style={{
                  width: '100%',
                  height: '30vh',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  objectFit: 'cover'
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
const ButtonsPage = () => {
  const navigate = useNavigate();
  const { imageId } = useParams();
  const [visibleTableIndex, setVisibleTableIndex] = useState<number | null>(0); // Default to showing the first table
  const [isFirstButtonClicked, setIsFirstButtonClicked] = useState<boolean>(false); // Track if first button was clicked

  const getPageTitle = (id: string) => {
    const titles: { [key: string]: string } = {
      '1': 'EMPLOYEES',
      '2': 'HEALTH & SAFETY',
      '3': 'EDUCATION',
      '4': 'HOUSING',
      '5': 'GRIEVANCES',
      '6': 'SOCIAL SECURITY',
      '7': 'CSR',
      '8': 'REHABILITATION'
    };
    return titles[id] || '';
  };

  const getButtons = (id: string) => {
    const buttonsMap: { [key: string]: string[] } = {
      '1': ['No. employees', 'Ave,Salary,Rationale for salary', 'Bonuses/incentives/other benefits', 'Salary expenses on cost'],
      '2': ['Health Spending %', 'Accidents', 'Safety Spending %'],
      '3': ['Edu Spending PC'],
      '4': ['House Spending PC', 'Socialization Spending'],
      '5': ['% of grievance', 'Grievance redressal'],
      '6': ['Spending on social security PC'],
      '7': ['CSR Spending on profit'],
      '8': ['Spending towards rehabilitations measures on cost of expansion', 'No.of Parties/families impacted Vs compensated']
    };
    return buttonsMap[id] || [];
  };

  const handleSubmit = () => {
    // Handle the submit action here
    console.log("Data submitted!");
  };

  const handleButtonClick = (index: number) => {
    if (index === 0) {
      setIsFirstButtonClicked(true); // Mark the first button as clicked
    }
    setVisibleTableIndex(index); // Show the corresponding table
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header Section */}
      <PageHeader title={getPageTitle(imageId || '')} showBack onBack={() => navigate(-1)} />
      
      <Box sx={{ flexGrow: 1, backgroundColor: '#81A895', p: 3, overflowY: 'auto' }}>
        <Grid container spacing={3}>
          {/* Left side - Buttons */}
          <Grid item xs={12} sm={4}>
            <Container>
              {getButtons(imageId || '').map((label, index) => (
                <React.Fragment key={index}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => handleButtonClick(index)}
                    disabled={isFirstButtonClicked && index === 0} // Disable the first button after it's clicked
                    sx={{
                      backgroundColor: '#DBDD7A',
                      color: 'black',
                      py: 1,
                      px: 3,
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      mb: 2,
                      '&:hover': { backgroundColor: '#c5c76e' },
                    }}
                  >
                    {label}
                  </Button>
                </React.Fragment>
              ))}
            </Container>
          </Grid>

          {/* Right side - Tables */}
          <Grid item xs={12} sm={8}>
            <Container maxWidth="sm">
              {/* Always show the first table */}
              <React.Fragment>
                {visibleTableIndex === 0 && (
                  <>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                      {getButtons(imageId || '')[0]} {/* First button name as table title */}
                    </Typography>
                    <AnalysisTable /> {/* First table component */}
                  </>
                )}
              </React.Fragment>

              {/* Toggle other tables based on button click */}
              {getButtons(imageId || '').map((label, index) => (
                index !== 0 && (
                  <React.Fragment key={index}>
                    {visibleTableIndex === index && (
                      <>
                        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center', mb: 2 }}>
                          {label} {/* Button name as table title */}
                        </Typography>
                        <AnalysisTable /> {/* Your table component */}
                      </>
                    )}
                  </React.Fragment>
                )
              ))}

              <Box sx={{ textAlign: 'center', mt: 3 }}>
                <Button
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    backgroundColor: '#DBDD7A',
                    color: 'black',
                    py: 1,
                    px: 3,
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#c5c76e' },
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
const CardDetailsPage: FC = () => {
  const { cardId } = useParams();
  const location = useLocation();
  const isEnvironmental = location.pathname.includes('card-details');
  const [selectedButton, setSelectedButton] = useState<string>("Product Yield");
  const [selectedWasteButton, setSelectedWasteButton] = useState<string>("Generation");
  const [selectedComplianceButton, setSelectedComplianceButton] = useState<string>("Regulatory Requirements");
  
  // Resource utilization states
  const [productYieldData, setProductYieldData] = useState<string[][]>(
    Array(8).fill(null).map(() => Array(6).fill(""))
  );
  const [waterUsageData, setWaterUsageData] = useState<string[][]>(
    Array(4).fill(null).map(() => Array(6).fill(""))
  );
  const [energyConsumptionData, setEnergyConsumptionData] = useState<string[][]>(
    Array(4).fill(null).map(() => Array(6).fill(""))
  );
  const [humanResourceData, setHumanResourceData] = useState<string[][]>(
    Array(4).fill(null).map(() => Array(6).fill(""))
  );

  // Waste management states
  const [wasteData, setWasteData] = useState<string[][]>(
    Array(4).fill(null).map(() => Array(6).fill(""))
  );
  const [regulatoryData, setRegulatoryData] = useState<string[][]>(
    Array(4).fill(null).map(() => Array(2).fill(""))
  );
  const [customerData, setCustomerData] = useState<string[][]>(
    Array(4).fill(null).map(() => Array(2).fill(""))
  );

  const resourceButtons = [
    "Product Yield",
    "Water Usage",
    "Energy Consumption",
    "Human resource utilization"
  ];

  const wasteButtons = [
    "Generation",
    "Recycle/Reuse",
    "Treatment",
    "Disposal"
  ];

  const complianceButtons = [
    "Regulatory Requirements",
    "Customer Requirements"
  ];

  const handleDataChange = (rowIndex: number, colIndex: number, value: string, dataType: string) => {
    switch (dataType) {
      case 'waste':
        const newWasteData = [...wasteData];
        newWasteData[rowIndex] = [...newWasteData[rowIndex]];
        newWasteData[rowIndex][colIndex] = value;
        setWasteData(newWasteData);
        break;
      case 'productYield':
        const newProductData = [...productYieldData];
        newProductData[rowIndex] = [...newProductData[rowIndex]];
        newProductData[rowIndex][colIndex] = value;
        setProductYieldData(newProductData);
        break;
      case 'waterUsage':
        const newWaterData = [...waterUsageData];
        newWaterData[rowIndex] = [...newWaterData[rowIndex]];
        newWaterData[rowIndex][colIndex] = value;
        setWaterUsageData(newWaterData);
        break;
      case 'energyConsumption':
        const newEnergyData = [...energyConsumptionData];
        newEnergyData[rowIndex] = [...newEnergyData[rowIndex]];
        newEnergyData[rowIndex][colIndex] = value;
        setEnergyConsumptionData(newEnergyData);
        break;
      case 'humanResource':
        const newHRData = [...humanResourceData];
        newHRData[rowIndex] = [...newHRData[rowIndex]];
        newHRData[rowIndex][colIndex] = value;
        setHumanResourceData(newHRData);
        break;
    }
  };

  const handleComplianceDataChange = (rowIndex: number, colIndex: number, value: string, type: string) => {
    if (type === 'regulatory') {
      const newData = [...regulatoryData];
      newData[rowIndex] = [...newData[rowIndex]];
      newData[rowIndex][colIndex] = value;
      setRegulatoryData(newData);
    } else {
      const newData = [...customerData];
      newData[rowIndex] = [...newData[rowIndex]];
      newData[rowIndex][colIndex] = value;
      setCustomerData(newData);
    }
  };

  const handleSubmit = () => {
    if (cardId === "1") {
      switch (selectedButton) {
        case "Product Yield":
          console.log("Product Yield Data:", productYieldData);
          break;
        case "Water Usage":
          console.log("Water Usage Data:", waterUsageData);
          break;
        case "Energy Consumption":
          console.log("Energy Consumption Data:", energyConsumptionData);
          break;
        case "Human resource utilization":
          console.log("Human Resource Data:", humanResourceData);
          break;
      }
    } else if (cardId === "2") {
      console.log("Waste Data:", wasteData);
    } else if (cardId === "3") {
      console.log("Compliance Data:", selectedComplianceButton === "Regulatory Requirements" ? regulatoryData : customerData);
    }
    alert('Data saved successfully!');
  };

  const renderProductYieldTable = () => (
    <TableContainer 
      component={Paper} 
      sx={{ 
        mt: 2, 
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: '2px solid #81A895',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      <Table size="small">
        <TableHead>
          {/* Adding "Product Yield" Heading */}
          <StyledTableRow>
            <StyledTableCell colSpan={7} sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '16px' }}>
              Product Yield
            </StyledTableCell>
          </StyledTableRow>
  
          {/* Table Header Row */}
          <StyledTableRow>
            <StyledTableCell className="header-cell">Process</StyledTableCell>
            <StyledTableCell className="header-cell" colSpan={2} align="center">Hides</StyledTableCell>
            <StyledTableCell className="header-cell rating-cell" align="center">Rating for Hide</StyledTableCell>
            <StyledTableCell className="header-cell" colSpan={2} align="center">Skin</StyledTableCell>
            <StyledTableCell className="header-cell rating-cell" align="center">Rating for Skin</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="center">Maximum (Sq. ft/Kg)</StyledTableCell>
            <StyledTableCell align="center">Minimum (Sq. ft/Kg)</StyledTableCell>
            <StyledTableCell className="rating-cell"></StyledTableCell>
            <StyledTableCell align="center">Maximum (Sq. ft/Kg)</StyledTableCell>
            <StyledTableCell align="center">Minimum (Sq. ft/Kg)</StyledTableCell>
            <StyledTableCell className="rating-cell"></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {[
            "Raw to WB",
            "Raw to Veg",
            "WB/Veg to FL 0.5 to 0.8 mm",
            "WB/Veg to FL 0.9 to 1.2 mm",
            "WB/Veg to FL 1.2 to 1.5 mm",
            "Raw to FL 0.5 to 0.8 mm",
            "Raw to FL 0.9 to 1.2 mm",
            "Raw to FL 1.2 to 1.5 mm"
          ].map((process, rowIndex) => (
            <StyledTableRow key={process}>
              <StyledTableCell>{process}</StyledTableCell>
              {[0, 1, 2, 3, 4, 5].map((colIndex) => (
                <StyledTableCell 
                  key={colIndex} 
                  className={colIndex === 2 || colIndex === 5 ? 'rating-cell' : ''}
                  sx={{
                    border: "1px solid #ccc",  // Solid borders for each cell
                    padding: "8px",  // Space around text inside each cell
                    textAlign: "center",
                    backgroundColor: colIndex === 2 || colIndex === 5 ? "#EBFBE2" : "transparent", // Highlight rating columns
                  }}
                >
                  <input
                    type="text"
                    value={productYieldData[rowIndex][colIndex]}
                    onChange={(e) => handleDataChange(rowIndex, colIndex, e.target.value, 'productYield')}
                    style={{
                      width: "100%",
                      height: "24px",
                      border: "none",              // Remove the border from the input
                      borderRadius: "4px",         // Rounded corners for inputs
                      padding: "2px 4px",
                      backgroundColor: "transparent", // Transparent background for input
                      boxShadow: "none",           // Remove shadow
                      outline: "none",             // Remove outline on focus
                      fontSize: "14px",            // Font size for the input
                      textAlign: "center",         // Center the input text
                      color: "#333",              // Text color
                      fontWeight: "400",           // Text weight
                      transition: "background-color 0.3s ease", // Smooth background transition
                    }}
                  />
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  
  
  const renderOtherResourceTable = (type: string) => {
    const data = type === 'waterUsage' ? waterUsageData :
                 type === 'energyConsumption' ? energyConsumptionData :
                 humanResourceData;
  
    const units = type === 'waterUsage' ? '(L/Kg)' :
                  type === 'energyConsumption' ? '(kwh/Sq.ft)' :
                  '(Rs/sq.ft)';
    
    // Add button names dynamically as table headings
    const buttonNames = type === 'waterUsage' ? ['Water Usage'] :
                      type === 'energyConsumption' ? ['Energy Consumption'] :
                      ['Human Resource Data'];// Add more button names here based on your use case
    return (
      <TableContainer 
        component={Paper} 
        sx={{ 
          mt: 2, 
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          border: '2px solid #81A895',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <Table size="small">
          <TableHead>
            {/* Row for Button Names as Headers */}
            <StyledTableRow>
              <StyledTableCell colSpan={7} sx={{ textAlign: 'left', fontWeight: 'bold', fontSize: '16px' }}>
                {buttonNames.join(' / ')} {/* Display button names */}
              </StyledTableCell>
            </StyledTableRow>
  
            {/* Process and Unit Header Row */}
            <StyledTableRow>
              <StyledTableCell className="header-cell">Process</StyledTableCell>
              <StyledTableCell className="header-cell" colSpan={2} align="center">Hides</StyledTableCell>
              <StyledTableCell className="header-cell rating-cell" align="center">Rating for Hide</StyledTableCell>
              <StyledTableCell className="header-cell" colSpan={2} align="center">Skin</StyledTableCell>
              <StyledTableCell className="header-cell rating-cell" align="center">Rating for Skin</StyledTableCell>
            </StyledTableRow>
  
            {/* Units Header Row */}
            <StyledTableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell align="center">{`Maximum ${units}`}</StyledTableCell>
              <StyledTableCell align="center">{`Minimum ${units}`}</StyledTableCell>
              <StyledTableCell className="rating-cell"></StyledTableCell>
              <StyledTableCell align="center">{`Maximum ${units}`}</StyledTableCell>
              <StyledTableCell align="center">{`Minimum ${units}`}</StyledTableCell>
              <StyledTableCell className="rating-cell"></StyledTableCell>
            </StyledTableRow>
          </TableHead>
  
          <TableBody>
            {[
              "Raw to WB",
              "Raw to Veg",
              "WB/Veg to FL",
              "Raw to FL"
            ].map((process, rowIndex) => (
              <StyledTableRow key={process}>
                <StyledTableCell>{process}</StyledTableCell>
                {Array(6).fill(null).map((_, colIndex) => (
                  <StyledTableCell 
                    key={colIndex}
                    className={colIndex === 2 || colIndex === 5 ? 'rating-cell' : ''}
                  >
                    <input
                      type="text"
                      value={data[rowIndex]?.[colIndex] || ''}
                      onChange={(e) => handleDataChange(rowIndex, colIndex, e.target.value, type)}
                      style={{
                        width: "100%",
                        height: "24px",
                        border: "none",              // Remove the border
                        borderRadius: "4px",         // Retain rounded corners if desired
                        padding: "2px 4px",
                        backgroundColor: "transparent", // Keep the transparent background
                        boxShadow: "none",           // Remove any shadow
                        outline: "none",             // Remove the outline on focus
                        fontSize: "14px",            // Set font size if needed for a better appearance
                      }}
                    />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  

  const renderWasteTable = () => (
    <TableContainer 
      component={Paper} 
      sx={{ 
        mt: 2, 
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        border: '2px solid #81A895',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      <Table size="small">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell className="header-cell">Process</StyledTableCell>
            <StyledTableCell className="header-cell" colSpan={2} align="center">Hides</StyledTableCell>
            <StyledTableCell className="header-cell rating-cell" align="center">Rating for Hide</StyledTableCell>
            <StyledTableCell className="header-cell" colSpan={2} align="center">Skin</StyledTableCell>
            <StyledTableCell className="header-cell rating-cell" align="center">Rating for skin</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="center">Maximum</StyledTableCell>
            <StyledTableCell align="center">Minimum</StyledTableCell>
            <StyledTableCell className="rating-cell"></StyledTableCell>
            <StyledTableCell align="center">Maximum</StyledTableCell>
            <StyledTableCell align="center">Minimum</StyledTableCell>
            <StyledTableCell className="rating-cell"></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {[
            "Raw to WB",
            "Raw to Veg",
            "WB/Veg to FL",
            "Raw to FL"
          ].map((process, rowIndex) => (
            <StyledTableRow key={process}>
              <StyledTableCell>{process}</StyledTableCell>
              {Array(6).fill(null).map((_, colIndex) => (
                <StyledTableCell 
                  key={colIndex}
                  className={colIndex === 2 || colIndex === 5 ? 'rating-cell' : ''}
                >
                  <input
                      type="text"
                      value={productYieldData[rowIndex][colIndex]}
                      onChange={(e) => handleDataChange(rowIndex, colIndex, e.target.value, 'productYield')}
                      style={{
                        width: "100%",
                        height: "24px",
                        border: "none",              // Remove the border
                        borderRadius: "4px",         // Retain rounded corners if desired
                        padding: "2px 4px",
                        backgroundColor: "transparent", // Keep the transparent background
                        boxShadow: "none",           // Remove any shadow
                        outline: "none",             // Remove the outline on focus
                        fontSize: "14px",            // Set font size if needed for a better appearance
                      }}
                    />
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderComplianceTable = (type: string) => {
    const data = type === 'regulatory' ? regulatoryData : customerData;
    
    return (
      <TableContainer 
        component={Paper} 
        sx={{ 
          mt: 2, 
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          border: '2px solid #81A895',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <Table size="small">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell className="header-cell">Processes</StyledTableCell>
              <StyledTableCell className="header-cell">Hides</StyledTableCell>
              <StyledTableCell className="header-cell">Skin</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {[
              "Raw to WB",
              "Raw to Veg",
              "WB/Veg to FL",
              "Raw to FL"
            ].map((process, rowIndex) => (
              <StyledTableRow key={process}>
                <StyledTableCell>{process}</StyledTableCell>
                {[0, 1].map((colIndex) => (
                  <StyledTableCell key={colIndex}>
                    <input
                        type="text"
                        value={productYieldData[rowIndex][colIndex]}
                        onChange={(e) => handleDataChange(rowIndex, colIndex, e.target.value, 'productYield')}
                        style={{
                          width: "100%",
                          height: "24px",
                          border: "none",              // Remove the border
                          borderRadius: "4px",         // Retain rounded corners if desired
                          padding: "2px 4px",
                          backgroundColor: "transparent", // Keep the transparent background
                          boxShadow: "none",           // Remove any shadow
                          outline: "none",             // Remove the outline on focus
                          fontSize: "14px",            // Set font size if needed for a better appearance
                        }}
                      />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderTableContent = () => {
    switch (selectedButton) {
      case "Product Yield":
        return renderProductYieldTable();
      case "Water Usage":
        return renderOtherResourceTable('waterUsage');
      case "Energy Consumption":
        return renderOtherResourceTable('energyConsumption');
      case "Human resource utilization":
        return renderOtherResourceTable('humanResource');
      default:
        return null;
    }
  };

  const renderContent = () => {
    switch (cardId) {
      case "1":
        return (
          <>
            <Typography variant="h4" sx={{ mb: 4, color: "white", textAlign: "center" }}>
              Resource Utilization
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap:0 }}>
                  {resourceButtons.map((button) => (
                    <Button
                      key={button}
                      variant="contained"
                      onClick={() => setSelectedButton(button)}
                      sx={{
                        backgroundColor: '#DBDD7A',
                        color: 'black',
                        py: 1,
                        px: 3,
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        mb: 2,
                        '&:hover': { backgroundColor: '#c5c76e' },
                      }}
                    >
                      {button}
                    </Button>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                {renderTableContent()}
              </Grid>
            </Grid>
          </>
        );

      case "2":
        return (
          <>
            <Typography variant="h4" sx={{ mb: 4, color: "white", textAlign: "center" }}>
              Waste Generation and Management
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {wasteButtons.map((button) => (
                    <Button
                      key={button}
                      variant="contained"
                      onClick={() => setSelectedWasteButton(button)}
                      sx={{
                        backgroundColor: '#DBDD7A',
                        color: 'black',
                        py: 1,
                        px: 3,
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        mb: 2,
                        '&:hover': { backgroundColor: '#c5c76e' },
                      }}
                    >
                      {button}
                    </Button>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                {renderWasteTable()}
              </Grid>
            </Grid>
          </>
        );

      case "3":
        return (
          <>
            <Typography variant="h4" sx={{ mb: 4, color: "white", textAlign: "center" }}>
              Compliance to Regulatory & Customers Requirements
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
                  {complianceButtons.map((button) => (
                    <Button
                      key={button}
                      variant="contained"
                      onClick={() => setSelectedComplianceButton(button)}
                      sx={{
                        backgroundColor: '#DBDD7A',
                        color: 'black',
                        py: 1,
                        px: 3,
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        mb: 2,
                        '&:hover': { backgroundColor: '#c5c76e' },
                      }}
                    >
                      {button}
                    </Button>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} md={9}>
                {selectedComplianceButton === "Regulatory Requirements" 
                  ? renderComplianceTable('regulatory')
                  : renderComplianceTable('customer')}
              </Grid>
            </Grid>
          </>
        );

      default:
        return (
          <Typography variant="h6" sx={{ color: "white", textAlign: "center" }}>
            Card not found
          </Typography>
        );
    }
  };

  if (!isEnvironmental) {
    return (
      <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
        <AppHeader />
        <Container sx={{ py: 4 }}>
          <Typography variant="h4" sx={{ mb: 4, color: "white", textAlign: "center" }}>
            {location.pathname.includes('economic-details') ? 'Economic Details' : 'Social Details'} - Card {cardId}
          </Typography>
          <Box sx={{ p: 4, backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "8px" }}>
            <Typography variant="body1" sx={{ color: "white", textAlign: "center" }}>
              Detailed information for card {cardId} will be displayed here.
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
      <AppHeader />
         <Container sx={{ py: 4 }}>
        {renderContent()}
        {(cardId === "1" || cardId === "2" || cardId === "3") && (
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              backgroundColor: '#DBDD7A',
              color: 'black',
              py: 1,
              px: 3,
              borderRadius: '8px',
              fontWeight: 'bold',
              textTransform: 'none',
              mb: 2,
              '&:hover': { backgroundColor: '#c5c76e' },
            }}
          >
            Submit
          </Button>
        )}
      </Container>
    </Box>
  );
};

// Economic Details Page Componen
 const EconomicDetailsPage: FC = () => {
    const { cardId } = useParams();
    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState<string>("Turnover");
    const [tableData, setTableData] = useState<{ [key: string]: string[][] }>({});
  
    const cardDetails = {
      '1': {
        title: 'Turnover Analysis',
        buttons: ['Turnover', 'Increase in Turnover', 'Profit'],
        image: new1
      },
      '2': {
        title: 'ROI Metrics',
        buttons: ['ROI'],
        image: new2
      },
      '3': {
        title: 'Business Growth',
        buttons: ['Expansion/Diversification', 'Forward Integration', 'Backward Integration'],
        image: new3
      }
    };
  
    const currentCard = cardDetails[cardId as keyof typeof cardDetails];
  
    const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
      if (!selectedButton) return;
  
      setTableData(prev => {
        const newData = { ...prev };
        if (!newData[selectedButton]) {
          newData[selectedButton] = Array(8).fill(Array(12).fill(''));
        }
        const newSection = newData[selectedButton].map(row => [...row]);
        newSection[rowIndex][colIndex] = value;
        return {
          ...newData,
          [selectedButton]: newSection
        };
      });
    };
  
    const handleSave = () => {
      if (!selectedButton) return;
      console.log('Saving data:', tableData[selectedButton]);
    };
  
    if (!currentCard) {
      return (
        <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
          <AppHeader />
          <Container>
            <Typography variant="h6" sx={{ color: "white", textAlign: "center", mt: 4 }}>
              Card not found
            </Typography>
          </Container>
        </Box>
      );
    }
  
    // Table rendering function
    const renderTable = () => {
      switch (selectedButton) {
        case "Turnover":
          return (
            <TableContainer component={Paper} sx={{ backgroundColor: "white", borderRadius: 2 }}>
              <Table size="small" sx={{ borderCollapse: 'collapse', width: '100%' }}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        backgroundColor: "#81A895",
                        padding: "10px",
                        textAlign: "center"
                      }}
                    >
                      Process
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Hides
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Skin
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {['Raw to WB', 'Raw to Veg', 'WB/Veg to FL', 'Raw to FL'].map((process, rowIndex) => (
                    <TableRow key={process}>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          textAlign: "left"
                        }}
                      >
                        {process}
                      </TableCell>
                      {Array(2).fill(null).map((_, colIndex) => (
                        <TableCell
                          key={colIndex}
                          sx={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            textAlign: "center"
                          }}
                        >
                          <input
                            type="text"
                            value={tableData[selectedButton]?.[rowIndex]?.[colIndex] || ''}
                            onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                            style={{
                              width: "50%",
                              padding: "8px 12px",
                              border: "none",
                              borderRadius: "8px",
                              outline: "none",
                              boxShadow: "none",
                              fontSize: "14px",
                              fontWeight: "400",
                              color: "#333",
                              transition: "background-color 0.3s ease",
                              textAlign: "center"
                            }}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
          case "Increase in Turnover": // Fixed extra space issue here
        return (
          <TableContainer component={Paper} sx={{ backgroundColor: "white", borderRadius: 2 }}>
            <Table size="small" sx={{ borderCollapse: 'collapse', width: '100%' }}>
              <TableHead>
                <TableRow>
                  <StyledTableCell
                    sx={{
                      border: "1px solid #ccc",
                      backgroundColor: "#81A895",
                      padding: "10px",
                      textAlign: "center"
                    }}
                  >
                    Process
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      border: "1px solid #ccc",
                      padding: "10px",
                      backgroundColor: "#81A895",
                      textAlign: "center"
                    }}
                  >
                    Hides
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      border: "1px solid #ccc",
                      padding: "10px",
                      backgroundColor: "#81A895",
                      textAlign: "center"
                    }}
                  >
                    Skin
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {['Raw to WB', 'Raw to Veg', 'WB/Veg to FL', 'Raw to FL'].map((process, rowIndex) => (
                  <TableRow key={process}>
                    <TableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        textAlign: "left"
                      }}
                    >
                      {process}
                    </TableCell>
                    {Array(2).fill(null).map((_, colIndex) => (
                      <TableCell
                        key={colIndex}
                        sx={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          textAlign: "center"
                        }}
                      >
                        <input
                          type="text"
                          value={tableData[selectedButton]?.[rowIndex]?.[colIndex] || ''}
                          onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                          style={{
                            width: "50%",
                            padding: "8px 12px",
                            border: "none",
                            borderRadius: "8px",
                            outline: "none",
                            boxShadow: "none",
                            fontSize: "14px",
                            fontWeight: "400",
                            color: "#333",
                            transition: "background-color 0.3s ease",
                            textAlign: "center"
                          }}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
          case "Profit":
          return (
            <TableContainer component={Paper} sx={{ backgroundColor: "white", borderRadius: 2 }}>
              <Table size="small" sx={{ borderCollapse: 'collapse', width: '100%' }}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        backgroundColor: "#81A895",
                        padding: "10px",
                        textAlign: "center"
                      }}
                    >
                      Process
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Hides
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Skin
                    </StyledTableCell>
                  </TableRow>
                  </TableHead>
                <TableBody>
                  {['Raw to WB', 'Raw to Veg', 'WB/Veg to FL', 'Raw to FL'].map((process, rowIndex) => (
                    <TableRow key={process}>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          textAlign: "left"
                        }}
                      >
                        {process}
                      </TableCell>
                      {Array(2).fill(null).map((_, colIndex) => (
                        <TableCell
                          key={colIndex}
                          sx={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            textAlign: "center"
                          }}
                        >
                          <input
                            type="text"
                            value={tableData[selectedButton]?.[rowIndex]?.[colIndex] || ''}
                            onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                            style={{
                              width: "50%",
                              padding: "8px 12px",
                              border: "none",
                              borderRadius: "8px",
                              outline: "none",
                              boxShadow: "none",
                              fontSize: "14px",
                              fontWeight: "400",
                              color: "#333",
                              transition: "background-color 0.3s ease",
                              textAlign: "center"
                            }}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        case "ROI":
          return (
            <TableContainer component={Paper} sx={{ backgroundColor: "white", borderRadius: 2 }}>
              <Table size="small" sx={{ borderCollapse: 'collapse', width: '100%' }}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        backgroundColor: "#81A895",
                        padding: "10px",
                        textAlign: "center"
                      }}
                    >
                      Process
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Hides
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Skin
                    </StyledTableCell>
                  </TableRow>
                  </TableHead>
                <TableBody>
                  {['Raw to WB', 'Raw to Veg', 'WB/Veg to FL', 'Raw to FL'].map((process, rowIndex) => (
                    <TableRow key={process}>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          textAlign: "left"
                        }}
                      >
                        {process}
                      </TableCell>
                      {Array(2).fill(null).map((_, colIndex) => (
                        <TableCell
                          key={colIndex}
                          sx={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            textAlign: "center"
                          }}
                        >
                          <input
                            type="text"
                            value={tableData[selectedButton]?.[rowIndex]?.[colIndex] || ''}
                            onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                            style={{
                              width: "50%",
                              padding: "8px 12px",
                              border: "none",
                              borderRadius: "8px",
                              outline: "none",
                              boxShadow: "none",
                              fontSize: "14px",
                              fontWeight: "400",
                              color: "#333",
                              transition: "background-color 0.3s ease",
                              textAlign: "center"
                            }}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        case "Expansion/Diversification":
          return (
            <TableContainer component={Paper} sx={{ backgroundColor: "white", borderRadius: 2 }}>
              <Table size="small" sx={{ borderCollapse: 'collapse', width: '100%' }}>
                <TableHead>
                <TableRow>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        backgroundColor: "#81A895",
                        padding: "10px",
                        textAlign: "center"
                      }}
                    >
                      Process
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Hides
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Skin
                    </StyledTableCell>
                  </TableRow>
                  </TableHead>
                <TableBody>
                  {['Raw to WB', 'Raw to Veg', 'WB/Veg to FL', 'Raw to FL'].map((process, rowIndex) => (
                    <TableRow key={process}>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          textAlign: "left"
                        }}
                      >
                        {process}
                      </TableCell>
                      {Array(2).fill(null).map((_, colIndex) => (
                        <TableCell
                          key={colIndex}
                          sx={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            textAlign: "center"
                          }}
                        >
                          <input
                            type="text"
                            value={tableData[selectedButton]?.[rowIndex]?.[colIndex] || ''}
                            onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                            style={{
                              width: "50%",
                              padding: "8px 12px",
                              border: "none",
                              borderRadius: "8px",
                              outline: "none",
                              boxShadow: "none",
                              fontSize: "14px",
                              fontWeight: "400",
                              color: "#333",
                              transition: "background-color 0.3s ease",
                              textAlign: "center"
                            }}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        case "Forward Integration":
          return (
            <TableContainer component={Paper} sx={{ backgroundColor: "white", borderRadius: 2 }}>
              <Table size="small" sx={{ borderCollapse: 'collapse', width: '100%' }}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        backgroundColor: "#81A895",
                        padding: "10px",
                        textAlign: "center"
                      }}
                    >
                      Process
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Hides
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Skin
                    </StyledTableCell>

                  </TableRow>
                  </TableHead>
                <TableBody>
                  {['Raw to WB', 'Raw to Veg', 'WB/Veg to FL', 'Raw to FL'].map((process, rowIndex) => (
                    <TableRow key={process}>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          textAlign: "left"
                        }}
                      >
                        {process}
                      </TableCell>
                      {Array(2).fill(null).map((_, colIndex) => (
                        <TableCell
                          key={colIndex}
                          sx={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            textAlign: "center"
                          }}
                        >
                          <input
                            type="text"
                            value={tableData[selectedButton]?.[rowIndex]?.[colIndex] || ''}
                            onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                            style={{
                              width: "50%",
                              padding: "8px 12px",
                              border: "none",
                              borderRadius: "8px",
                              outline: "none",
                              boxShadow: "none",
                              fontSize: "14px",
                              fontWeight: "400",
                              color: "#333",
                              transition: "background-color 0.3s ease",
                              textAlign: "center"
                            }}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        case "Backward Integration":
          return (
            <TableContainer component={Paper} sx={{ backgroundColor: "white", borderRadius: 2 }}>
              <Table size="small" sx={{ borderCollapse: 'collapse', width: '100%' }}>
                <TableHead>

                  <TableRow>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        backgroundColor: "#81A895",
                        padding: "10px",
                        textAlign: "center"
                      }}
                    >
                      Process
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Hides
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        backgroundColor: "#81A895",
                        textAlign: "center"
                      }}
                    >
                      Skin
                    </StyledTableCell>
                  </TableRow>
                  </TableHead>
                <TableBody>
                  {['Raw to WB', 'Raw to Veg', 'WB/Veg to FL', 'Raw to FL'].map((process, rowIndex) => (
                    <TableRow key={process}>
                      <TableCell
                        sx={{
                          border: "1px solid #ccc",
                          padding: "10px",
                          textAlign: "left"
                        }}
                      >
                        {process}
                      </TableCell>
                      {Array(2).fill(null).map((_, colIndex) => (
                        <TableCell
                          key={colIndex}
                          sx={{
                            border: "1px solid #ccc",
                            padding: "10px",
                            textAlign: "center"
                          }}
                        >
                          <input
                            type="text"
                            value={tableData[selectedButton]?.[rowIndex]?.[colIndex] || ''}
                            onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                            style={{
                              width: "50%",
                              padding: "8px 12px",
                              border: "none",
                              borderRadius: "8px",
                              outline: "none",
                              boxShadow: "none",
                              fontSize: "14px",
                              fontWeight: "400",
                              color: "#333",
                              transition: "background-color 0.3s ease",
                              textAlign: "center"
                            }}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        default:
          return null;
      }
    };
  
    return (
      <Box sx={{ minHeight: "100vh", width: "100%", backgroundColor: "#81A895" }}>
        <AppHeader />
        <Container sx={{ py: 10 }}>
          <Typography variant="h4" sx={{ mt: 2, color: "white", textAlign: "center", fontWeight: "bold" }}>
            {currentCard.title}
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={20} md={3}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0}}>
                {currentCard.buttons.map((button) => (
                  <Button
                    key={button}
                    onClick={() => setSelectedButton(button)}
                    sx={{
                      backgroundColor: '#DBDD7A',
                      color: 'black',
                      py: 1,
                      px: 3,
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      mb: 2,
                      '&:hover': { backgroundColor: '#c5c76e' },
                    }}
                  >
                    {button}
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid item xs={20} md={6}>
              {renderTable()}
            </Grid>
          </Grid>
        </Container>
      </Box>
    );
  };
// Main App Component
const App: FC = () => {
  return (
    <Router>
      <Routes>
        {/* Common routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/user-login" element={<UserLoginPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        
        {/* User routes */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/next" element={<NextPage />} />
        <Route path="/page3" element={<Page3WithButtons />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/card-details/:cardId" element={<CardDetailsPage />} />
        <Route path="/economic-details/:cardId" element={<EconomicDetailsPage />} />
        <Route path="/social-details/:cardId" element={<CardDetailsPage />} />
        
        {/* Admin routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/environmental" element={<Page3WithButtons />} />
        <Route path="/admin/economic" element={<Page4 />} />
        <Route path="/admin/social" element={<Page5 />} /> 
        <Route path="/buttons-page/:imageId" element={<ButtonsPage />} />
        <Route path="/admin/card-details/:cardId" element={<CardDetailsPage />} />
        <Route path="/admin/economic-details/:cardId" element={<EconomicDetailsPage />} />
        <Route path="/admin/social-details/:cardId" element={<CardDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
