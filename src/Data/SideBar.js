import { faHome, faCartShopping, faList, faCalendar, faChartSimple, faUsers, faShop, faUser, faHistory, faFileInvoice } from '@fortawesome/free-solid-svg-icons';

const sideBar = [
    {
        icon: faHome,
        title: "DashBoard",
        link: "/",
        iconColor: "home"
    },
    {
        icon: faCartShopping,
        title: "Order",
        link: "/order",
        iconColor: "order"
    },
    {
        icon: faList,
        title: "Form",
        link: "/form",
        iconColor: "form"

    },
    {
        icon: faCalendar,
        title: "Calendar",
        link: "/calendar",
        iconColor: "calendar"
    },
    {
        icon: faChartSimple,
        title: "Charts",
        link: "/charts",
        iconColor: "charts"
    },
    {
        icon: faUsers,
        title: "Users",
        link: "/user",
        iconColor: "users"
    },
    {
        icon: faShop,
        title: "Product",
        link: "/product",
        iconColor: "product"
    },
    {
        icon: faUser,
        title: "Profile",
        link: "/profile",
        iconColor: "profile"
    },
    {
        icon: faHistory,
        title: "History",
        link: "/history",
        iconColor: "history"
    },
    {
        icon: faFileInvoice,
        title: "Reports",
        link: "/report",
        iconColor: "reports"
    },
];

export default sideBar;
