import Users from './users';
import Balance from './balance';
import Company from "./companies";
import Menu from "./menus";
import Request from "./requests";
import Rol from "./roles";
import UserRole from "./userRol";



export default {
    ...Users,
    ...Balance,
    ...Company,
    ...Menu,
    ...Request,
    ...Rol,
    ...UserRole
}