import Main from "../components/dashboard/Dashboard";

const Home = () => {
  return (
    <>
      <div id="app" style={{ backgroundColor: "#0f0f1e", minHeight: "100vh" }}>
        <div className="main-wrapper">
          <Main />
        </div>
      </div>
    </>
  );
};

export default Home;
