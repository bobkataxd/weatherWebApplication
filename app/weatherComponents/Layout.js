const Layout = ({ children }) => {
    return (
      <div style={{ padding: "1rem", maxWidth: "1200px", margin: "0 auto" }}>
        <header style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1>Emo's Forecast App</h1>
        </header>
        <main>{children}</main>
        <footer style={{ textAlign: "center", marginTop: "2rem" }}>
          <p>Powered by EMO CHOLAKOV</p>
        </footer>
      </div>
    );
  };
  
  export default Layout;
  