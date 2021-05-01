import {createAction} from "@reduxjs/toolkit";
import {ActionType} from "../util/const";

const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE);

export {redirectToRoute};
