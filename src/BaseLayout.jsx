import React, {useEffect} from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";
import { useNavigation } from "react-router";
import nProgress from "nprogress";
import { ToastContainer } from "react-toastify";

function BaseLayout() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  useEffect(() => {
    if (navigation.state === "loading") {
      nProgress.start();
    } else {
      nProgress.done();
    }
  }, [navigation.state]);

  return (
    <div>
      <NavBar />
      <Outlet />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default BaseLayout;
