import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import bg1 from "./images/bg1.jpg";
import bg2 from "./images/bg2.jpg";


function App() {



  return (<>
      <Header title="This is title" descr="This is Description!" />
  <Layout title="This is title" descr="This is Description!" urlBg={bg1} colorBg />
  <Layout title="This is title" descr="This is Description!" colorBg="#e2e2e2" />
  <Layout title="This is title" descr="This is Description!" urlBg={bg2} colorBg />
  <Footer />

  </>);
}

export default App;
