import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaHome, FaUser, FaMoneyBill, FaLock, FaUserAltSlash, FaTimesCircle, FaClock } from "react-icons/fa";
import { BiAnalyse, BiCog } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { CgMoveRight, CgMoveLeft } from "react-icons/cg";

import { NavLink } from "react-router-dom";
import SidebarMenu from "./SideBarMenu";


const routes = [
    {
        path: "/",
        name: "Dashboard",
        icon: <FaHome />,
    },

    {
        path: "/order",
        name: "Order",
        icon: <BiAnalyse />,
    },
    {
        path: "/user",
        name: "Users",
        icon: <FaUser />,
    },
    {
        path: "/customer",
        name: "Customer",
        icon: <BsFillPersonCheckFill />,

    },
    {
        path: "/visit",
        name: "Visit",
        icon: <MdMessage />,
        subRoutes: [
            {
                path: "/visit/today",
                name: "Today",
                icon: <FaUserAltSlash />,
            },
            {
                path: "/visit/week",
                name: "Week",
                icon: <FaTimesCircle />,
            },
            {
                path: "/visit/month",
                name: "Month",
                icon: <FaClock />,
            },
        ]
    },

    {
        path: "/employ",
        name: "Employ",
        icon: <BiAnalyse />,
    },
    {
        path: "/setting",
        name: "Setting",
        icon: <BiCog />,
        subRoutes: [
            {
                path: "/setting/profile",
                name: "Profile",
                icon: <FaUser />,
            },
            {
                path: "/setting/2fa",
                name: "2FA",
                icon: <FaLock />,
            },
            {
                path: "/setting/billing",
                name: "Billing",
                icon: <FaMoneyBill />,
            },
        ]
    },

];


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const [isActive, setIsActive] = useState(true)


    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.8,
            },

        },
        show: {
            width: "auto",
            opacity: 1,
            transition: {
                duration: 0.8,
            },
        },
    };


    //     // 
    //     const ref = useRef();

    //   useEffect(() => {
    //     const checkIfClickedOutside = (e) => {
    //       // If the menu is open and the clicked target is not within the menu,
    //       // then close the menu
    //       if (isOpen && ref.current && !ref.current.contains(e.target)) {
    //         setIsOpen(false);
    //       }
    //     };

    //     document.addEventListener("mousedown", checkIfClickedOutside);

    //     return () => {
    //         // Cleanup the event listener
    //         document.removeEventListener("mousedown", checkIfClickedOutside);
    //       };
    //     }, [isOpen]);
    // 

    return (

        <motion.div animate={{
            width: isOpen ? "215px" : "60px",
            transition: {
                duration: 0.3,
                type: "spring",
                damping: 10,
            },
        }} className="sidebar" >


            <div className="top_section">
                {isOpen && <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"

                    exit="hidden"
                    className="logo">Auspicious</motion.h1>}

                <div className="bars" onClick={toggle}>
                    {isActive ? < CgMoveLeft onClick={() => {
                        setIsActive(!isActive)
                    }} /> :
                        <CgMoveRight onClick={() => {
                            setIsActive(!isActive)
                        }} />
                    }
                </div>
            </div>

            <section className="routes">
                {routes.map((route, index) => {
                    if (route.subRoutes) {
                        return (
                            <SidebarMenu
                                setIsOpen={setIsOpen}
                                route={route}
                                showAnimation={showAnimation}
                                isOpen={isOpen}
                            />
                        );
                    }


                    return (
                        <NavLink activeClassName="active" to={route.path} key={index} className="link">
                            <div className="icon">
                                {route.icon}
                            </div>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        variants={showAnimation}
                                        initial="hidden"
                                        animate="show"

                                        exit="hidden"

                                        className="link_text">
                                        {route.name}
                                    </motion.div>)}
                            </AnimatePresence>
                        </NavLink>
                    );
                })}
            </section>
        </motion.div>



    )
};

export default Sidebar;
