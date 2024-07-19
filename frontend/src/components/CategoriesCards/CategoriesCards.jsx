// CategoriesCard.jsx
import React, { useState } from "react";
import { FaPaw, FaTshirt } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import "./CategoriesCards.css";
import MyPopOver from "../MyPopOver/MyPopOver";
import { Fade, Toolbar, Tooltip } from "@mui/material";

const CategoriesCard = ({ onCategoryClick }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Zapatillas",
      description: "Las mejores zapatillas del mercado",
      icon: <FcSportsMode size={50} />,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmi58Tg_mGuNrI4LWn72ONemeFm0Vi243ZYA&s",
    },
    {
      id: 2,
      name: "Skateboard",
      description: "Encuentra todo lo que necesitas para armar tu patineta",
      icon: <FaPaw size={50} />,
      img: "https://www.skatehut.co.uk/media/catalog/product/R/A/RAM_2019_PLT_COM_BLK_11.jpg?quality=80&fit=bounds&height=&width=&canvas=:",
    },
    {
      id: 3,
      name: "Vestuario",
      description: "Explora nuestra colección de ropa de moda.",
      icon: <FaTshirt size={50} />,
      img: "https://mensflair.com/wp-content/uploads/2023/09/CoolestSkatewear75.jpg",
    },
  ];

  const handleCategoryClick = (category) => {
    onCategoryClick(category.name);
  };

  const handleHover = (category) => {
    setHoveredCategory(category.id);
  };

  const handleHoverLeave = () => {
    setHoveredCategory(null);
  };

  // PopOver

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          key={category.id}
          onClick={() => handleCategoryClick(category)}
          onMouseEnter={() => handleHover(category)}
          onMouseLeave={handleHoverLeave}
        >
          <Tooltip
            title={category.description}
            placement="top"
            arrow
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            sx={{ textAlign: "center" }}
          >
            <div
              className={`category-card ${
                hoveredCategory === category.id ? "hovered" : ""
              }`}
              aria-owns={open ? "mouse-over-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              style={{
                backgroundImage: `url(${category.img})`,
                backgroundSize: "cover",
              }}
            >
              {/* {category.icon} */}
            </div>
          </Tooltip>
          {/* <MyPopOver
            anchorEl={anchorEl}
            handlePopoverClose={handlePopoverClose}
            open={hoveredCategory === category.id ? open : false}
            description={
              hoveredCategory === category.id ? category.description : null
            }
          ></MyPopOver> */}
          <h6 className="category-name">{category.name}</h6>
        </div>
      ))}
    </div>
  );
};

export default CategoriesCard;
